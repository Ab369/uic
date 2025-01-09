import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Preloader from "./components/preloader";
import { gsap } from "gsap";
import "./App.css";
import HeroParallax from "./components/atcParallel";

//data and images import
import gallery from "./data/gallery";
import timelineData from "./data/timeline";
import Timeline from "./components/timeline";
import MagnetLines from "./components/magnetLines";
import About from "./components/about";
import ExtendedAbout from "./components/extAbout";

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
        <About/>
        <ExtendedAbout/>
        <Timeline data={timelineData}/>
        <MagnetLines
          rows={4}
          columns={24}
          containerSize="95vw"
          lineColor="gray"
          lineWidth="0.8vmin"
          lineHeight="10vh"
          baseAngle={0}
          className="my-24 mx-auto"
        />
        <HeroParallax gallery={gallery}/>
      </div>
    </div>
  );
};

export default App;
