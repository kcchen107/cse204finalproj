import React, { useState } from "react";
import "./program.css";
import { motion } from "framer-motion";

export default function App() {

return (
  <section id="program" className="program-tips-section">
    <h1 className="section-title">Program Types</h1>
    <div className="flashcards-container">
      {[
        {
          day: "ath",
          routine: "Precalculus and Calculus",
        },
        {
          day: "history",
          routine: "US History, Global History",
        },
        {
          day: "reading",
          routine: "creative writing, essays",
        },
        {
          day: "college prep",
          routine: "SAT, ACT, College Essays",
        },
        {
          day: "Language",
          routine: "English, Spanish, Chinese",
        },
        {
          day: "Science",
          routine: "Biology, Environmental Science",
        },
        {
          day: "Arts",
          routine: "Acrylic, Water color, Pastels, Charcoal",
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

