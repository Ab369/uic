import { motion } from 'framer-motion';
import csvd from '../assets/cs.mp4';

const ComingSoon = () => {
  return (
    <motion.div
      className="text-white mt-80 md:gap-0 gap-8 flex md:flex-row flex-col items-center py-10 max-md:px-2 md:justify-around"
      style={{ backgroundColor: 'black' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} // Triggers when the element comes into view
      transition={{ duration: 1 }}
    >
      <motion.div
        className="time w-96 h-96 rounded-full mt-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <video src={csvd} autoPlay muted loop></video>
      </motion.div>

      <motion.div
        className="text flex flex-col md:gap-10 gap-8 items-center"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        <div className='flex flex-col text-center'>
          <h1 className='md:text-8xl text-5xl font-bold'>INNOWIZION'24</h1>
          <p className='md:text-xl text-orange-400'>The Annual Innovation fest of MMMUT</p>
        </div>
        <motion.h1
          className='md:text-4xl text-2xl border-2 border-blue-400 rounded-xl w-fit md:p-4 p-2 animate-pulse hover:animate-bounce'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Coming Soon...
        </motion.h1>

        <motion.div
          className='notify flex gap-4'
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <input type='email' placeholder='Enter your Email' className='bg-black p-2 rounded-xl text-lg'></input>
          <button className='bg-orange-400 p-2 rounded-xl text-black hover:scale-110 transition-transform duration-500 hover:text-white'>Notify Me</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;
