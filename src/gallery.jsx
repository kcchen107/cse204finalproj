import React, { useState } from "react";
import "./gallery.css";

const gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1530036846422-afb4b7af2fd4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1567219934540-9f75f7b87552?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729565156583-83e8a7854945?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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