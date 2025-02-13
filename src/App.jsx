import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/header";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Loader from "./components/loader";
import { AnimatePresence } from "framer-motion";

// Lazy load components
const Home = lazy(() => import("./pages/home"));
const Team = lazy(() => import("./pages/team"));
const Events = lazy(() => import("./pages/events"));
const Gallery = lazy(() => import("./pages/gallery"));
const Contact = lazy(() => import("./pages/contact"));

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const headerRef = useRef(null); // Ref for Header

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
    <HelmetProvider>
      <div className="App font-funnel">
        <Helmet>
          <title>University Innovation Cell-MMMUT</title>
          <meta name="description" content="University Innovation Cell, MMMUT"/>
          <meta name="keywords" content="uicmmmut,university innovation cell mmmut, uiciic, innovation cell mmmut, university innovation cell, innovation cell, inspiring individuals,innowizion,innovation fest,innovation"/>
          <meta name="robots" content="index, follow"/>
        </Helmet>

        {loading ? (
          <Loader />
        ) : (
          <div className="site-content" ref={headerRef}>
            <div className="header">
              <Header />
            </div>

            <AnimatePresence mode="wait">
              <Suspense fallback={<Loader />}>
                <Routes location={location} key={location.pathname}>
                  <Route index element={<Home />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
};

export default App;
