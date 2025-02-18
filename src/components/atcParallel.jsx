import React, { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const HeroParallax = ({ gallery }) => {
  const firstRow = gallery.slice(0, 5);
  const secondRow = gallery.slice(5, 10);
  const thirdRow = gallery.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 200, damping: 20, bounce: 50 };
  // FIX: Use `useSpring` on `scrollYProgress` directly (ensures it's a MotionValue)
  const smoothScroll = useSpring(scrollYProgress, springConfig);
  const translateX = useTransform(smoothScroll, [0, 1], [0, 300]);
  const translateXReverse = useTransform(smoothScroll, [0, 1], [0, -300]);
  const rotateX = useTransform(smoothScroll, [0, 0.2], [15, 0]);
  const opacity = useTransform(smoothScroll, [0, 0.2], [0.2, 1]);
  const rotateZ = useTransform(smoothScroll, [0, 0.2], [10, 0]);
  const translateY = useTransform(smoothScroll, [0, 0.2], [-400, 200]);

  return (
    <div
      ref={ref}
      className="text-white lg:h-[250vh] h-[180vh] overflow-hidden antialiased relative flex flex-col self-auto 
      [perspective:800px] [transform-style:preserve-3d] md:mx-10 mt-10"
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
            <MemoizedProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <MemoizedProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <MemoizedProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product md:h-96 h-80 md:w-[30rem] w-[20rem] relative flex-shrink-0"
    >
      <img
        loading="lazy"
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

// Memoize ProductCard to prevent unnecessary re-renders
const MemoizedProductCard = memo(ProductCard);

export default HeroParallax;
