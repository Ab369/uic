import React, { useState, useEffect } from "react";
import Header from "./components/header";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Loader from "./components/loader";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Team from "./pages/team";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location=useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.from(".header", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        ease: "power3.out",
      });}}, [loading]);


  return (
    <div className="App font-funnel">
      {loading ? (
        <Loader />
      ) : (
        <div className="site-content">

          <div className="md:header">
            <Header />
          </div>

          {/* Routes start here */}
          <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home/>} />
            <Route path='/team' element={<Team/>}/>
          </Routes>
          </AnimatePresence>
          
        </div>
      )}
    </div>
  );
};

export default App;
