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

  // Auto Slide every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="flex flex-col md:flex-row p-8 rounded-2xl overflow-hidden shadow-lg gap-12 justify-center items-center transform hover:scale-105 transition duration-300 bg-transparent">
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
              className="w-full flex-shrink-0 h-80  object-cover rounded-xl snap-center"
            />
          ))}
        </div>

        {/* Left & Right Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-4xl  p-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  text-4xl p-2 rounded-full shadow"
        >
          ›
        </button>

        {/* Dots */}
        <div data-aos="slide-right" className="flex justify-center mt-4">
          {image.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                current === index ? "bg-orange-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex mb-25 flex-col justify-center items-start text-start space-y-7 md:w-1/2">
        <h3 className="text-3xl font-semibold text-white ">{title}</h3>
        <p className="text-white  ">{description}</p>
        <div className=" flex text-orange-300 gap-10">
          <a
            href={liveLink}
            target="_blank"
            className=" text-4xl font-semibold hover:underline"
          >
            <FiExternalLink />
          </a>
          <a
            href={codeLink}
            target="_blank"
            className=" text-4xl font-semibold hover:underline"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
