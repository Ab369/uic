import { motion } from 'framer-motion';
import { useState } from 'react';
import csvd from '../assets/cs.mp4';
import subscribeMail from '../utils/subscribeEmail';
import validate from '../utils/validate';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
  const [email, setEmail] = useState(null);
  const navigate=useNavigate()
  return (
    <motion.div
      className="text-white mt-80 lg:gap-0 gap-8 flex lg:flex-row flex-col items-center md:pt-40 lg:py-10 py-10 max-md:px-2 md:justify-around"
      style={{ backgroundColor: 'black' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Video Section */}
      <motion.div
        className="time w-96 h-96 rounded-full mt-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <video src={csvd} autoPlay muted loop></video>
      </motion.div>

      {/* Text and Buttons */}
      <motion.div
        className="text flex flex-col md:gap-10 gap-8 items-center"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        {/* Event Title */}
        <div className='flex flex-col text-center'>
          <h1 className='lg:text-8xl md:text-7xl text-5xl font-bold'>INNOWIZION'25</h1>
          <p className='md:text-xl text-orange-400'>The Annual Innovation Fest of MMMUT</p>
        </div>

        {/* Coming Soon & Visit Site */}
        <motion.div 
          className="flex items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Coming Soon Animation */}
          <motion.h1
            className='md:text-4xl text-2xl border-2 border-blue-400 rounded-xl w-fit md:p-4 p-2 animate-pulse hover:animate-bounce'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            28th Feb- 2nd March
          </motion.h1>

          
        </motion.div>

        {/* Email Notification Section */}
        <motion.div
          className='notify flex gap-4'
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <input 
            type='email' 
            placeholder='Enter Your Email' 
            className='bg-black p-2 rounded-xl text-lg border-2 border-orange-400 text-white'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className='bg-orange-400 p-2 rounded-xl text-black hover:scale-110 transition-transform duration-500 hover:text-white'
            onClick={async () => {
              if (validate(email)) {
                let res = await subscribeMail(email);
                if (res === true) alert('Subscribed for notification');
                else alert('Already subscribed or server error!');
              } else {
                alert('Invalid email');
              }
            }}
          >
            Notify Me
          </button>
        </motion.div>
        <button 
            className='bg-orange-400 p-2 rounded-xl text-black hover:scale-110 transition-transform duration-500 hover:text-white' onClick={()=>navigate('/innowizion')}>
            Visit Site
          </button>
      </motion.div>
    </motion.div>
  );
};

export default ComingSoon;
