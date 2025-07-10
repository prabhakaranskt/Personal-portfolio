import React, { useRef, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, image, liveLink, codeLink }) => {
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const scrollToImage = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const imageWidth = container.offsetWidth;
    container.scrollTo({ left: index * imageWidth, behavior: "smooth" });
    setCurrent(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const imageWidth = container.offsetWidth;
    const index = Math.round(scrollLeft / imageWidth);
    setCurrent(index);
  };

  const nextSlide = () => {
    const newIndex = (current + 1) % image.length;
    scrollToImage(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (current - 1 + image.length) % image.length;
    scrollToImage(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // slower auto slide for better mobile usability
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex flex-col md:flex-row p-6 md:p-8 rounded-2xl shadow-lg gap-8 justify-center items-center bg-transparent transform hover:scale-105 transition duration-300">
      {/* Scrollable Image Carousel */}
      <div className="relative w-full md:w-1/2">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory rounded-2xl"
        >
          {image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`project-${index}`}
              className="w-full flex-shrink-0 h-56 sm:h-64 md:h-80 object-cover rounded-xl snap-center"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl sm:text-4xl p-2 rounded-full shadow bg-black bg-opacity-50 text-white hover:bg-opacity-80 transition"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl sm:text-4xl p-2 rounded-full shadow bg-black bg-opacity-50 text-white hover:bg-opacity-80 transition"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {image.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-orange-400" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col justify-center items-start text-left space-y-5 md:w-1/2">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-white text-sm sm:text-base">{description}</p>
        <div className="flex text-orange-300 gap-8 text-2xl sm:text-4xl">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Live project link"
          >
            <FiExternalLink />
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Source code link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
