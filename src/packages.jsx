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
          day: "Package 1 Details",
          routine: "No minimum number of sessions. Do as many or as few sessions as you’d like.",
        },
        {
          day: "Package 2 Details",
          routine: "Package deal of 15 hours comes with 10% savings!",
        },
        {
          day: "Package 3 Details",
          routine: "Package deal of 28 hours comes with 10% savings! This package can be shared with siblings.",
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

