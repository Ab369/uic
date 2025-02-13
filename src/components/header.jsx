import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/uic-iic.png';
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import AnimatedButton from "../ui-comp/animatedButton";
const Header = () => {
  const isPhone = useMediaQuery({ query: '(max-width: 651px)' })

  if (isPhone) return <PhoneNavbar/>;
  return (
    <div className=" backdrop-blur-md bg-opacity-50 sticky top-0 z-50 flex lg:px-10 md:pl-4 px-2  justify-between items-center py-4">
      <img src={logo} className="lg:w-52 md:w-40" alt="Logo" />
      <SlideTabs />
      <AnimatedButton/>
    </div>
  );
};



const SlideTabs = () => {
  const { pathname } = useLocation(); // Get the current route
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${
        isOpen ? "static" : "relative "
      } mx-auto flex items-center border-2 border-zinc-400 rounded-full`}
    >
      {isOpen ? (
        <button
          className="md:hidden p-2 absolute right-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      ) : (
        <button
          className="md:hidden p-2 absolute left-28"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      )}

      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className={`${
          isOpen ? "absolute rounded-md top-16 -right-2 w-[98vw] h-[90vh]" : "hidden"
        } transition-all duration-500 ease-in-out md:flex w-fit rounded-full border-2 border-black bg-white p-1`}
      >
        {["/", "/events", "/team", "/innowizion", "/contact"].map((route, index) => (
          <Link key={index} to={route}>
            <Tab setPosition={setPosition} isActive={pathname === route}>
              <motion.button whileTap={{ scale: 0.85 }}>
                {route.substring(1).toUpperCase() || "HOME"}
              </motion.button>
            </Tab>
          </Link>
        ))}

        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ children, setPosition, isActive }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 block cursor-pointer px-4 py-2 text-lg transition-transform duration-300 ease-in-out transform 
        max-md:hover:scale-110 uppercase md:px-5 md:py-3 md:text-lg max-md:text-center max-md:mb-4 
        ${
          isActive
            ? "bg-black text-white rounded-full" // Active Tab Styles
            : "text-black hover:text-white rounded-md"
        }`}
    >
      {children}
    </li>
  );
};


const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-gray-400 md:h-12"
    />
  );
};

export default Header;

const PhoneNavbar = () => {
  const handleCollapse = () => {
    const checkbox = document.getElementById("box");
    checkbox.checked = false; // Uncheck the checkbox to collapse the navbar
  };

  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />
      <div className="navbar__hamburger">
        <label htmlFor="box">
          <input type="checkbox" id="box" />
          <div></div>
          <div></div>
          <div></div>
          <ul className="navbar__unordered-list">
            <Link to="/" onClick={handleCollapse}>
              <li>HOME</li>
            </Link>
            <Link to="/events" onClick={handleCollapse}>
              <li>EVENTS</li>
            </Link>
            <Link to="/team" onClick={handleCollapse}>
              <li>TEAM</li>
            </Link>
            <Link to="/innowizion" onClick={handleCollapse}>
              <li>INNOWIZION</li>
            </Link>
            <Link to="/contact" onClick={handleCollapse}>
              <li>CONTACT</li>
            </Link>
          </ul>
        </label>
      </div>
    </div>
  );
};
