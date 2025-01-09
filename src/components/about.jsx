import BlurText from "../ui-comp/blurtext";
import Squares from "../ui-comp/grids";

export default function About(){
    return(
        <div className="relative max-md:mb-36 md:mt-10">
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
            delay={50}
            animateBy="words"
            direction="top"
            className="
             max-md:hidden text-orange-400 text-3xl md:text-5xl text-center font-semibold md:font-bold"
            />

            {/* for phones */}
            <BlurText
            text="ABOUT UIC MMMUT"
            delay={50}
            animateBy="words"
            direction="top"
            className="
             md:hidden text-orange-400 text-3xl md:text-5xl text-center font-semibold md:font-bold"
            />

            <div className="md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nemo fugiat excepturi quam quibusdam! Illum quae cum veniam maiores perspiciatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit libero architecto ipsum illo delectus deserunt nobis eos possimus! Consequatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quas, vero in dolor saepe iure laboriosam quis deserunt esse maiores!</div>
            </div>

            <div className="box flex flex-col gap-3 md:gap-5 md:w-3/4">
                <div className="border-2 p-2 md:p-4 rounded-lg">
 
                    <BlurText
                    text="Our Mission"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-3xl text-orange-400 font-semibold"
                    />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat obcaecati fuga assumenda suscipit voluptatem? Dignissimos quas rerum delectus nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, omnis!</p>
                </div>
                <div className="border-2 p-2 md:p-4 rounded-lg">

                    <BlurText
                    text="Our Vision"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-lg md:text-3xl text-orange-400 font-semibold"
                    />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat obcaecati fuga assumenda suscipit voluptatem? Dignissimos quas rerum delectus nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quibusdam.</p>
                </div>
            </div>
        </div>
        </div>
    )
}