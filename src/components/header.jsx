import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/uic-logo.png';
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Header = () => {
  const isPhone = useMediaQuery({ query: '(max-width: 651px)' })

  if (isPhone) return <PhoneNavbar/>;
  return (
    <div className=" backdrop-blur-md bg-opacity-50 sticky top-0 z-50 flex md:px-10 px-4  justify-between items-center py-4">
      <img src={logo} className="md:w-12 w-10" alt="Logo" />
      <SlideTabs />
      <MarqText/>
    </div>
  );
};

const MarqText=()=>{
   return(
    <div className='max-md:hidden'>
    <Marquee className="p-3 text-xl font-semibold w-36 max-w-36 overflow-hidden border-2 rounded-xl bg-transparent text-orange-400">
    INNOWIZION'25 coming soon__
  </Marquee>
  </div>
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
      } mx-auto flex items-center border-2 border-zinc-400 rounded-full`}>

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
          isOpen ? "absolute rounded-md top-16 -right-2 w-[98vw] h-[90vh]" : "hidden"
        } transition-all duration-500 ease-in-out md:flex w-fit rounded-full border-2 border-black bg-white p-1`}
      >
        <Link to='/'><Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>HOME</motion.button></Tab></Link>
        <Link to='/'><Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>ABOUT</motion.button></Tab></Link>
        <Link to='/team'><Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>TEAM</motion.button></Tab></Link>
        <Link to='/'><Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>GALLLERY</motion.button></Tab></Link>
        <Link to='/'><Tab setPosition={setPosition}><motion.button
      whileTap={{ scale: 0.85 }}>CONTACT</motion.button></Tab></Link>
      
        

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
            <Link to="/" onClick={handleCollapse}>
              <li>EVENTS</li>
            </Link>
            <Link to="/team" onClick={handleCollapse}>
              <li>TEAM</li>
            </Link>
            <Link to="/" onClick={handleCollapse}>
              <li>GALLERY</li>
            </Link>
            <Link to="/" onClick={handleCollapse}>
              <li>CONTACT</li>
            </Link>
          </ul>
        </label>
      </div>
    </div>
  );
};
