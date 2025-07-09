import { useEffect } from "react";
import Portfolio from "./Components/PortfolioPrabha/Portfolio";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Portfolio />
    </div>
  );
}

export default App;
