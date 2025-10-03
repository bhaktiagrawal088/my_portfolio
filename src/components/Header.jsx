// Header.js
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Header = ({ setCurrentPage, currentPage }) => {
  const headerRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className="fixed top-0 left-0 right-0 lg:left-1/4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 text-lg flex justify-between items-center shadow-lg z-30"
    >
      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden text-purple-400"
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-8">
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

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-6 space-y-4 lg:hidden shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setMobileOpen(false);
              }}
              className={`text-lg ${
                currentPage === item.id
                  ? "text-purple-400 font-semibold"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
