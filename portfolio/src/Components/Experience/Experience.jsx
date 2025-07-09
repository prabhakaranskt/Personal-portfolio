import React, { useRef, useEffect } from "react";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";

const roadmap = [
  {
    title: "B.E. in Electronics and Communication",
    subtitle: "SRM Valliammai Engineering College",
    date: "2021 - 2025",
  },
  {
    title: "Web Developer Intern",
    subtitle: "8Queens Software Technology",
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "Freelancer",
    subtitle: "React & Node Projects",
    date: "2024 - Present",
  },
];

const Experience = () => {
  const triggerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(triggerRef, {
    amount: 0.5, // At least 50% must be in view
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <section
      id="timeline"
      className="relative bg-black text-white py-32 overflow-visible"
    >
      <h2 className="text-3xl font-bold text-center mb-20 text-orange-400 z-20 relative">
        My Timeline
      </h2>

      {/* Timeline Cards */}
      <div
        ref={triggerRef}
        className="relative max-w-5xl mx-auto flex flex-col gap-20 px-4 sm:px-10 md:px-16 lg:px-10 z-10"
      >
        {roadmap.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              ref={index === 1 ? triggerRef : null} // trigger animation from 2nd card
              className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-gradient-to-br via-gray-900  to-gray-650 ring-1 ring-gray-700 ring-opacity-30 rounded-xl backdrop-blur-md bg-white/5 max-w-sm w-full shadow-xl">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.subtitle}</p>
                <p className="text-sm text-gray-400 mt-1">{item.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SVG timeline */}
      <motion.svg
        className="absolute left-1/2 top-[180px] -translate-x-1/2 z-0 pointer-events-none"
        width="200"
        height="700"
        viewBox="0 0 200 700"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="
         
            M-13 50
            C10 90, 80 160, 80 220
            C100 500, 300 180, 100 550
            C-100 800, -1200 -1200, 0 0
          "
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={
            isInView
              ? {
                  pathLength: 1,
                  transition: { duration: 3, ease: "easeInOut" },
                }
              : {}
          }
        />

        {/* Dots appear one-by-one */}
        {[
          { x: 17.5, y: 87 },
          { x: 183, y: 355 },
          { x: 18, y: 560 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r="6"
            fill="orange"
            initial={{ scale: 0 }}
            animate={controls}
            variants={{
              hidden: { scale: 0 },
              visible: (i) => ({
                scale: 1,
                transition: { delay: 0.5 + i * 0.5 },
              }),
            }}
            custom={i}
          />
        ))}
      </motion.svg>
    </section>
  );
};

export default Experience;
