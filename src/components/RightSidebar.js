import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiMail, FiClock } from 'react-icons/fi';

const RightSidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const sections = [
    { id: 'home', icon: FiHome, label: 'Home' },
    { id: 'about', icon: FiUser, label: 'About' },
    { id: 'projects', icon: FiCode, label: 'Projects' },
    { id: 'contact', icon: FiMail, label: 'Contact' }
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-background/80 backdrop-blur-lg rounded-full py-4 px-2 flex flex-col items-center gap-4 shadow-lg border border-gray-800">
        {/* Digital Clock */}
        <div className="text-xs lg:text-sm font-mono text-primary">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>

        {/* Navigation Dots */}
        <nav className="flex flex-col gap-3">
          {sections.map(({ id, icon: Icon, label }) => (
            <div key={id} className="relative group">
              <a
                href={`#${id}`}
                className={`block p-1.5 lg:p-2 rounded-full transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-primary text-background'
                    : 'text-gray-400 hover:text-primary'
                }`}
                aria-label={label}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-2 lg:mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-primary text-background text-xs lg:text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default RightSidebar;
