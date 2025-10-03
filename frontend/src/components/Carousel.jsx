import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  // gestion clic flèche gauche
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? total - 1 : prevIndex - 1
    );
  };

  // gestion clic flèche droite
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === total - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-img"
      />

      {/* flèches visibles seulement si +1 image */}
      {total > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            ‹
          </button>
          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </>
      )}

      {/* compteur */}
      {total > 1 && (
        <div className="counter">
          {currentIndex + 1}/{total}
        </div>
      )}

      {/* bullets */}
      {total > 1 && (
        <div className="bullets">
          {pictures.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "bullet active" : "bullet"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
