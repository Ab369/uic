import transition from "../utils/transition";
import { useState } from "react";
import Final from "./Final";
import Third from "./Third";
import Second from "./Second";
import { motion } from "framer-motion";

const Team = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleFinalYear = () => {
    setCount1(1);
    setCount2(0);
    setCount3(0);
  };

  const handlePreFinalYear = () => {
    setCount1(0);
    setCount2(1);
    setCount3(0);
  };

  const handleSophomoreYear = () => {
    setCount1(0);
    setCount2(0);
    setCount3(1);
  };
  return (
    <>
      <section className="py-6 bg-gray-900 text-white team">
        <div className="container mx-auto space-y-16 px-4 sm:px-8 lg:px-16 py-12 flex-col">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl heading text-orange-400">
              Meet our team
            </h3>
            <p className="max-w-2xl text-gray-300">
              A strong team thrives on collaboration, where diverse strengths
              unite toward a common goal. Each member brings unique
              perspectives, fostering creativity and innovation. Communication
              is key, enabling trust and support that drive success. In
              challenges, the team's resilience shines, turning obstacles into
              opportunities. Together, they not only achieve greatness but also
              build lasting bonds that extend beyond the workplace.
            </p>
          </div>

          <div className="flex items-center md:flex-row flex-col">
            <motion.div
              className="relative mx-12 my-2 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg cursor-pointer font-semibold shadow-lg hover:shadow-orange-500/50 transition-all"
              onClick={handleFinalYear}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Final Year
              <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-500 bg-white/10"></span>
            </motion.div>
            <motion.div
              className="relative mx-12 my-2 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg cursor-pointer font-semibold shadow-lg hover:shadow-orange-500/50 transition-all"
              onClick={handlePreFinalYear}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Pre-Final Year
              <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-500 bg-white/10"></span>
            </motion.div>
            <motion.div
              className="relative mx-12 my-2 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg cursor-pointer font-semibold shadow-lg hover:shadow-orange-500/50 transition-all"
              onClick={handleSophomoreYear}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Somophore Year
              <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-all duration-500 bg-white/10"></span>
            </motion.div>
          </div>
          {count1 === 1 && <Final />}
          {count2 === 1 && <Third />}
          {count3 === 1 && <Second />}
        </div>
      </section>
    </>
  );
};

export default transition(Team);
