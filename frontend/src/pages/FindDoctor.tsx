import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
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
];

// Updated Doctor interface with a city field
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  status: "Available" | "Unavailable";
  image: string;
  city: string;
}

/** Sample list of doctors (each doctor now includes a city) */
const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Richard James",
    specialty: "General physician",
    status: "Available",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    city: "Bangalore",
  },
  {
    id: 2,
    name: "Emily Larson",
    specialty: "Gynecologist/Obstetrician",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Sarah Patel",
    specialty: "Dermatologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
    city: "Delhi",
  },
  {
    id: 4,
    name: "Christopher Lee",
    specialty: "Neurologist",
    status: "Available",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    city: "Bangalore",
  },
  {
    id: 5,
    name: "John Wilson",
    specialty: "Pediatrician",
    status: "Unavailable",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    city: "Chennai",
  },
  {
    id: 6,
    name: "Anna Green",
    specialty: "Gastroenterologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
    city: "Bangalore",
  },
  {
    id: 7,
    name: "Michael Carter",
    specialty: "Dermatologist",
    status: "Unavailable",
    image:
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    city: "Mumbai",
  },
  {
    id: 8,
    name: "Julia Brown",
    specialty: "General physician",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
    city: "Delhi",
  },
  // Add more doctors as needed
];

const FindDoctorsPage: React.FC = () => {
  const [city, setCity] = useState("Bangalore");
  const [specialty, setSpecialty] = useState("General physician");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Doctor[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Update suggestions when query, city, or specialty changes.
  useEffect(() => {
    if (query.length >= 1) {
      const filtered = DOCTORS.filter((doc) => {
        const matchesCity = doc.city.toLowerCase() === city.toLowerCase();
        const matchesSpecialty =
          specialty === "All" || doc.specialty === specialty;
        // Use startsWith for matching initial letters.
        const matchesName = doc.name
          .toLowerCase()
          .startsWith(query.toLowerCase());
        return matchesCity && matchesSpecialty && matchesName;
      });
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, city, specialty]);

  const handleSearch = () => {
    // In a real app, you'd perform a search (e.g., call an API)
    alert(
      `Searching for:\nCity = ${city},\nSpecialty = ${specialty},\nQuery = ${query}`
    );
  };

  // Filter the doctor list based on specialty (and optionally query)
  const filteredDoctors =
    specialty === "All"
      ? DOCTORS.filter((doc) => doc.city.toLowerCase() === city.toLowerCase())
      : DOCTORS.filter(
          (doc) =>
            doc.city.toLowerCase() === city.toLowerCase() &&
            doc.specialty === specialty
        );

  return (
    <>
      <Navbar />
      <div className="find-doctor-hero">
        <div className="hero-content">
          <h1>Your home for health</h1>
          <h2>Find the best doctors near you</h2>

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

            {/* Search Input with Auto-suggestions */}
            <div className="search-input-wrapper">
              <input
                type="text"
                placeholder="Search doctor name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query.length > 0 && setShowSuggestions(true)}
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((doc) => (
                    <li
                      key={doc.id}
                      onClick={() => {
                        setQuery(doc.name);
                        setShowSuggestions(false);
                      }}
                    >
                      {doc.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Specialty Filter */}
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              {["All", ...ALL_SPECIALTIES].map((s) => (
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

      {/* Results Section */}
      <div className="results-section">
        <h2>Doctors in {city}</h2>
        <div className="doctor-list-container">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="doctor-card">
              <img src={doc.image} alt={doc.name} />
              <div className="doctor-info">
                <p
                  className={
                    doc.status === "Available"
                      ? "status-available"
                      : "status-unavailable"
                  }
                >
                  {doc.status}
                </p>
                <h3>{doc.name}</h3>
                <p className="doctor-specialty">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FindDoctorsPage;
