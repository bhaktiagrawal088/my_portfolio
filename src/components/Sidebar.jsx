// Sidebar.js - Left Sidebar Component with GSAP Animations + Polished Styling
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Code2, Download } from "lucide-react"; // icons

const Sidebar = () => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div
      ref={sidebarRef}
      className="fixed left-0 top-0 h-full w-1/4 bg-gradient-to-b from-purple-950/40 via-pruple-900 to-gray-800 text-white p-8 flex flex-col items-center space-y-8 border-r border-gray-700/50"
    >
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold tracking-wide text-purple-400">
        Bhakti Agrawal
      </h1>

      {/* Profile Pic */}
      <img
        src="/src/assets/image.png"
        alt="Bhakti Agrawal"
        className="w-60 h-72 object-cover  shadow-2xl border-b-2 border-purple-300 border-blur border-opacity-20 rounded-b-2xl"
      />

      {/* Specialization */}
      <div className="text-center">
        <p className="text-sm opacity-70">Specialization</p>
        <p className="font-medium text-purple-300">Full Stack Developer</p>
      </div>

      {/* Location */}
      <div className="text-center">
        <p className="text-sm opacity-70">Based in</p>
        <p>Noida, India</p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-5 mt-2">
        <SocialIcon
          href="https://www.linkedin.com/in/bhakti-agrawal-a88b51214/"
          icon={<Linkedin size={22} />}
        />
        <SocialIcon
          href="https://github.com/bhaktiagrawal088"
          icon={<Github size={22} />}
        />
        <SocialIcon
          href="https://leetcode.com/u/bhaktiagrawal286/"
          icon={<Code2 size={22} />}
        />
      </div>

      {/* Download CV Button */}
      <a
        href="/src/assets/BhaktiAgrawal_WebDeveloper.pdf"
        download
        className="mt-auto flex items-center gap-2 py-2 px-4 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors shadow-lg"
      >
        <Download size={18} />
        Download CV
      </a>
    </div>
  );
};

const SocialIcon = ({ href, icon }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const el = iconRef.current;
    if (el) {
      el.addEventListener("mouseenter", () =>
        gsap.to(el, { scale: 1.2, duration: 0.2 })
      );
      el.addEventListener("mouseleave", () =>
        gsap.to(el, { scale: 1, duration: 0.2 })
      );
    }
  }, []);

  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white/10 rounded-full text-gray-300 hover:text-purple-400 hover:bg-white/20 transition-colors"
    >
      {icon}
    </a>
  );
};

export default Sidebar;
