import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="animated-btn"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onClick={() => window.open('https://innowizion.vercel.app/', '_blank', 'noopener,noreferrer')}
    >
      <p className="animate-pulse">INNOWIZION'25 SITE LIVE</p>
      <span className="glow"></span>
      <span className="particles"></span>
    </motion.button>
  );
};

export default AnimatedButton;
