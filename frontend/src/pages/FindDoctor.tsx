import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Adjust import path if needed
import "../styles/FindDoctor.css";
import Footer from "../components/Footer";

// Example list of Indian cities
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
  // Add more as needed
];

// Example list of specialties
const ALL_SPECIALTIES = [
  "General physician",
  "Gynecologist/Obstetrician",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
  "Cardiologist",
  "Orthopedics",
  "Dentist",
  "ENT",
  // Add more as needed
];

const FindDoctorsPage: React.FC = () => {
  const [city, setCity] = useState("Bangalore");
  const [specialty, setSpecialty] = useState("General physician");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    // In a real app, you'd perform a search (e.g., call an API)
    alert(
      `Searching for: 
      City = ${city}, 
      Specialty = ${specialty}, 
      Query = ${query}`
    );
  };

  return (
    <>
      <Navbar />

      <div className="find-doctor-hero">
        <div className="hero-content">
          <h1>Your home for health</h1>
          <h2>Find and Book</h2>

          {/* Search Bar */}
          <div className="search-bar">
            {/* Location Filter */}
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {ALL_CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            {/* Specialty Filter */}
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              {ALL_SPECIALTIES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            {/* Search Button */}
            <button onClick={handleSearch}>Search</button>
          </div>

          {/* Popular Searches */}
          <div className="popular-searches">
            <span>Popular searches:</span>
            <a href="#">Dentist</a>
            <a href="#">Pediatrician</a>
            <a href="#">Gynecologist</a>
            <a href="#">Physiotherapist</a>
          </div>
        </div>
      </div>

      {/* Additional content could go here (icons, info cards, etc.) */}
      <Footer/>
    </>
  );
};

export default FindDoctorsPage;
