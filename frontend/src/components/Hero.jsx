import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Wellness, <br />
          Our Priority
        </h1>
        <p>
        At MediPlus, we are dedicated to providing top-notch healthcare solutions for you and your family. Ensuring your well-being is our highest priority, and we strive to deliver personalized care with compassion and innovation. Trust us to be your partner in health, every step of the way.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
