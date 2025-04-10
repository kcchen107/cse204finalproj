import React, { useState } from "react";
import "./packages.css";
import { motion } from "framer-motion";

export default function App() {

return (
  <section id="program" className="program-tips-section">
    <h1 className="section-title"></h1>
    <div className="flashcards-container">
      {[
        {
          day: "Package 1",
          routine: "SAT, ACT, College Essays",
        },
        {
          day: "Package 2",
          routine: "Calculus, Geometry, Trigonometry",
        },
        {
          day: "Package 3",
          routine: "English, Reading, Creative Writing",
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

