import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import { gsap } from "gsap";
import "./App.css";
import HeroParallax from "./components/atcParallel";

// Data and images import
import gallery from "./data/gallery";
import timelineData from "./data/timeline";
import Timeline from "./components/timeline";
import MagnetLines from "./components/magnetLines";
import About from "./components/about";
import ExtendedAbout from "./components/extAbout";
import Loader from "./components/loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    if (!loading) {
      gsap.fromTo(
        ".site-content",
        {
          clipPath: "circle(0% at 50% 50%)",
          visibility: "visible",
        },
        {
          clipPath: "circle(150% at 50% 50%)", 
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div>
        <div
          className='site-content'
          style={{
            visibility: "hidden",
            position: "relative",
            overflow: "hidden",
          }}
        > 
          <Header />
          <Hero />
          </div>
          <div>
          <About />
          <ExtendedAbout />
          {/* <UpcomingEvents /> */}
          <Timeline data={timelineData} />
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
          <HeroParallax gallery={gallery} />
        </div>
        </div>
      )}
    </div>

  );
};

export default App;
