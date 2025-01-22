import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import BlurText from "../ui-comp/blurtext";

const HeroParallax = ({ gallery }) => {
  const firstRow = gallery.slice(0, 5);
  const secondRow = gallery.slice(5, 10);
  const thirdRow = gallery.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className=" text-white lg:h-[300vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:800px] [transform-style:preserve-3d] md:mx-10 my-10"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};



// const Header = () => {
//   return (
//     <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
//       <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
//         University Innovation Cell <br /> <BlurText
//             text="Driving Innovation over years"
//             delay={30}
//             animateBy="words"
//             direction="top"
//             className=" text-orange-400"
//             />
//       </h1>
//       <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
//       We have been fostering a culture of creativity, innovation, and technology forward. Over the years, we’ve hosted impactful events, workshops, and fests to inspire students. These glimpse of the exciting moments that highlight our journey of collaboration and innovation.
//       </p>
//     </div>
//   );
// };

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product md:h-96 h-80 md:w-[30rem] w-[20rem] relative flex-shrink-0"
    >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

export default HeroParallax;
