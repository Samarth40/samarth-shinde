import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 transition-all duration-500"
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary/30 w-full">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar Background with Glass Effect */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/70 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-primary/10' 
          : 'bg-background/50 backdrop-blur-sm'
      }`} />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="text-2xl font-bold relative group z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-primary via-[#38bdf8] to-primary text-transparent bg-clip-text">
              Samarth
            </span>
            <TypeAnimation
              sequence={['.dev', 2000]}
              wrapper="span"
              className="text-text group-hover:text-primary transition-colors duration-300"
              repeat={0}
              cursor={false}
            />
            <motion.span 
              className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-[#38bdf8] to-primary group-hover:w-full transition-all duration-300"
              layoutId="underline"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative text-secondary transition-all duration-300 group py-2 px-4
                  ${activeSection === link.href.slice(1) ? 'text-primary' : 'hover:text-primary'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1VcTaJ76olOxHuhkYcQVIrSgzVOUAXoL1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-6 py-2 overflow-hidden group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-primary group-hover:text-background transition-colors duration-300 flex items-center gap-2">
                Resume
                <FaExternalLinkAlt className="w-3 h-3" />
              </span>
              <span className="absolute inset-0 border border-primary rounded-md" />
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-secondary hover:text-primary transition-colors z-10"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="md:hidden fixed top-0 right-0 w-[300px] h-screen bg-background/95 backdrop-blur-lg shadow-lg"
            >
              <div className="p-6 pt-24 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`block text-secondary transition-colors px-4 py-3 rounded-md relative overflow-hidden group
                      ${activeSection === link.href.slice(1) ? 'text-primary' : 'hover:text-primary'}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    />
                    {activeSection === link.href.slice(1) && (
                      <motion.span
                        layoutId="activeMobileSection"
                        className="absolute inset-0 bg-primary/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                ))}
                <motion.a
                  href="https://drive.google.com/file/d/1VcTaJ76olOxHuhkYcQVIrSgzVOUAXoL1/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-primary hover:bg-primary/10 rounded-md transition-colors flex items-center gap-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                  <FaExternalLinkAlt className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
