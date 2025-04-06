import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-container">
          {/* Column 1 */}
          <div className="footer-column">
            <h3>Practo</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>For patients</h3>
            <ul>
              <li>
                <a href="#">Search for clinics</a>
              </li>
              <li>
                <a href="#">Search for hospitals</a>
              </li>
              <li>
                <a href="#">Practo Plus</a>
              </li>
              <li>
                <a href="#">Covid Hospital listing</a>
              </li>
              <li>
                <a href="#">Practo Care Clinics</a>
              </li>
              <li>
                <a href="#">Read health articles</a>
              </li>
              <li>
                <a href="#">Read about medicines</a>
              </li>
              <li>
                <a href="#">Practo drive</a>
              </li>
              <li>
                <a href="#">Health app</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>For doctors</h3>
            <ul>
              <li>
                <a href="#">Practo Profile</a>
              </li>
              <li>
                <a href="#">Ray by Practo</a>
              </li>
              <li>
                <a href="#">Practo Reach</a>
              </li>
              <li>
                <a href="#">Practo Prime</a>
              </li>
            </ul>
            <h3>For hospitals</h3>
            <ul>
              <li>
                <a href="#">Insta by Practo</a>
              </li>
              <li>
                <a href="#">Qikwell by Practo</a>
              </li>
              <li>
                <a href="#">Practo Profile</a>
              </li>
              <li>
                <a href="#">Practo Reach</a>
              </li>
              <li>
                <a href="#">Practo Drive</a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>More</h3>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">PCS T&C</a>
              </li>
              <li>
                <a href="#">Healthcare Directory</a>
              </li>
              <li>
                <a href="#">Practo Health Wiki</a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="footer-column">
            <h3>Social</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">practo</div>
          <p>© 2017 Practo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
