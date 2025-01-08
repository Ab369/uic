import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/uic-logo.png';

const Header = () => {
  return (
    <div className="bg-black backdrop-blur-md bg-opacity-50 sticky top-4 z-10 flex mx-2">
      <img src={logo} className="w-12" alt="Logo" />
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mx-auto flex items-center">
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
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className={`${
          isOpen ? "absolute rounded-md top-10" : "hidden "
        } md:flex w-fit rounded-full border-2 border-black bg-white p-1`}
      >
        <Tab setPosition={setPosition}>Home</Tab>
        <Tab setPosition={setPosition}>About</Tab>
        <Tab setPosition={setPosition}>Events</Tab>
        <Tab setPosition={setPosition}>Team</Tab>
        <Tab setPosition={setPosition}>Contact</Tab>

        <Cursor position={position} />
      </ul>
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
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
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Header;