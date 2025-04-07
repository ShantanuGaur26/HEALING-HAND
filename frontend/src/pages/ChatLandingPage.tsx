import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/VcLandingPage.css";
import Footer from "../components/Footer";
import img5 from "../assets/img.png";
import { useNavigate } from "react-router-dom";

const ALL_CITIES = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Pune",
  "Hyderabad",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

const ALL_SPECIALTIES = [
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
  "Cardiologist",
  "Orthopedics",
  "Dentist",
  "ENT",
  // You can add more if needed
];

const OnlineConsultPage: React.FC = () => {
  const navigate = useNavigate();
  const [showSpecialities, setShowSpecialities] = useState(false);

  const toggleSpecialities = () => {
    setShowSpecialities((prev) => !prev);
  };

  return (
    <>
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
            <button
              className="consult-now-btn"
              onClick={() => navigate("/chat")}
            >
              Chat Now
            </button>

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
            <img src={img5} alt="Online Consultation" />
          </div>
        </section>

        {/* Specialities Section */}
        <section className="specialities-section">
          <h2>25+ Specialities</h2>
          <p>Consult with top doctors across specialities</p>
          <button className="view-all-button" onClick={toggleSpecialities}>
            See all Specialities
          </button>

          {showSpecialities && (
            <div className="specialities-container">
              {ALL_SPECIALTIES.map((speciality) => (
                <div key={speciality} className="speciality-item">
                  {speciality}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default OnlineConsultPage;
