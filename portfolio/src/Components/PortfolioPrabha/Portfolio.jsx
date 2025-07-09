import Navbar from "../Home/Navbar";
import Home from "../Home/Home";
import Skills from "../skills/Skills";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import FooterWithMessage from "../Footer/FooterWithMessage";

const Portfolio = () => {
  return (
    <div className="bg-white text-gray-800 font-sans ">
      <Navbar />

      <div className="bg-black text-white">
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <FooterWithMessage />
      </div>
    </div>
  );
};

export default Portfolio;
