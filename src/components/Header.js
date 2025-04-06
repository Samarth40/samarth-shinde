import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center py-20 overflow-hidden relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="w-full md:w-3/5 space-y-3 text-center md:text-left">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="font-mono text-primary text-lg md:text-xl">
                  Hello World! I'm
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold -mt-1"
              >
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Samarth Shinde
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary/80 -mt-1"
              >
                <TypeAnimation
                  sequence={[
                    'No-Code Developer',
                    2000,
                    'Low-Code Expert',
                    2000,
                    'Community Leader',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-secondary/80 max-w-2xl mt-2"
              >
                Transforming ideas into reality through the power of no-code and low-code solutions. 
                Passionate about building efficient, scalable applications and fostering tech communities.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4"
              >
                <motion.a
                  href="https://drive.google.com/file/d/1nxaPT6wlde4p-PXNN3iudeSoY2ndyTOk/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-primary text-background rounded-lg font-medium text-lg
                           hover:bg-primary/90 transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  My Resume
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium text-lg
                           hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  View My Work
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center gap-6 justify-center md:justify-start pt-4"
              >
                {[
                  { icon: FaGithub, href: 'https://github.com/Samarth40', label: 'GitHub Profile' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/samarth-shinde-791072271/', label: 'LinkedIn Profile' },
                  { icon: FaTwitter, href: 'https://x.com/Samarth4033', label: 'Twitter/X Profile' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transform hover:-translate-y-1 transition-all"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-2/5 flex justify-center items-center"
            >
              <div className="relative">
                {/* Animated Background Circle */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/5"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ filter: 'blur(40px)' }}
                />

                {/* Profile Image Container */}
                <motion.div
                  className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 p-1">
                    <div className="w-full h-full rounded-full bg-background"></div>
                  </div>
                  
                  {/* Image */}
                  <img
                    src="/images/profile-pic.png"
                    alt="Samarth Shinde - No-Code/Low-Code Developer and Tech Community Leader"
                    className="w-full h-full rounded-full object-cover relative z-10"
                    loading="eager"
                    width="400"
                    height="400"
                  />

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 text-primary text-2xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✦
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-8 h-8 text-primary text-2xl"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✦
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
