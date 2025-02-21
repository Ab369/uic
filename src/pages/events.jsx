import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import transition from "../utils/transition";

import B2 from '../assets/events/B2.jpeg'
import D1 from '../assets/events/D1.jpeg'
import E1 from '../assets/events/E1.jpeg'
import E2 from '../assets/events/E2.jpeg'
import inn2 from '../assets/events/INN2.jpeg'
import Q1 from '../assets/events/Q1.jpeg'
import Q2 from '../assets/events/Q2.jpeg'
import Q3 from '../assets/events/Q3.jpeg'
import Q4 from '../assets/events/Q4.jpeg'
import Q5 from '../assets/events/Q5.jpeg'
import T1 from '../assets/events/T1.jpeg'
import T2 from '../assets/events/T2.jpeg'
import T3 from '../assets/events/T3.jpeg'
import ind from '../assets/events/Ind.jpeg'
import Mp1 from '../assets/events/Mp3.jpeg'
import Mp2 from '../assets/events/Mp2.jpeg'

const events = [
  // Update image paths to use imports or public folder
  {
    title: "Innowizion",
    image: inn2,
    path: "/innowizion",
    description: "Innowizion is a three-day annual fest organized by the University Innovation Cell, dedicated to fostering innovation and creativity. It is designed to challenge participants with technical competitions, brainstorming sessions, and problem-solving activities. The fest serves as a platform for students to showcase their skills, collaborate on innovative ideas, and engage in intellectually stimulating experiences. ",
    details: [
      "I-Expo",
      "Dotting the eyes",
      "I-Cluminate",
      "I-Quiz",
      "Trash Bash",
      "Elementos",
      "Tech Tribunal"
    ]
  },


  {
    title: "Malaviyan Prodigy",
    image: Mp1,
    path: "/bytegram",
    description: "Malaviyan Prodigy is a flagship event of UIC, designed to bridge the gap between students and accomplished alumni. This event provides a unique opportunity for students to interact with distinguished alumni, gain valuable career guidance, and explore diverse career paths. Through insightful discussions, mentorship sessions, and personal experiences shared by alumni, Malaviyan Prodigy aims to inspire and equip students with the knowledge and motivation to excel in their professional journeys.",
    details: [
      "Connecting with prestigious alumni",
      "Provides phenomenal career guidance",
      "Helps in growing networks",
      "Industry expert specialists interaction",

      <iframe className="w-80 md:w-full" height="300" src="https://www.youtube.com/embed/et1ubNWGj8k" title="ASHUTOSH PANDEY,  SWE  @MAKEMYTRIP | EKANSH SAXENA, SDE @EXPEDIA GROUP | UJJAWAL GUPTA , SDE @ZOMATO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,


      <iframe className="w-80 md:w-full" height="300" src="https://www.youtube.com/embed/Z3gNvgsZawY" title="VAREESH PRATAP | PRESIDENT @CAMBRIDGE STUDENT UNION | MMMUT BATCH 2016 [ME]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,

      <iframe className="w-80 md:w-full" height="300" src="https://www.youtube.com/embed/fjRbY5CVAeA" title="ASHUTOSH PANDEY | ISRO SCIENTIST | AIR 324 , GATE CSE | AIR 3 , ISRO&#39;18 |  MMMUT BATCH -2015 [CSE]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,


      <iframe className="w-80 md:w-full" height="300" src="https://www.youtube.com/embed/MfbvTCaQv7w" title="ANKITA JAISWAL | M&amp;A CONSULTING @DELOITTE | MBA, IIM LUCKNOW | MMMUT BATCH 2017[ECE]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    ]

   
  },

 

  {
    title: "Bytegram",
    image: B2,
    path: "/bytegram",
    description: "Bytegram is one of the foremost events conducted by the University Innovation Cell (UIC) as part of Innowizion. It is an engaging and competitive event featuring a series of technical quizzes, rapid-fire buzzer rounds, and problem-solving challenges. Designed to test participants’ knowledge, logical thinking, and quick decision-making skills, Bytegram offers an exhilarating experience for tech enthusiasts. With its dynamic format and high-energy atmosphere, the event fosters a spirit of learning, collaboration, and innovation.",
    details: [
      "Foremost event conducted ",
      "Involves buzzer round",
      "Brainstorming Quizzes",
      "Exciting prizes"
    ]
  },

  {
    title: "Inductions",
    image: ind,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },

  {
    title: "Dotting the eyes",
    image: D1,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },


  {
    title: "I-Expo",
    image: E2,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },

  {
    title: "I-Cluminate",
    image: Q4,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },

  {
    title: "I-Quiz",
    image: Q3,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },

  {
    title: "Gospel Falconry",
    image: E1,
    path: "/inductions",
    description: "Inductions into the University Innovation Cell (UIC) serve as the gateway for aspiring innovators to become part of the team. The selection process involves form shortlisting based on applicants’ skills and interests, followed by a personal interview to assess their technical knowledge, problem-solving abilities, and passion for innovation. This rigorous process ensures that UIC welcomes dedicated individuals ready to contribute to impactful projects and events like Innowizion.",
    details: [
      "Form Shortlisting",
      "Personal Interview",
      "Wholesome Experience",
      "Interaction with society members"
    ]
  },

  {
    title: "Trash Bash",
    image: T1,
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

// ... (events array remains unchanged)

// ... (keep events array exactly the same)

const SlideContent = ({ event, isActive }) => (
  <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-orange-500/30 shadow-[0_0_40px_-10px_rgba(255,165,0,0.3)]">
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
            ? "bg-white scale-125 shadow-[0_0_12px_2px_rgba(255,165,0,0.5)]"
            : "bg-gray-500 hover:bg-orange-600"
        )}
      />
    ))}
  </div>
);

const DetailsSection = ({ event }) => (
  <section className="min-h-screen py-20 px-4 sm:px-8 flex items-center justify-center relative">
    <div className="relative z-10 max-w-6xl w-full space-y-8">
      <h3 className="text-4xl md:text-5xl font-bold text-orange-100 mb-8">
        {event.title}
      </h3>
      <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl">
        {event.description}
      </p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {event.details.map((detail, i) => (
          <div 
            key={i}
            className="p-6 bg-black/50 rounded-xl border border-orange-500/20 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300"
          >
            <div className="text-orange-400 text-lg font-medium flex items-center">
              {detail}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {event.title === "Innowizion" && (
          <Link
            to='https://innowizion.vercel.app/'  target="_blank"
            rel="noopener noreferrer" // Update this path as needed
            className="inline-flex items-center mt-8 px-8 py-3 border-2 border-orange-400/50 hover:border-orange-400/80 bg-orange-400/5 hover:bg-orange-400/10 text-orange-400 rounded-lg text-md font-semibold transition-all duration-300 group"
          >
            Visit Innowizion'25
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        )}
      </div>
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
  
  // ... (keep all state and logic exactly the same)

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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

          {/* Navigation Arrows - Changed from cyan to orange */}
          <button
            onClick={() => handleSlide(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-orange-400 hover:text-orange-300 z-20 backdrop-blur-sm p-2 rounded-full transition-all"
            aria-label="Previous slide"
          >
            &larr;
          </button>
          <button
            onClick={() => handleSlide(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-3xl md:text-4xl text-orange-400 hover:text-orange-300 z-20 backdrop-blur-sm p-2 rounded-full transition-all"
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
      {events.slice(0,4).map((event, index) => (
        <DetailsSection key={index} event={event} />
      ))}
    </div>
  );
};

export default transition(Events);