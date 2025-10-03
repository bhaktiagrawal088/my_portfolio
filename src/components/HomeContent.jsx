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
    <div className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
     <div
        ref={bubbleRef}
        className="absolute top-[-50px] right-[-50px] w-[28rem] h-[28rem] bg-gradient-to-br from-purple-600 to-pink-300 rounded-full opacity-40 blur-3xl"
      ></div>
      <div
        ref={bubbleRef2}
        className="absolute bottom-[-80px] left-[-80px] w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-500 to-pink-300 rounded-full opacity-30 blur-3xl"
      ></div>
      {/* <div ref={bubbleRef} className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50 blur-3xl"></div> */}
      <div ref={contentRef} className="text-center z-10 max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">
        <BlurText
            text="I'm Bhakti Agrawal"
            delay={350}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-7xl mb-8"
          />
        </h1>
        <h2 className="text-4xl font-bond text-purple-500">Full Stack Developer</h2>
        <h2 className="text-4xl font-bond text-purple-500">and AI Enthusiast.</h2>
           <p className="mt-6 text-lg md:text-xl text-gray-300 opacity-90 leading-relaxed">
          Building scalable web applications with <span className="text-purple-400">clean code </span> 
          and <span className="text-pink-300">innovative AI solutions</span>. 
          Passionate about turning ideas into impactful products.
        </p>
      </div>
    </div>
  );  
};

export default HomeContent;