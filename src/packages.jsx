import React, { useState } from "react";
import "./packages.css";
import { motion } from "framer-motion";

export default function App() {

return (
  <section id="program" className="program-tips-section">
    <h1 className="section-title"></h1>
    <div className="packages-flashcards-container">
      {[
        {
          day: "Basic Package Information",
          routine: "No commitment. Do as many or as few sessions as you’d like.",
        },
        {
          day: "Essentials Package Information",
          routine: "Package of 15 hours comes with 10% savings!",
        },
        {
          day: "Advanced Package Information",
          routine: "Package of 28 hours comes with 10% savings! This package can be shared with siblings.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flashcard"
          onClick={(e) => e.currentTarget.classList.toggle("flipped")}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">{item.day}</div>
            <div className="flashcard-back">
              <div className="program-list">
                {item.routine.split(",").map((program, i) => (
                  <div key={i} className="program-item">{program.trim()}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

);
};

