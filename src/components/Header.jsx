import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = ({ setCurrentPage, currentPage }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "resume", label: "Skills" },
    { id: "portfolio", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="
        fixed bottom-0 left-0 right-0   /* ✅ mobile: bottom bar */
        lg:top-0 lg:bottom-auto lg:left-1/4  /* ✅ desktop: top */
        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
        text-white px-4 sm:px-6 py-3 sm:py-4 
        text-sm sm:text-base lg:text-lg 
        flex justify-around lg:justify-start lg:space-x-6 xl:space-x-8 
        items-center shadow-lg z-30
      "
    >
      <nav className="flex w-full text-xl  justify-center items-center space-x-4 lg:space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`relative pb-1 transition-all duration-300 ${
              currentPage === item.id
                ? "text-purple-400 font-semibold"
                : "hover:text-purple-300"
            }`}
          >
            {item.label}
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-purple-400 transition-all duration-300 ${
                currentPage === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
