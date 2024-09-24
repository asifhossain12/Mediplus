import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At MediPlus, we believe in redefining healthcare with excellence and innovation. Our mission is to provide comprehensive, personalized care that puts your health first. With a team of dedicated professionals, state-of-the-art technology, and a patient-centered approach, we are committed to delivering the best medical services.

We understand that healthcare goes beyond just treatment—it’s about building lasting relationships with our patients, ensuring comfort, and promoting wellness. Whether it's preventive care, treatment, or recovery, MediPlus stands by your side every step of the way. Your health is our responsibility, and we take that seriously.

Trust MediPlus for compassionate care, cutting-edge solutions, and a seamless healthcare experience tailored just for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
