import BlurText from "../ui-comp/blurtext";
import Squares from "../ui-comp/grids";
import about from "../data/about";

export default function About(){
    return(
        <div className="relative max-md:mb-36 md:mt-10 md:py-10">
        <Squares
        speed={0.5} 
        squareSize={40}
        direction='diagonal'
        borderColor='#A1A1AA80'
        hoverFillColor='#222'>
        </Squares>

       {/* section */}
        <div className="container absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col  h-full items-center justify-evenly p-6 md:p-0 md:px-8 gap-5">
            <div className="flex flex-col gap-5 md:gap-10 md:text-center items-center">

            <BlurText
            text="ABOUT UNIVERSITY INNOVATION CELL MMMUT"
            delay={5}
            animateBy="words"
            direction="top"
            className="
             max-md:hidden text-orange-400 text-3xl lg:text-5xl text-center font-semibold md:font-bold"
            />

            {/* for phones */}
            <BlurText
            text="ABOUT UIC MMMUT"
            delay={5}
            animateBy="words"
            direction="top"
            className="
             md:hidden text-orange-400 text-3xl md:text-5xl text-center font-semibold md:font-bold"
            />

            <div className="md:text-lg">{about.description}</div>
            </div>

            <div className="box flex flex-col gap-3 md:gap-5 lg:w-3/4">
                <div className="border-2 border-gray-400 p-2 md:p-4 rounded-lg">
 
                    <BlurText
                    text="Our Mission"
                    delay={5}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-3xl text-orange-400 font-semibold"
                    />

                    <p>{about.mission}</p>
                </div>
                <div className="border-2 border-gray-400 p-2 md:p-4 rounded-lg">

                    <BlurText
                    text="Our Vision"
                    delay={5}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-3xl text-orange-400 font-semibold"
                    />

                    <p>{about.vision}</p>
                </div>
            </div>
        </div>
        </div>
    )
}