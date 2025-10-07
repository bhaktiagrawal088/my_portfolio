

// AboutContent.js - About Page Component with Fade-In Animations
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Briefcase, GraduationCap, Code } from "lucide-react"; // nice minimal icons

const AboutContent = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.25, ease: "power3.out" }
    );
  }, []);

  return (
    <div id="about" className="p-6 mt-18 sm:p-8 sm:mt-8 md:p-14 bg-gray-900 text-white min-h-screen overflow-y-auto">
      {/* Title */}
      <h2
        ref={(el) => (sectionsRef.current[0] = el)}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-10 text-white text-center"
      >
        About Me
      </h2>

      {/* Intro */}
      <p
        ref={(el) => (sectionsRef.current[1] = el)}
        className="text-base sm:text-lg mb-10 md:mb-12 text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-center"
      >
        I'm a <span className="text-purple-400 font-semibold">Full Stack Developer </span> 
        with hands-on experience building scalable web apps. Passionate about{" "}
        <span className="text-purple-300">AI integrations</span>, problem-solving, and 
        creating impactful digital solutions. <br />
        Solved <span className="font-semibold">150+ LeetCode</span> problems and continuously learning new tech.
      </p>

      {/* Experience Section */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="mb-10 md:mb-18"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
          <Briefcase className="w-5 sm:w-6 md:w-7 h-7 text-purple-400" /> Experience
        </h3>
        <ul className="space-y-4 sm:space-y-6">
          <li className="bg-gray-800 p-3 sm:p-4 md:p-5 rounded-lg shadow-md hover:shadow-purple-500/20 transition">
            <p className="font-semibold text-purple-300 text-sm sm:text-base">
              Freelance Full Stack Developer <span className="text-gray-400">(June - September 2025)</span>
            </p>
            <p className="text-gray-400 text-sm sm:text-base">Developing a secure LMS platform with authentication & dashboards.</p>
          </li>
          <li className="bg-gray-800 p-3 sm:p-4 md:p-5 rounded-lg shadow-md hover:shadow-purple-500/20 transition">
            <p className="font-semibold text-purple-300 text-sm sm:text-base">
              MERN Stack Intern at SparkStartSolutions <span className="text-gray-400">(Apr - May 2025)</span>
            </p>
            <p className="text-gray-400 text-sm sm:text-base">Built responsive websites and optimized UI performance.</p>
          </li>
        </ul>
      </div>
      

      {/* Education Section */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="mb-8 md:mb-12"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
          <GraduationCap className="w-5 sm:w-6 md:w-7 h-7 text-purple-400" /> Education
        </h3>
        <ul className="space-y-3 sm:space-y-4">
          <li className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-purple-500/20 transition">
            <p className="font-semibold text-purple-300 text-sm sm:text-base">MCA, Lovely Professional University</p>
            <p className="text-gray-400 text-sm sm:text-base">8.1 CGPA | 2023 - 2025</p>
          </li>
          <li className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-purple-500/20 transition">
            <p className="font-semibold text-purple-300 text-sm sm:text-base">BCA, ITM Group of Institutions</p>
            <p className="text-gray-400 text-sm sm:text-base">75% | 2020 - 2023</p>
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      
    </div>
  );
};

export default AboutContent;
