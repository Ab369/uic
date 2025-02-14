import React from "react";
import { motion } from "framer-motion";
import BlurText from "../ui-comp/blurtext";
import advisors from "../data/faculty";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3,
    },
  },
};

const FacultyAdvisors = () => {
  return (
    <div className="bg-black rounded-lg text-center h-full md:mt-8 md:mx-8 mt-[500px]">
      <BlurText
        text="Meet Our Faculty Advisors"
        delay={5}
        animateBy="words"
        direction="top"
        className="md:text-4xl text-2xl font-semibold text-orange-400 mt-52 md:mt-14 w-full flex justify-center"
      />
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {advisors.map((advisor, index) => (
          <motion.div
            key={advisor.name}
            className="bg-black shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300"
            variants={cardVariants}
          >
            <motion.div
              className="relative mx-auto w-56 h-52 md:w-80 md:h-96 rounded-md overflow-hidden border-4 border-white shadow-md"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              animate="float"
              viewport={{ once: true }}
            >
              <img
                src={advisor.image}
                alt={advisor.name}
                className="absolute w-full h-full"
              />
            </motion.div>
            <div className="p-4 pt-8">
              <h3 className="text-lg font-semibold text-white">
                {advisor.name}
              </h3>
              <p className="text-gray-300 text-sm">{advisor.position}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FacultyAdvisors;
