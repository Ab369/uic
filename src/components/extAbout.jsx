import BlurText from "../ui-comp/blurtext";
import BoxReveal from "../ui-comp/boxReveal";

export default function ExtendedAbout(){
    return(
        <div className="about2 text-white mt-16 md:mt-32 md:mb-20 p-6 md:px-12 flex flex-col md:gap-10 gap-7">
         <BlurText
            text="What we do"
            delay={5}
            animateBy="words"
            direction="top"
            className="
             md:text-6xl text-4xl font-bold text-white"
            />
        <div className="flex flex-col md:gap-6 gap-4">
         {/* <BoxReveal width="100%" boxColor="#fff" duration={1}> */}
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">EVENTS</h1>
        {/* </BoxReveal> */}
         {/* <BoxReveal width="100%" boxColor="#fff" duration={1}> */}
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">FESTS</h1>
        {/* </BoxReveal> */}
         {/* <BoxReveal width="100%" boxColor="#fff" duration={1}> */}
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">SESSIONS</h1>
        {/* // </BoxReveal> */}
         
        </div>
        </div>
    )
    
}

