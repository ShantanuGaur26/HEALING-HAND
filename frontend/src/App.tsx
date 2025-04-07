import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import VcLandingPage from "./pages/VcLandingPage";
import Doctor from "./pages/DoctorsList";
import FindDoctor from "./pages/FindDoctor";
import Chat from "./pages/ChatPage";
import AuthDoc from "./pages/AuthDocPage";
import ChatLanding from "./pages/ChatLandingPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/VcLanding" element={<VcLandingPage />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/Finddoctor" element={<FindDoctor />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/authdoc" element={<AuthDoc />} />
        <Route path="/chatlanding" element={<ChatLanding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
