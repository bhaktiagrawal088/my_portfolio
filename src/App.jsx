// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Hero from './components/Hero';
// import Projects from './components/Projects';
// import About from './components/About';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import ParticleBackground from './components/ParticleBackground';

// gsap.registerPlugin(ScrollTrigger);

// function App() {
//   useEffect(() => {

//     // Parallax effect for background elements
//     gsap.utils.toArray('.parallax').forEach((element) => {
//       gsap.to(element, {
//         yPercent: -50,
//         ease: "none",
//         scrollTrigger: {
//           trigger: element,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true
//         }
//       });
//     });
//   }, []);

//   return (
//     <div className="relative overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800">
//       <ParticleBackground />
//       <Hero />
//       <Projects />
//       <About />
//       <Skills />
//       <Contact />
//     </div>
//   );
// }

// export default App;

// App.js - Main App to Tie All Components
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import PortfolioContent from './components/PortfolioContent';
import AboutContent from './components/AboutContent';
import ResumeContent from './components/ResumeContent';
import ContactContent from './components/ContactContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <HomeContent />;
      case 'portfolio': return <PortfolioContent />;
      case 'about': return <AboutContent />;
      case 'resume': return <ResumeContent />;
      case 'contact': return <ContactContent />;
      default: return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar />
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="ml-[25%] pt-16">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;