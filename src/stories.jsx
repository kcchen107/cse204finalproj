import React, { useState } from "react";
import "./stories.css";
import { motion } from "framer-motion";

const Stories = ({ stories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const storiesImages = [
    "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1518963534257-f901d4d46f59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673697239984-b089baf7b6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1712685912274-2483dade540f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
];
 
  const handleStoriesClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };
 
  return (
    <div className="story-container">
      <div className="stories" onClick={handleStoriesClick}>
        <p className="story-title">{stories[currentIndex]}</p>
        <img
          src={storiesImages[currentIndex]}
          alt={stories[currentIndex]}
          className="stories-image"
        />
      </div>
      <div className="navigation-dots">
        {stories.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Stories;
