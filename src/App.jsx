import React, { useState, useEffect, useRef } from "react";
import Header from "./components/header";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Loader from "./components/loader";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Team from "./pages/team";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const headerRef = useRef(null); //ref for Header

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loading && headerRef.current) {
      const tl = gsap.timeline();
      tl.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [loading]);

  return (
    <div className="App font-funnel">
      {loading ? (
        <Loader />
      ) : (
        <div className="site-content" ref={headerRef}>
          <div className="header" >
            <Header />
          </div>

          {/* Routes start here */}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/team" element={<Team />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default App;
