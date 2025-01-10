import BlurText from "../ui-comp/blurtext";
import BoxReveal from "../ui-comp/boxReveal";
import ExpandableCard from "../ui-comp/expndCard";



export default function ExtendedAbout(){
    return(
        <div className="about2 text-white mt-56 md:mt-40 md:mb-20 p-6 md:px-12 flex flex-col md:gap-10 gap-7">
         <BlurText
            text="What we do"
            delay={30}
            animateBy="words"
            direction="top"
            className="
             md:text-6xl text-4xl font-bold text-white"
            />
        <div className="flex flex-col md:gap-6 gap-4">
         <BoxReveal width="100%" boxColor="#fff" duration={0.6}>
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">EVENTS</h1>
        </BoxReveal>
         <BoxReveal width="100%" boxColor="#fff" duration={0.6}>
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">FESTS</h1>
        </BoxReveal>
         <BoxReveal width="100%" boxColor="#fff" duration={0.6}>
         <h1 className="text-5xl md:text-8xl font-semibold text-orange-400 border-b">SESSIONS</h1>
        </BoxReveal>
        </div>

        <div className="relative border-2 h-[50vh]">
            <h1>Our upcoming events</h1>
            {/* <ExpandableCard/> */}
            </div>
        </div>
    )
    
}

