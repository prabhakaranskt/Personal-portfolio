import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { images } from "../../assets/assets";

const projects = [
  {
    title: "MealMate - Food Delivery Web App",
    description:
      "A full-stack food delivery web app with React, Node, MongoDB, Stripe payments, and admin dashboard.",
    image: [
      images.landingPage,
      images.login,
      images.home,
      images.menu,
      images.dishes,
    ],
    liveLink: "https://your-weather-app.com",
    codeLink: "https://github.com/prabhakaranskt/food-delivery-app.git",
  },
  {
    title: "Chrome Extension (Leads Tracker)",
    description:
      "Chrome extension to capture tab URLs. One-click copy for lead collection and tracking.",
    image: [images.lead1, images.lead2],
    liveLink: "https://your-portfolio.com",
    codeLink: "https://github.com/prabhakaranskt/chrome-extension.git",
  },
];

const Projects = () => {
  const scrollRef = useRef();
  const [lineWidth, setLineWidth] = useState(100);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollTop = el.scrollTop;
      const maxScroll = el.scrollHeight - el.clientHeight;
      const progress = scrollTop / maxScroll;
      const newWidth = 100 - progress * 60;
      setLineWidth(Math.max(30, newWidth));
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-12 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
        Featured Projects
      </h2>

      {/* Shrinking Line */}
      <div className="w-full flex justify-center mb-8">
        <div
          className="h-2 bg-orange-400 rounded-full transition-all duration-300"
          style={{ width: `${lineWidth}%` }}
        />
      </div>

      {/* Scrollable Project List */}
      <div
        ref={scrollRef}
        className="max-h-[70vh] md:max-h-[65vh] overflow-y-scroll custom-scrollbar flex flex-col space-y-10 px-2 sm:px-6 md:px-10"
        // On mobile, allow auto height for better UX
        style={{ maxHeight: window.innerWidth < 768 ? "auto" : undefined }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
