import React from "react";
import "../styles/footer.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/doctors"}>Doctors</NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/notifications"}>Notifications</NavLink>
              </li>
              <li>
                <HashLink to={"/#contact"}>Contact Us</HashLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Social links</h3>
            <ul>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/asifhossain01/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="github">
                <a
                  href="https://www.github.com/asifhossain12"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/_.asif_12"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          Made by{" "}
          
            Asif & Surojit
          {" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
