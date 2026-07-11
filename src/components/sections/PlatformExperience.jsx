import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { showcaseSlides } from "../../data/showcase";

function Showcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentSlide = showcaseSlides[activeSlide];

  function nextSlide() {
    setActiveSlide((current) => (current + 1) % showcaseSlides.length);
  }

  function previousSlide() {
    setActiveSlide(
      (current) => (current - 1 + showcaseSlides.length) % showcaseSlides.length
    );
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const distance = touchStartX.current - touchEndX.current;

    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      previousSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  }

  return (
    <section id="showcase" className="section showcase-section">
      <div className="section-heading showcase-heading">
        <span>Product Showcase</span>

        <h2>Explore Schugnosis in motion.</h2>

        <p>
          Swipe on mobile or use the desktop arrows to preview the major
          screens schools will interact with.
        </p>
      </div>

      <div className="screenshot-slider">

        <button
          className="slider-arrow slider-arrow-left"
          onClick={previousSlide}
          aria-label="Previous Screenshot"
        >
          <ChevronLeft size={28} />
        </button>

        <motion.div
          key={currentSlide.title}
          className="slider-stage"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="browser-frame slider-frame">

            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <img
              src={currentSlide.image}
              alt={currentSlide.title}
            />
          </div>

          <div className="slider-caption">

            <span>
              {String(activeSlide + 1).padStart(2, "0")} /{" "}
              {String(showcaseSlides.length).padStart(2, "0")}
            </span>

            <h3>{currentSlide.title}</h3>

            <p>{currentSlide.text}</p>

          </div>
        </motion.div>

        <button
          className="slider-arrow slider-arrow-right"
          onClick={nextSlide}
          aria-label="Next Screenshot"
        >
          <ChevronRight size={28} />
        </button>

      </div>

      <div className="slider-dots">

        {showcaseSlides.map((slide, index) => (

          <button
            key={slide.title}
            className={index === activeSlide ? "active-dot" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Open ${slide.title}`}
          ></button>

        ))}

      </div>

    </section>
  );
}

export default Showcase;