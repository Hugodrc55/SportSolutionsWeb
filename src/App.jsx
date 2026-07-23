import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AProposPage = lazy(() => import("./pages/AProposPage.jsx"));
const CandidatPage = lazy(() => import("./pages/CandidatPage.jsx"));
const ClubPage = lazy(() => import("./pages/ClubPage.jsx"));
const LeMagPage = lazy(() => import("./pages/LeMagPage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const SSCPage = lazy(() => import("./pages/SSCPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="a-propos" element={<AProposPage />} />
            <Route path="espace-candidat" element={<CandidatPage />} />
            <Route path="espace-club" element={<ClubPage />} />
            <Route path="le-mag" element={<LeMagPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="sport-solutions-competence" element={<SSCPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
