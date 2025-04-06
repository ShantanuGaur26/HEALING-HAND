import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Auth.css";

const AuthPage: React.FC = () => {
  // Tab state: 'login' or 'register'
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Register form states
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Logging in with:", { loginEmail, loginPassword, rememberMe });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log("Registering with:", {
      registerName,
      registerEmail,
      registerPassword,
      registerConfirmPassword,
    });
  };

  return (
    <>
      <Navbar />
      <div className="auth-page-container">
        <div className="auth-form-wrapper">
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
              <label htmlFor="loginEmail">Mobile Number / Email ID</label>
              <input
                type="text"
                id="loginEmail"
                placeholder="Mobile Number / Email ID"
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

          {/* REGISTER FORM */}
          {activeTab === "register" && (
            <form className="auth-form" onSubmit={handleRegisterSubmit}>
              <label htmlFor="registerName">Name</label>
              <input
                type="text"
                id="registerName"
                placeholder="Full Name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />

              <label htmlFor="registerEmail">Mobile Number / Email ID</label>
              <input
                type="text"
                id="registerEmail"
                placeholder="Mobile Number / Email ID"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
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

              <label htmlFor="registerConfirmPassword">Confirm Password</label>
              <input
                type="password"
                id="registerConfirmPassword"
                placeholder="Confirm Password"
                value={registerConfirmPassword}
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
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

export default AuthPage;
