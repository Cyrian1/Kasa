import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />

      {total > 1 && (
        <>
          <button
            className="arrow left"
            onClick={prevSlide}
            aria-label="Précédent"
          >
            ‹
          </button>
          <button
            className="arrow right"
            onClick={nextSlide}
            aria-label="Suivant"
          >
            ›
          </button>
          <div className="counter">
            {currentIndex + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}
