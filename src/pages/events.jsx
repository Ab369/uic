import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const events = [
  // Update image paths to use imports or public folder
  {
    title: "Innowizion",
    image: "src/assets/Innowizion.png",
    path: "/innowizion",
    description: "Innowizion is a three-day annual fest organized by the University Innovation Cell, dedicated to fostering innovation and creativity. It is designed to challenge participants with technical competitions, brainstorming sessions, and problem-solving activities. The fest serves as a platform for students to showcase their skills, collaborate on innovative ideas, and engage in intellectually stimulating experiences. ",
    details: [
      "Dotting the eyes",
      "I-Cluminate",
      "I-Expo",
      "I-Quiz"
    ]
  },


  {
    title: "Malaviyan Prodigy",
    image: "src/assets/malaviyan_prodigy.jpg",
    path: "/bytegram",
    description: "Malaviyan Prodigy is a flagship event of UIC, designed to bridge the gap between students and accomplished alumni. This event provides a unique opportunity for students to interact with distinguished alumni, gain valuable career guidance, and explore diverse career paths. Through insightful discussions, mentorship sessions, and personal experiences shared by alumni, Malaviyan Prodigy aims to inspire and equip students with the knowledge and motivation to excel in their professional journeys.",
    details: [
      "Connecting with prestigious alumni",
      "Provides phenomenal career guidance",
      "Helps in growing networks",
      "Industry expert specialists interaction"
    ]
  },

  {
    title: "Bytegram",
    image: "src/assets/Bytegram.jpeg",
    path: "/bytegram",
    description: "Bytegram is one of the foremost events conducted by the University Innovation Cell (UIC) as part of Innowizion. It is an engaging and competitive event featuring a series of technical quizzes, rapid-fire buzzer rounds, and problem-solving challenges. Designed to test participants’ knowledge, logical thinking, and quick decision-making skills, Bytegram offers an exhilarating experience for tech enthusiasts. With its dynamic format and high-energy atmosphere, the event fosters a spirit of learning, collaboration, and innovation.",
    details: [
      "Foremost event conducted ",
      "Involves buzzer round",
      "Brainstorming Quizzes",
      "Exciting and Overwhelming prizes"
    ]
  },

  {
    title: "Inductions",
    image: "src/assets/Inductions.jpeg",
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },
  // ... rest of events with updated image paths
];

const SlideContent = ({ event, isActive }) => (
  <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-cyan-500/30 shadow-[0_0_40px_-10px_rgba(8,145,178,0.3)]">
    <div 
      className={classNames(
        "absolute inset-0 bg-cover bg-center transition-transform duration-1000",
        isActive ? "scale-100" : "scale-105"
      )}
      style={{ backgroundImage: `url(${event.image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-3xl p-8 md:p-12 flex flex-col justify-end">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg">
        {event.title}
      </h2>
      <Link
        to={event.path}
        className="inline-flex items-center px-6 py-2 md:px-8 md:py-3 bg-cyan-600 hover:bg-cyan-700 backdrop-blur-sm rounded-full text-md md:text-lg font-semibold text-white transition-all duration-300 w-fit group"
      >
        Explore Event
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </Link>
    </div>
  </div>
);

const DotIndicator = ({ count, activeIndex, onClick }) => (
  <div className="absolute bottom-8 flex gap-3 z-20">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        onClick={() => onClick(index)}
        className={classNames(
          "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125",
          index === activeIndex 
            ? "bg-cyan-400 scale-125 shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]"
            : "bg-gray-600 hover:bg-gray-400"
        )}
      />
    ))}
  </div>
);

const DetailsSection = ({ event }) => (
  <section className="min-h-screen py-20 px-4 sm:px-8 flex items-center justify-center relative">
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <h3 className="text-4xl md:text-5xl font-bold text-gray-100 mb-8">
        {event.title}
      </h3>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
        {event.description}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {event.details.map((detail, i) => (
          <div 
            key={i}
            className="p-6 bg-gray-900/50 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="text-cyan-400 text-lg font-medium flex items-center">
              <span className="mr-2 text-xl">▹</span>
              {detail}
            </div>
          </div>
        ))}
      </div>
      <Link
        to={event.path}
        className="inline-flex items-center mt-8 px-8 py-3 border-2 border-cyan-400/50 hover:border-cyan-400/80 bg-cyan-400/5 hover:bg-cyan-400/10 text-cyan-400 rounded-lg text-md font-semibold transition-all duration-300 group"
      >
        View Event Details
        <span className="ml-2 group-hover:translate-x-1 transition-transform">
          &rarr;
        </span>
      </Link>
    </div>
  </section>
);

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const handleSlide = useCallback((n) => {
    setActiveIndex(prev => (prev + n + events.length) % events.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => handleSlide(1), 8000);
    return () => clearInterval(interval);
  }, [handleSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) handleSlide(diff > 0 ? -1 : 1);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleSlide(-1);
      if (e.key === "ArrowRight") handleSlide(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSlide]);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated starry background */}
      <div className="absolute inset-0 bg-[url('src/assets/stars.png')] opacity-40 animate-pulse-slow" />
      
      {/* Main carousel */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="relative w-full max-w-7xl h-[70vh] mx-4 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={classNames(
                "absolute inset-0 transition-all duration-700 ease-out",
                index === activeIndex 
                  ? "opacity-100 z-10 translate-x-0"
                  : index < activeIndex 
                    ? "-translate-x-full opacity-0 z-0"
                    : "translate-x-full opacity-0 z-0"
              )}
            >
              <SlideContent event={event} isActive={index === activeIndex} />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={() => handleSlide(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-cyan-400 hover:text-cyan-300 z-20 backdrop-blur-sm p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            &larr;
          </button>
          <button
            onClick={() => handleSlide(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-cyan-400 hover:text-cyan-300 z-20 backdrop-blur-sm p-2 rounded-full transition-all"
            aria-label="Next slide"
          >
            &rarr;
          </button>
        </div>

        <DotIndicator 
          count={events.length} 
          activeIndex={activeIndex} 
          onClick={setActiveIndex}
        />
      </section>

      {/* Detailed sections with scroll animation */}
      {events.map((event, index) => (
        <DetailsSection key={index} event={event} />
      ))}
    </div>
  );
};

export default Events;