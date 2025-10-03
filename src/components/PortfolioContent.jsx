


// Projects.js - Updated Portfolio Page Component with GSAP + ScrollTrigger Animations
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';
import LogicLomm from "../assets/Logic-Loom.jpeg";
import JobPortal from "../assets/job_portal1.png";
import mediaGen from "../assets/mediaGen.jpg";
import NotesIt from "../assets/NotesIt.jpg"
import walletApp from "../assets/walletApp.jpg"
import jeton from "../assets/jeton.jpg"
import foodwebsite from  "../assets/foodwebsite.jpg"

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      // Project cards animation
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 100, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.project-grid',
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Logic Loom',
      description:
        'A full-stack online IDE supporting 10+ languages with code sharing, execution history, secure auth , Convex persistence, and customizable dashboards with pricing.',
      image: LogicLomm,
      tech: ['Next.js 15', 'React.js', 'TypeScript', 'Zustand', 'Convex', 'Clerk', 'Monaco Editor', 'Tailwind CSS'],
      github: 'https://github.com/bhaktiagrawal088/Code_Editor',
      live: 'https://logic-loom-tan.vercel.app/',
    },
    {
      title: 'Job Portal',
      description:
        'A comprehensive MERN-stack job platform featuring role-based dashboards, authorization, resume uploads, dynamic job search/application pages, and admin management tools.',
      image: JobPortal,
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'ShadcnUI', 'Multer', 'Cloudinary'],
      github: 'https://github.com/bhaktiagrawal088/Job_portal_project',
      live: 'https://job-portal-zdkb.onrender.com/',
    },
    {
      title: 'MediaGen',
      description:
        'A responsive stock media platform with advanced search/filtering, favorites, dark/light modes, and Material 3 UI design, developed.',
      image: mediaGen,
      tech: ['JavaScript ', 'HTML', 'CSS', 'Material UI', 'VS Code', 'Git '],
      github: 'https://github.com/bhaktiagrawal088/MediaGen',
      live: 'https://stock-media-platform.vercel.app/',
    },
    {
      title: 'NOTE IT',
      description: 
      'Developed a feature-rich notes application  to provide a modern and responsive user interface. The application allows users to create, edit, delete, and organize notes into various categories.',
      image: NotesIt,
      tech: [ 'React', 'Tailwind CSS', 'Redux Toolkit', 'Vite'],
      github: 'https://github.com/bhaktiagrawal088/News_App',
      live: 'https://notes-app-pi-brown.vercel.app/',
    },
        {
      title: 'Khata Book',
      description: 
      'A cross-platform expense tracker with secure authentication, live balance updates, and a cloud-hosted backend for Android and iOS.',
      image: walletApp,
      tech: [ 'React Native', 'Expo', 'Clerk', 'Express.js', 'PostgreSQL (Neon)', 'Redis' ],
      github: 'https://github.com/bhaktiagrawal088/Khata-Book',
    },
  ];
 const UIprojects = [
    {
      title: 'Jeton',
      description:
      'A modern, animated landing page clone showcasing smooth interactions. Sleek and responsive Jeton featuring smooth scroll and interactive effects.',
      image: jeton,
      tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      github: 'https://github.com/bhaktiagrawal088/Jeton_clone',
      live: 'https://jeton-clone-iota.vercel.app/',
    },
    {
      title: 'Tajtaazagi catters',
      description:
      'Enhanced and modernized the existing site (tajtaazagicatters).',
      image: foodwebsite,
      tech: ['React', 'Talwind CSS', 'Framer-motion', 'GSAP'],
      github: 'https://github.com/bhaktiagrawal088/Tajtaazagicatters',
      live: 'https://tajtaazagicatters.vercel.app/',
    },
    
  ];
  return (
    <section id="portfolio" ref={sectionRef} className="py-10 mt-18 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl sm:max-w-5xl md:max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10 sm:mb-12 md:mb-16"
        >
          Featured Projects
        </h2>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

         <h2
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-10 sm:mb-12 md:mb-16 mt-8 sm:mt-10"
        >
          UI/UX Projects
        </h2>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {UIprojects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (card && image) {
      const handleMouseEnter = () => {
        gsap.to(card, {
          y: -20,
          scale: 1.05,
          rotationX: 5,
          rotationY: 5,
          duration: 0.4,
          ease: 'power2.out',
        });
        gsap.to(image, {
          scale: 1.1,
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <div
          ref={imageRef}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 text-xs sm:text-xs font-medium bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-2 mt-3 sm:mt-4">
          <IconButton icon={<Github size={14} className="sm:size-16" />} href={project.github} />
          <IconButton icon={<ExternalLink size={14} className="sm:size-16" />} href={project.live} />
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ icon, href }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    }
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-1 sm:p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

export default Projects;

