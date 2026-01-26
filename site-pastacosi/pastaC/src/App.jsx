import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/accueil";
import Menu from "./pages/Menu/menu";
import Reservation from "./pages/Reservation/reservation";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";
import Erreur from "./pages/Erreur/erreur";
import Mentions from "./pages/MentionsLegales/mentionslegales";
import Confidentialite from "./pages/Confidentialite/confidentialite";
import Cookies from "./pages/Cookies/cookies";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        <Route
          path="/politique-confidentialite"
          element={<Confidentialite />}
        />
        <Route path="/politique-cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;