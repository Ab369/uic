import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/uic-logo.png';
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="bg-black backdrop-blur-md bg-opacity-50 sticky top-4 z-10 flex mx-4 justify-between">
      <img src={logo} className="w-12" alt="Logo" />
      <SlideTabs />
      <MarqText/>
    </div>
  );
};

const MarqText=()=>{
   return(
    <Marquee className="max-md:hidden text-black text-xl font-semibold font-funnel w-36 border-2 rounded-lg border-transparent bg-gradient-to-r from-orange-300 via-zinc-500 to-orange-400 bg-clip-border hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition-all duration-500 ease-in-out">
    INNOWIZION'25 coming soon__
  </Marquee>
   )
 
}

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${
        isOpen ? "static" : "relative "
      } mx-auto flex items-center`}>

    {
        isOpen?<button
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

      </button>:<button
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
    }
      
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className={`${
          isOpen ? "absolute rounded-md top-16 -left-5 w-[400px] h-[90vh]" : "hidden"
        } transition-all duration-500 ease-in-out md:flex w-fit rounded-full border-2 border-black bg-white p-1`}
      >
        <Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>HOME</motion.button></Tab>
        
        <Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>ABOUT</motion.button></Tab>
        
        <Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>EVENTS</motion.button></Tab>
        
        <Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>TEAM</motion.button></Tab>
        
        <Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>CONTACT</motion.button></Tab>
        

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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-3xl transition-transform duration-300 ease-in-out transform max-md:hover:scale-110 max-md:hover:text-4xl uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-lg max-md:text-center max-md:mb-4"
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