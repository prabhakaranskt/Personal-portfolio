import React from "react";
import { useState, useEffect } from "react";
import { services } from "../../assets/assets";
import { motion } from "framer-motion";
const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="skills" className="bg-black text-white mb-30 ">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl text-orange-400 font-bold mb-10">Skills</h3>
          <div className="flex justify-center gap-10 mx-8 flex-wrap">
            {services.map((item, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-br from-white/20 via-black to-white/10  ring-1 ring-gray-700 ring-opacity-30 shadow-[0_0_30px_rgba(255,255,255,0.1)]
 cursor-pointer flex flex-col justify-center items-center w-80 h-60 rounded-lg transition overflow-hidden"
                >
                  {/* Animated Logos */}
                  {item.logos?.length > 0 && isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {item.logos.map((logo, i) => {
                        const positions = [
                          "top-3 left-1/2 -translate-x-1/2", // Top center
                          "top-2 left-4", // Top-left
                          "top-6 right-7", // Top-right
                          "bottom-3 left-1/2 -translate-x-1/2", // Bottom center
                          "bottom-4 right-3", // Bottom-right
                        ];
                        const sizes = ["w-10", "w-15", "w-13", "w-15", "w-14"];
                        return (
                          <motion.img
                            key={i}
                            src={logo}
                            alt={`${item.name}-logo-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className={`absolute ${positions[i]} ${sizes[i]} h-auto`}
                          />
                        );
                      })}
                    </div>
                  )}

                  {/* Text content */}
                  <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                  <p className="text-sm w-50 text-center">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
