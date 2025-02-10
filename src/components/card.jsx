import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

const Card = ({ imgSrc, name, post, linkedin, github }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        imgRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" },
        "-=0.4"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        iconsRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-80  bg-black text-white sm:p-6 p-4 rounded-2xl shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <div className="w-full flex justify-center mb-4">
        <motion.img
          ref={imgRef}
          src={imgSrc}
          alt="Profile"
          className="w-28 h-28 object-center rounded-full border-4 border-orange-500"
          whileHover={{ rotate: 5, transition: { duration: 0.2 } }}
        />
      </div>
      <div ref={textRef} className="text-center">
        <h3 className="text-xl font-semibold text-orange-400">{name}</h3>
        <p className="text-sm text-gray-400 mt-1">{post}</p>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <motion.a
          ref={(el) => (iconsRef.current[0] = el)}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub className="text-2xl text-gray-300 hover:text-orange-500 transition-all" />
        </motion.a>
        <motion.a
          ref={(el) => (iconsRef.current[1] = el)}
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin className="text-2xl text-gray-300 hover:text-orange-500 transition-all" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Card;
