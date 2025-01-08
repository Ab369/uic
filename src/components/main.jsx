import bg from '../assets/stars.png'
import {motion} from 'framer-motion'

const Main=()=>{
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
        className="hero text-white h-[85vh] md:h-[80vh] lg:h-[96vh] flex items-center overflow-hidden relative justify-center [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" style={{backgroundImage:`url(${bg})`}}>
            
            {/* mask for gradient */}
<div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(64,64,64,.5)_15%,rgb(16,16,16,.5)_78%,transparent)]'></div>

{/* rounded circle bg */}
<div className='absolute h-64 w-64 md:h-[500px] md:w-[500px] bg-black rounded-full border border-white/30 top-1/2
             left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(96,96,96)_37.7%,rgb(16,16,16))] shadow-[-10px_-10px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(64,64,64)]'></div>

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
 className='absolute h-[344px] w-[344px] md:h-[600px] md:w-[600px] border border-white opacity-20 rounded-full top-1/2
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
 }} className='absolute h-[444px] w-[444px] md:h-[700px] md:w-[700px] border border-white border-dashed opacity-40 rounded-full top-1/2
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
 }} className='absolute h-[544px] w-[544px]  md:h-[800px] md:w-[800px] border border-white opacity-20 rounded-full top-1/2
             left-1/2 -translate-x-1/2 -translate-y-1/2'>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute h-2 w-2 md:h-5 md:w-5 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
</motion.div>

{/* text section */}
<div className="hero-text z-10 font-funnel ">
    <h1 className="leading-10 text-4xl md:text-7xl lg:text-9xl text-center font-bold bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(64,64,64,.5))] bg-white text-transparent bg-clip-text">
        UNIVERSITY INNOVATION CELL
    </h1>
    <p className="text-md md:text-xl lg:text-3xl text-white/70 mt-5 text-center text-orange-500">
        inspiring individuals
    </p>
</div>


        </motion.section>
    )
}
export default Main;