import React, { useState } from "react";
import "../styles/DoctorsList.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image1 from "../assets/images1.jpg"

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  status: "Available" | "Unavailable";
  image: string;
}

/** Sample list of doctors */
const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General physician",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVlvm_NiEyuvC06TorpxxBKXWQaHQYcS_jg&s",
  },
  {
    id: 2,
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
  },
  {
    id: 3,
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
  },
  {
    id: 4,
    name: "Dr. Christopher Lee",
    specialty: "Neurologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVlvm_NiEyuvC06TorpxxBKXWQaHQYcS_jg&s",
  },
  {
    id: 5,
    name: "Dr. John Wilson",
    specialty: "Pediatrician",
    status: "Unavailable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVlvm_NiEyuvC06TorpxxBKXWQaHQYcS_jg&s",
  },
  {
    id: 6,
    name: "Dr. Anna Green",
    specialty: "Gastroenterologist",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
  },
  {
    id: 7,
    name: "Dr. Michael Carter",
    specialty: "Dermatologist",
    status: "Unavailable",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVlvm_NiEyuvC06TorpxxBKXWQaHQYcS_jg&s",
  },
  {
    id: 8,
    name: "Dr. Julia Brown",
    specialty: "General physician",
    status: "Available",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyd0pqCxufNDkpA5ejubyXuWCB_NRuSaIJ0g&s",
  },
  // Add more doctors as needed
];

/** All specialties to filter by */
const SPECIALTIES: string[] = [
  "All doctors",
  "General physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Gastroenterologist",
];

const DoctorListPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All doctors");

  /** Filter doctors by selected specialty */
  const filteredDoctors =
    selectedSpecialty === "All doctors"
      ? DOCTORS
      : DOCTORS.filter((doc) => doc.specialty === selectedSpecialty);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <aside className="sidebar">
          <h2>Browse through the doctors specialist</h2>
          <ul className="specialty-list">
            {SPECIALTIES.map((specialty) => (
              <li
                key={specialty}
                className={
                  specialty === selectedSpecialty ? "active-specialty" : ""
                }
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </li>
            ))}
          </ul>
        </aside>

        <main className="doctor-list-container">
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
        </main>
      </div>
      <Footer />
    </>
  );
};

export default DoctorListPage;
