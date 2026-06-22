import React, { useRef, useMemo, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const BALL_ORANGE = "#1DAE88";
const BALL_LINES = "#1a1a1a";

const FLOOR_Y = -0.9;
const BALL_RADIUS = 0.5;
// Positions : tennis à gauche, basket à droite et plus haut
const BASKET_POS = [3.5, 0.65, -2];
const TENNIS_POS = [2, 0.2, -2];

// Fallback : ballon fait main si le modèle .glb n’est pas dispo
function BasketballProcedural() {
  const group = useRef();
  const seamCurves = useMemo(() => {
    const r = 0.52;
    const curves = [];
    for (let plane = 0; plane < 3; plane++) {
      const pts = [];
      for (let i = 0; i <= 48; i++) {
        const t = (i / 48) * Math.PI * 2;
        if (plane === 0) pts.push(new THREE.Vector3(r * Math.cos(t), 0, r * Math.sin(t)));
        else if (plane === 1) pts.push(new THREE.Vector3(r * Math.cos(t), r * Math.sin(t), 0));
        else pts.push(new THREE.Vector3(0, r * Math.cos(t), r * Math.sin(t)));
      }
      curves.push(new THREE.BufferGeometry().setFromPoints(pts));
    }
    return curves;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.set(BASKET_POS[0], BASKET_POS[1], BASKET_POS[2]);
    group.current.rotation.x = t * 0.12;
    group.current.rotation.z = t * 0.08;
  });

  return (
    <group ref={group} position={BASKET_POS} scale={1.2}>
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.5, 48, 48]} />
        <meshStandardMaterial color={BALL_ORANGE} roughness={0.6} metalness={0.05} />
      </mesh>
      {seamCurves.map((geom, i) => (
        <lineLoop key={i} geometry={geom}>
          <lineBasicMaterial color={BALL_LINES} />
        </lineLoop>
      ))}
    </group>
  );
}

// Vrai modèle 3D chargé depuis un fichier .glb
function BasketballModel({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.set(BASKET_POS[0], BASKET_POS[1], BASKET_POS[2]);
    group.current.rotation.x = t * 0.12;
    group.current.rotation.z = t * 0.08;
  });

  return (
    <group ref={group} position={BASKET_POS} scale={1.2}>
      <primitive object={clonedScene} />
    </group>
  );
}

function BasketballWithFallback() {
  const modelUrl = "/models/basketball.glb";
  return (
    <Suspense fallback={<BasketballProcedural />}>
      <BasketballModel url={modelUrl} />
    </Suspense>
  );
}

// Gestion d’erreur si le .glb est introuvable (404)
class GLTFErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <BasketballProcedural />;
    }
    return this.props.children;
  }
}

function Basketball() {
  return (
    <GLTFErrorBoundary>
      <BasketballWithFallback />
    </GLTFErrorBoundary>
  );
}

// Balle de tennis en arrière-plan (fond)
function TennisBallModel({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.x = t * 0.15;
    group.current.rotation.y = t * 0.2;
    group.current.rotation.z = t * 0.1;
  });

  return (
    <group ref={group} position={TENNIS_POS} scale={0.5}>
      <primitive object={clonedScene} />
    </group>
  );
}

function TennisBall() {
  const modelUrl = "/models/tennis_ball.glb";
  return (
    <Suspense fallback={null}>
      <TennisBallModel url={modelUrl} />
    </Suspense>
  );
}

// Dégradé pour le sol : visible au centre, fondu sur les bords (alphaMap = gris pour transparence)
function useFloorGradientTexture() {
  return useMemo(() => {
    const size = 256;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const center = size / 2;
    const gradient = ctx.createRadialGradient(center, center, 0, center, center, center);
    gradient.addColorStop(0, "rgba(255,255,255,0.6)");
    gradient.addColorStop(0.5, "rgba(255,255,255,0.2)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);
}

function Floor() {
  const gradientTex = useFloorGradientTexture();
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR_Y, 0]} receiveShadow>
      <planeGeometry args={[8, 8]} />
      <meshBasicMaterial
        map={gradientTex}
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </mesh>
  );
}

// Plan blanc semi-transparent devant les balles (plus proche de la caméra)
function WhiteBackdrop() {
  return (
    <mesh position={[0, 0, 0.5]} rotation={[0, Math.PI, 0]} renderOrder={1}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.3}
        depthWrite={false}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <>
      <color attach="background" args={["#EFF6FF"]} />
      <fog attach="fog" args={["#EFF6FF", 4, 18]} />
      <ambientLight intensity={0.85} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={20}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <pointLight position={[-3, 4, 2]} intensity={0.5} color="#7dd3fc" />

      <Floor />

      <Basketball />
      <TennisBall />
      <WhiteBackdrop />
    </>
  );
}
