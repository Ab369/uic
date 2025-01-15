import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div style={styles.container}>
      <motion.div
        style={styles.wormhole}
        animate={{
          scale: [1, 1.5, 2, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              ...styles.circle,
              border: `2px solid rgba(255, 255, 255, ${1 - i * 0.2})`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 0],
            }}
            transition={{
              delay: i * 0.3,
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <motion.h1
        style={styles.text}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Entering...
      </motion.h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "120vh",
    background: "radial-gradient(circle, #000000, #1a1a1a, #000000)",
    overflow: "hidden",
  },
  wormhole: {
    position: "relative",
    width: "200px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    position: "absolute",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.5rem",
    marginTop: "20px",
    fontWeight:1000
  },
};

export default Loader;
