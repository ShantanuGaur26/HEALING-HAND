import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";
import docimg1 from "../assets/dweb_find_doctors.png";
import docimg2 from "../assets/dweb_instant_video_consulation.png";
import docimg3 from "../assets/dweb_surgeries.png";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="landing-content">
        {/* Search Bar Below Header */}
        <SearchBar />

        {/* Cards Section */}
        <div className="card-section">
          <div className="card">
            {/* Replace with actual image or icon */}
            <img
              src = {docimg1}
              alt="Instant Video Consultation"
            />
            <h3>Instant Video Consultation</h3>
            <p>Connect within 30 secs</p>
          </div>

          <div className="card">
            <img
              src={docimg2}
              alt="Find Doctors Near You"
            />
            <h3>Find Doctors Near You</h3>
            <p>Confirmed appointments</p>
          </div>

          <div className="card">
            <img src={docimg3} alt="Surgeries" />
            <h3>Surgeries</h3>
            <p>Safe and trusted surgery centers</p>
          </div>
        </div>

        {/* Consultation Info Section */}
        <div className="consultation-section">
          <h2>Consult top doctors online for any health concern</h2>
          <p>
            Private online consultations with verified doctors in all
            specialties
          </p>
          <button className="view-all-button">View All Specialties</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
