import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

const Home = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    ); // typing/deleting speed

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <div className="">
      <section
        id="home"
        className="h-screen flex flex-row justify-between pl-10  pt-10 "
      >
        <div className="pl-10 pt-20 flex flex-col justify-start items-start  text-start text-gray-300">
          <div className="flex items-center justify-center">
            <h6 className="text-xl font-bold mr-4 ">Hey, I am </h6>
            <img
              src={assets.Prabha}
              className="rounded-xl w-15 h-15 object-cover"
            />
          </div>
          <h2 className="text-9xl font-bold mb-2 ">PRABHAKARAN V</h2>
          <h2 className="text-3xl font-semibold mb-2">
            ASPIRING <span className="text-orange-400">{text}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-s mb-6 w-200">
            Motivated IT professional with skills in software development, web
            technologies, and databases. Experienced with React.js, Node.js, and
            MongoDB, building web apps and Chrome extensions. Good at learning
            quickly and solving problems creatively. Also knowledgeable in
            trading, market analysis, and portfolio management.
          </p>
          <div className="">
            <a
              href="#contact"
              className="bg-gray-300 text-black px-4 py-2 mr-3 font-semibold text-lg rounded hover:bg-orange-400 transition"
            >
              Hire Me
            </a>
            <a
              href="public\files\Prabhakaran__V.pdf"
              download
              target="_blank"
              className="inline-block mt-4 bg-gray-300  text-black font-semibold px-4 py-2 rounded hover:bg-orange-400 transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
