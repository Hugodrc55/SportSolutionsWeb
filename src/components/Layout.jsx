import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import BackgroundVeil from "./ui/BackgroundVeil.jsx";

export default function Layout() {
  return (
    <>
      <BackgroundVeil />
      <ScrollToHash />
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
