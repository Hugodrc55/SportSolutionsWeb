import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AProposPage from "./pages/AProposPage.jsx";
import CandidatPage from "./pages/CandidatPage.jsx";
import ClubPage from "./pages/ClubPage.jsx";
import LeMagPage from "./pages/LeMagPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SSCPage from "./pages/SSCPage.jsx";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
