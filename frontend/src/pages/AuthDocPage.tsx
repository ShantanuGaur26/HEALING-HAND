import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/AuthDoc.css";

const DoctorAuthPage: React.FC = () => {
  // Tab state: 'login' or 'register'
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Doctor Registration form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [address, setAddress] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic for doctor
    console.log("Logging in with:", { loginEmail, loginPassword, rememberMe });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic for doctor
    console.log("Registering doctor with:", {
      firstName,
      lastName,
      registerEmail,
      phoneNumber,
      registerPassword,
      address,
      specialisation,
      experience,
      bio,
    });
  };

  return (
    <>
      <Navbar />
      <div className="doctor-auth-page-container">
        <div className="doctor-auth-form-wrapper">
          {/* Tabs for Login / Register */}
          <div className="auth-tabs">
            <button
              className={activeTab === "login" ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={activeTab === "register" ? "tab active-tab" : "tab"}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {/* LOGIN FORM */}
          {activeTab === "login" && (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />

              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />

              <div className="auth-form-extra">
                <div>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe"> Remember me for 30 days</label>
                </div>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="auth-submit-btn">
                Login
              </button>

              <div className="otp-option">
                <a href="#">Login with OTP instead of password</a>
              </div>
            </form>
          )}

          {/* REGISTER FORM FOR DOCTORS */}
          {activeTab === "register" && (
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />

              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                id="registerEmail"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                id="registerPassword"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />

              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <label htmlFor="specialisation">Specialisation</label>
              <input
                type="text"
                id="specialisation"
                placeholder="Specialisation"
                value={specialisation}
                onChange={(e) => setSpecialisation(e.target.value)}
                required
              />

              <label htmlFor="experience">Experience (in years)</label>
              <input
                type="number"
                id="experience"
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />

              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                placeholder="Short Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
              />

              <button type="submit" className="auth-submit-btn">
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorAuthPage;
