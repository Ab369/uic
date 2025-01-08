import React, { useEffect } from "react";
import { gsap } from "gsap";
import anime from "animejs";

const Preloader = ({ onAnimationComplete }) => {
  useEffect(() => {
    // Counter logic
    const counterElement = document.querySelector(".count p");
    let currentValue = 0;

    const updateCounter = () => {
      if (currentValue < 100) {
        let increment = Math.floor(Math.random() * 10) + 5; // Increased increments for faster counting
        currentValue = Math.min(currentValue + increment, 100);
        counterElement.textContent = `${currentValue}%`;

        let delay = Math.floor(Math.random() * 50) + 15; // Reduced delay between updates
        setTimeout(updateCounter, delay);
      }
    };
    updateCounter();

    // Fade out counter
    gsap.to(".count", { opacity: 0, delay: 1.8, duration: 0.2 }); // Reduced delay and duration

    // Animate "Loading..."
    const textWrapper = document.querySelector(".ml16");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: ".ml16 .letter",
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 600, // Faster animation for letters
        delay: (el, i) => i * 10, // Reduced delay between each letter animation
      })
      .add({
        targets: ".ml16",
        opacity: 0,
        easing: "easeOutExpo",
        duration: 500, // Reduced duration
        delay: 500, // Reduced delay before fading out
      });

    // GSAP animations
    gsap
      .timeline()
      .to(".pre-loader", {
        scale: 0.5,
        ease: "power4.inOut",
        duration: 1, // Faster scaling animation
        delay: 1.5, // Reduced delay
      })
      .to(".loader", {
        height: "0",
        ease: "power4.inOut",
        duration: 0.8, // Reduced duration
      })
      .to(".loader-bg", {
        height: "0",
        ease: "power4.inOut",
        duration: 0.8, // Reduced duration
      })
      .to(
        ".loader-2",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power4.inOut",
          duration: 0.8, // Reduced duration
        },
        "-=0.8"
      )
      .to(".pre-loader", {
        display: "none",
        duration: 0, // Ensures it hides immediately
        onComplete: () => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        },
      });
  }, [onAnimationComplete]);

  return (
    <div className="pre-loader">
      <div className="loader">
        <div className="count">
          <p>0</p>
        </div>
        <div className="copy">
          <p className="ml16">
            <span className="letter">L</span>
            <span className="letter">o</span>
            <span className="letter">a</span>
            <span className="letter">d</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">.</span>
            <span className="letter">.</span>
            <span className="letter">.</span>
          </p>
        </div>
      </div>
      <div className="loader-bg"></div>
      <div className="loader-2"></div>
    </div>
  );
};

export default Preloader;
