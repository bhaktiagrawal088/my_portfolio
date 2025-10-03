

// ResumeContent.js - Resume Page Component with Timeline Animation
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ResumeContent = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div id="resume" className="p-4 sm:p-6 md:p-10 bg-gray-900 text-white min-h-screen overflow-y-auto">
      {/* Title */}
      <h2
        ref={(el) => (itemsRef.current[0] = el)}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-white text-center"
      >
        Resume
      </h2>

      {/* Skills */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h3
          ref={(el) => (itemsRef.current[1] = el)}
          className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-purple-300"
        >
          Skills
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            "JavaScript, C++",
            "React.js, Redux, Framer Motion",
            "Node.js, Express.js",
            "MongoDB, MySQL",
            "OpenAI API, LLMs, Figma AI",
            "Git, VS Code, Blender3D",
          ].map((skill, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index + 2] = el)}
              className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-purple-500/20 transition text-sm sm:text-base"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Courses & Activities */}
      <section>
        <h3
          ref={(el) => (itemsRef.current[8] = el)}
          className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-purple-300"
        >
          Courses & Activities
        </h3>
        <ul className="space-y-4 sm:space-y-6 relative border-l-2 border-purple-500/30 pl-4 sm:pl-6">
          {[
            "MERN Developer Internship - Saarthi AI Pvt. Ltd.",
            "Hack AI Hackathon - Certificate of Participation",
            "React.js Certification - GeeksforGeeks",
            "CS302: Software Engineering - Saylor Academy",
            "150+ LeetCode problems solved",
            "50+ SQL problems on LeetCode",
          ].map((course, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index + 9] = el)}
              className="relative bg-gray-800 p-3 sm:p-5 rounded-lg shadow-md hover:shadow-purple-500/20 transition text-sm sm:text-base"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-2 sm:-left-3 top-4 sm:top-5 w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full shadow"></span>
              {course}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResumeContent;
