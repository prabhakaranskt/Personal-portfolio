import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const Home = () => {
  //eslint-disable-next-line react-hooks/exhaustive-deps
  const words = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
          if (charIndex + 1 === currentWord.length) {
            setDeleting(true);
          }
        } else {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col md:flex-row justify-start items-center px-4 sm:px-10 pt-[80px] md:pt-24 text-gray-300 bg-black"
    >
      <div className="pt-10 md:pt-20  sm:px-20 flex flex-col justify-start items-start text-left max-w-3xl">
        <div className="flex items-center  justify-start mb-4">
          <h6 className="text-lg md:text-xl font-bold mr-4">Hey, I am</h6>
          <img
            src={assets.Prabha}
            alt="Prabhakaran"
            className="rounded-xl w-12 h-12 md:w-16 md:h-16 object-cover"
          />
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold whitespace-nowrap mb-2 ">
          PRABHAKARAN V
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
          ASPIRING <span className="text-orange-400">{text}</span>
          <span className="animate-blink">|</span>
        </h2>
        <p className="text-xs sm:text-base mb-6 max-w-xl">
          Motivated IT professional with skills in software development, web
          technologies, and databases. Experienced with React.js, Node.js, and
          MongoDB, building web apps and Chrome extensions. Good at learning
          quickly and solving problems creatively. Also knowledgeable in
          trading, market analysis, and portfolio management.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <a
            href="#contact"
            className="bg-gray-300 text-black px-4 py-2 font-semibold rounded hover:bg-orange-400 transition text-center"
          >
            Hire Me
          </a>
          <a
            href="public/files/Prabhakaran__V.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="bg-gray-300 text-black px-4 py-2 font-semibold rounded hover:bg-orange-400 transition text-center"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
