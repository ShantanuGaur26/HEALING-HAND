import React from "react";
import Navbar from "../components/Navbar"; 
import "../styles/VcLandingPage.css";
import Footer from "../components/Footer";
import img5 from "../assets/img.png"

const OnlineConsultPage: React.FC = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      <div className="online-consult-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Skip the travel! Take Online Doctor Consultation</h1>
            <p className="hero-subtitle">
              Private consultation + Audio call - Starts at just ₹199
              <br />
              <span className="hero-highlight">+120 Doctors are online</span>
            </p>
            <button className="consult-now-btn">Consult Now</button>

            {/* Quick features row */}
            <div className="features-row">
              <div className="feature-item">
                <span>✔</span> Verified Doctors
              </div>
              <div className="feature-item">
                <span>✔</span> Digital Prescription
              </div>
              <div className="feature-item">
                <span>✔</span> Free followup
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            {/* Replace with your own image */}
            <img
              src={img5}
              alt="Online Consultation"
            />
          </div>
        </section>

        {/* Specialities Section */}
        <section className="specialities-section">
          <h2>25+ Specialities</h2>
          <p>Consult with top doctors across specialities</p>
          <button className="view-all-button">See all Specialities</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OnlineConsultPage;
