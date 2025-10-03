import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Code2, Download, ChevronDown, ChevronUp } from "lucide-react";
import image from "../assets/image.png"

const Sidebar = () => {
  const mobileContentRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Handle window resize to switch between desktop and mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialIcons = [
    { href: "https://www.linkedin.com/in/bhakti-agrawal-a88b51214/", icon: <Linkedin size={20} /> },
    { href: "https://github.com/bhaktiagrawal088", icon: <Github size={20} /> },
    { href: "https://leetcode.com/u/bhaktiagrawal286/", icon: <Code2 size={20} /> },
  ];

  // Animate mobile expand/collapse
  useEffect(() => {
    if (mobileContentRef.current) {
      if (mobileOpen) {
        gsap.to(mobileContentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(mobileContentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [mobileOpen]);

  const mobileContent = (
    <div
      ref={mobileContentRef}
      className="overflow-hidden flex flex-col items-center space-y-4 mt-2"
      style={{ height: 0, opacity: 0 }}
    >
      <div className="text-center">
        <p className="text-sm opacity-70">Based in</p>
        <p>Noida, India</p>
      </div>

      <div className="flex justify-center space-x-4">
        {socialIcons.map((item, index) => (
          <SocialIcon key={index} href={item.href} icon={item.icon} />
        ))}
      </div>

      <a
        href="/src/assets/BhaktiAgrawal_WebDeveloper.pdf"
        download
        className="mt-2 flex items-center justify-center gap-2 py-2 px-4 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors shadow-lg text-sm sm:text-base"
      >
        <Download size={16} />
        Download CV
      </a>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      {isDesktop && (
        <div className="fixed left-0 top-0 h-full w-[25%] bg-gradient-to-b from-purple-950/40 via-gray-900 to-gray-800 text-white p-6 xl:p-8 flex flex-col items-center space-y-6 xl:space-y-8 border-r border-gray-700/50">
          <h1 className="text-xl xl:text-2xl font-bold tracking-wide text-purple-400 text-center">
            Bhakti Agrawal
          </h1>
          <img
            src={image}
            alt="Bhakti Agrawal"
            className="w-48 xl:w-60 h-56 xl:h-72 object-cover shadow-2xl border-b-2 border-purple-300 border-blur border-opacity-20 rounded-b-2xl mx-auto"
          />
          <div className="text-center mt-2">
            <p className="text-sm opacity-70">Specialization</p>
            <p className="font-medium text-purple-300">Full Stack Developer</p>
          </div>
          <div className="text-center">
            <p className="text-sm opacity-70">Based in</p>
            <p>Noida, India</p>
          </div>
          <div className="flex space-x-4 xl:space-x-5 mt-2">
            {socialIcons.map((item, index) => (
              <SocialIcon key={index} href={item.href} icon={item.icon} />
            ))}
          </div>
          <a
            href="/src/assets/BhaktiAgrawal_WebDeveloper.pdf"
            download
            className="mt-auto flex items-center gap-2 py-2 px-4 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors shadow-lg text-sm xl:text-base"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      )}

      {/* Mobile Top Box */}
      {!isDesktop && (
        <div className="fixed top-0 left-0 right-0 bg-gray-900 z-40 p-2 flex flex-col items-center shadow-2xl border-b-2 border-purple-950 rounded-2xl">
          <div className="flex items-center justify-between w-full max-w-md">
            <div className="flex items-center space-x-3">
              <img
                src={image}
                alt="Bhakti"
                className="w-24 h-32 object-cover shadow-2xl border-b-2 border-purple-300 border-blur border-opacity-20 rounded-b-2xl "
              />
              <div>
                <p className="text-purple-400 font-semibold text-2xl">Bhakti Agrawal</p>
                <p className="text-gray-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <ChevronUp size={24} className="text-white" />
              ) : (
                <ChevronDown size={24} className="text-white" />
              )}
            </button>
          </div>

          {/* Expandable Mobile Content */}
          {mobileContent}
        </div>
      )}
    </>
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
