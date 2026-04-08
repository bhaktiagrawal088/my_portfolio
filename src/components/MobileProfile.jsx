
// MobileProfile.js - Mobile Profile Component
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Code2, Download, Mail, MapPin } from "lucide-react"; // icons
import profileImg from "../assets/image.png";


const MobileProfile = () => {
  const profileRef = useRef(null);

  useEffect(() => {
    if (profileRef.current) {
      gsap.fromTo(
        profileRef.current.children,
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

  const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/BhaktiAgrawal_WebDeveloper.pdf";
  link.download = "Bhakti_Agrawal_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div
      ref={profileRef}
      className="lg:hidden bg-gradient-to-b from-purple-950/40 via-purple-900 to-gray-800 text-white p-4 sm:p-6 flex flex-col items-center space-y-4 sm:space-y-6"
    >
      {/* Logo / Name */}
      <h1 className="text-lg sm:text-xl font-bold tracking-wide text-purple-400">
        Bhakti Agrawal
      </h1>

      {/* Profile Pic */}
      <img
        src={profileImg}
        alt="Bhakti Agrawal"
        className="w-40 sm:w-48 h-48 sm:h-56 object-cover shadow-2xl border-b-2 border-purple-300 border-blur border-opacity-20 rounded-b-2xl"
      />

      {/* Specialization */}
      <div className="text-center">
        <p className="text-xs sm:text-sm opacity-70">Specialization</p>
        <p className="font-medium text-purple-300 text-sm sm:text-base">Full Stack Developer</p>
      </div>

      {/* Contact Info */}
      <div className="w-full space-y-2 sm:space-y-3">
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          <Mail size={16} className="text-purple-400" />
          <span>bhaktiagrawal088@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          <MapPin size={16} className="text-purple-400" />
          <span>Noida, India</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-3 sm:space-x-4 mt-2">
        <SocialIcon
          href="https://www.linkedin.com/in/bhakti-agrawal-a88b51214/"
          icon={<Linkedin size={18} className="sm:size-20" />}
        />
        <SocialIcon
          href="https://github.com/bhaktiagrawal088"
          icon={<Github size={18} className="sm:size-20" />}
        />
        <SocialIcon
          href="https://leetcode.com/u/bhaktiagrawal286/"
          icon={<Code2 size={18} className="sm:size-20" />}
        />
      </div>

     <button
  onClick={handleDownload}
  className="mt-4 flex items-center justify-center gap-2 py-3 px-5 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all shadow-lg w-full"
>
  <Download size={18} />
  Download CV
</button>
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

export default MobileProfile;
