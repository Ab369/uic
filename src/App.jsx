import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Preloader from "./components/preloader";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAnimationComplete = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    if (isLoaded) {
      gsap.fromTo(
        ".site-content",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, ease: "power4.out", duration: 1 }
      );
    }
  }, [isLoaded]);

  return (
    <div className="App">
      {!isLoaded && <Preloader onAnimationComplete={handleAnimationComplete} />}
      <div className="site-content" style={{ opacity: 0 }}>
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
