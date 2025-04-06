import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import VcLandingPage from "./pages/VcLandingPage";
import Doctor from "./pages/DoctorsList";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/VcLanding" element={<VcLandingPage />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
