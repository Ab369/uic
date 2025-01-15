import bg from '../assets/stars.png'
import {motion} from 'framer-motion'
import ShinyText from '../ui-comp/shinyText';
import { useEffect, useState } from 'react';
import { useMediaQuery } from "react-responsive";

const Hero=()=>{
    const [scrollY, setScrollY] = useState(0);
    const isPhone = useMediaQuery({ query: '(max-width: 640px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' });


    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const baseSize = isPhone ? 280 : 450; 
    const yincrease=scrollY * 0.7
    const circleSize = baseSize +yincrease ;

    const baseFontSize = isPhone ? 40 : isTablet ? 70 : 102;
    const fontSizeIncrease = baseFontSize + (isPhone?scrollY/7:scrollY/3) * 0.1;
    const resLineHeight = isPhone ? 50 : isTablet ? 70 : 100;


    return(
        <motion.section 
        animate={{
            backgroundPositionX:2000,
        }}
        transition={{
            repeat:Infinity,
            ease:'linear',
            duration:120
        }}
        className={`"hero text-white h-[85vh] md:h-[80vh] lg:h-[96vh] flex items-center overflow-hidden relative justify-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"`} style={{backgroundImage:`url(${bg})`}}>
            
            {/* mask for gradient */}
<div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(64,64,64,.5)_15%,rgb(16,16,16,.5)_78%,transparent)]'></div>

 {/* rounded circle bg */}
 <motion.div
        className={`absolute bg-black rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(96,96,96)_37.7%,rgb(16,16,16))] shadow-[-10px_-10px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(64,64,64)]`}
        style={{
          height: `${circleSize}px`,
          width: `${circleSize}px`,
        }}
        animate={{ height: circleSize, width: circleSize }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      ></motion.div>

{/* ring1 */}
<motion.div
 style={{
    translateX:'-50%',
    translateY:'-50%'
 }}
 animate={{
    rotate:'1turn',
 }}
 transition={{
    repeat:Infinity,
    duration:30,
    ease:'linear'
 }}
 className='absolute h-[280px] w-[280px] md:h-[600px] md:w-[600px] border border-white opacity-20 rounded-full top-1/2
             left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-5 w-5 md:h-10 md:w-10 border bg-white/20 rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
        <div className='h-2 w-2 md:h-5 md:w-5 bg-white rounded-full'></div>
    </div>
    </motion.div>

{/* ring2 */}
<motion.div
 style={{
    translateX:'-50%',
    translateY:'-50%'
 }}
 animate={{
    rotate:'-1turn',
 }}
 transition={{
    repeat:Infinity,
    duration:100,
    ease:'linear'
 }} className='absolute h-[350px] w-[350px] md:h-[700px] md:w-[700px] border border-white border-dashed opacity-40 rounded-full top-1/2
             left-1/2 -translate-x-1/2 -translate-y-1/2'></motion.div>

{/* ring3 */}
<motion.div
 style={{
    translateX:'-50%',
    translateY:'-50%'
 }}
 animate={{
    rotate:'-1turn',
 }}
 transition={{
    repeat:Infinity,
    duration:30,
    ease:'linear'
 }} className='absolute h-[420px] w-[420px]  md:h-[800px] md:w-[800px] border border-white opacity-20 rounded-full top-1/2
             left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
</motion.div>

{/* text section */}
<motion.div className="hero-text z-10 font-funnel ">
       <motion.h1
        className="text-center font-bold max-md:font-extrabold bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(64,64,64,.5))] bg-orange-400 text-transparent bg-clip-text"
        style={{
          fontSize: `${fontSizeIncrease}px`,
          lineHeight: `${resLineHeight}px`,
        }}
        animate={{ fontSize: fontSizeIncrease }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        UNIVERSITY INNOVATION CELL
      </motion.h1>
    <p className="text-md md:text-xl lg:text-4xl text-white/70 mt-5 text-center ">
        <ShinyText text='inspiring individuals' disabled={false} speed={2} className='custom-class' />
    </p>
</motion.div>


        </motion.section>
    )
}
export default Hero;