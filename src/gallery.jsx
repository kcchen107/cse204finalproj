import React, { useState } from "react";
import "./gallery.css";
 
const gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const images = [
"https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1529419412599-7bb870e11810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fHww",
  ];
 
  const openModal = (index) => {
    setCurrentImage(images[index]);
    setCurrentIndex(index);
    setModalOpen(true);
  };
 
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };
 
  const showPrevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };
 
  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };
 
  return (
    <div>
      <div className="gallery-title">
      </div>
      <section className="gallery">
        <div className="packages-gallery">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Package ${index + 1}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </section>
 
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img className="modal-content" src={currentImage} alt="Modal View" />
          <a
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
          >
            &#10094;
          </a>
          <a
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
          >
            &#10095;
          </a>
        </div>
      )}
    </div>
  );
};
 
export default gallery;