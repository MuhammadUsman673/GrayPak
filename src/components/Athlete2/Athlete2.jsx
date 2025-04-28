import React from "react";
import "./Athlete2.css";
import backgroundImage from "../../assets/alas1.jpg"; // Adjust the path as needed

const AlastairCookSection = () => {
  return (
    <section className="alastair-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h2 className="heading">Alastair Cook</h2>
        <p className="description">
          "I've been with Gray-Nicolls since I was 14 years old. 25 years of
          memories, incredible bats and unbeatable service. No other brand can
          do what Gray-Nicolls do."
        </p>
      </div>
    </section>
  );
};

export default AlastairCookSection;
