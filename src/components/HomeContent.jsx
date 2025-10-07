

// HomeContent.js - Home Page Component with Bubble Animation
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const HomeContent = () => {
  const contentRef = useRef(null);
  const bubbleRef = useRef(null);
  const bubbleRef2 = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    }

    // Bubble floating animations
    [bubbleRef, bubbleRef2].forEach((ref, i) => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: i % 2 === 0 ? -25 : 25,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, []);

  return (
    <div id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
     <div
        ref={bubbleRef}
        className="absolute top-[-50px] right-[-50px] w-[20rem] sm:w-[24rem] md:w-[28rem] h-[20rem] sm:h-[24rem] md:h-[28rem] bg-gradient-to-br from-purple-600 to-pink-300 rounded-full opacity-40 blur-3xl"
      ></div>
      <div
        ref={bubbleRef2}
        className="absolute bottom-[-80px] left-[-80px] w-[24rem] sm:w-[28rem] md:w-[32rem] h-[24rem] sm:h-[28rem] md:h-[32rem] bg-gradient-to-tr from-blue-500 to-pink-300 rounded-full opacity-30 blur-3xl"
      ></div>
      <div ref={contentRef} className="text-center z-10 max-w-md sm:max-w-lg md:max-w-2xl px-4">
        <h1 className="text-4xl ml-12 sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 whitespace-nowrap">
  <BlurText
    text="I'm Bhakti Agrawal"
    delay={350}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-5xl sm:text-6xl md:text-6xl mb-6 sm:mb-8 ml-10 sm:justify-center md:justify-start
    "
  />
</h1>

        <h2 className="text-3xl sm:text-4xl font-bond text-purple-500">Full Stack Developer</h2>
        <h2 className="text-3xl sm:text-4xl font-bond text-purple-500">and AI Enthusiast.</h2>
           <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 opacity-90 leading-relaxed">
          Building scalable web applications with <span className="text-purple-400">clean code </span> 
          and <span className="text-pink-300">innovative AI solutions</span>. 
          Passionate about turning ideas into impactful products.
        </p>
      </div>
    </div>
  );  
};

export default HomeContent;
