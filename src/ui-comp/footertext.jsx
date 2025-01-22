import React, { useEffect, useState } from "react";

const FooterText = () => {
  const texts = [
    "Innovating",
    "Insipring",
    "Vision",
    "Ingenuity",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitIndex, setExitIndex] = useState(null); // To manage the exit timing of each text

  const textInTimer = 3000;  // How long the text stays visible
  const textOutTimer = 2800; // Delay before text starts fading out

  useEffect(() => {
    const animateText = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text

      // Set the exit timer for the previous text
      setTimeout(() => {
        setExitIndex((prevExitIndex) => (prevExitIndex + 1) % texts.length); // Reset the exit state
      }, textOutTimer);
    };

    // Start the animation cycle
    const interval = setInterval(animateText, textInTimer);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className=" bg-cover bg-center relative flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative text-center z-10 ">
        <p className="overflow-hidden">
          {texts.map((text, index) => (
            <span
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "text-orange-400 translate-y-0 opacity-100" // Active text
                  : exitIndex === index
                  ? "opacity-0 translate-y-full" // Fade out after timeout
                  : "opacity-0 -translate-y-full" // Inactive text
              } md:text-5xl text-2xl font-semibold`}
            >
              {text}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default FooterText;
