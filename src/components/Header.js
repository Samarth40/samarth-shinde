import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticleBackground from './ParticleBackground';
import MagneticLink from './MagneticLink';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <header id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      <ParticleBackground />
      
      {/* Social Media Icons - Fixed Left Side */}
      <motion.div 
        className="fixed left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="w-[1px] h-32 bg-gray-400 mx-auto mb-6"></div>
        <MagneticLink 
          href="https://github.com/Samarth40" 
          className="text-2xl text-gray-400 hover:text-primary transition-colors p-2"
        >
          <FaGithub />
        </MagneticLink>
        <MagneticLink 
          href="https://linkedin.com/in/samarth-shinde-791072271/" 
          className="text-2xl text-gray-400 hover:text-primary transition-colors p-2"
        >
          <FaLinkedin />
        </MagneticLink>
        <MagneticLink 
          href="https://twitter.com/SamarthShinde40" 
          className="text-2xl text-gray-400 hover:text-primary transition-colors p-2"
        >
          <FaTwitter />
        </MagneticLink>
        <div className="w-[1px] h-32 bg-gray-400 mx-auto mt-6"></div>
      </motion.div>
      
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto flex-1 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-6"
      >
        {/* Content Section */}
        <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
          <motion.h2 
            className="text-primary font-mono text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi there, I'm
          </motion.h2>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Samarth Shinde
          </motion.h1>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-8 h-[80px] md:h-[100px]">
            <TypeAnimation
              sequence={[
                'No-Code Enthusiast',
                2000,
                'Community Leader',
                2000,
                'Tech Explorer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <motion.p 
            className="text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a passionate developer with a love for creating innovative solutions. Currently exploring the exciting world of no-code development and building communities.
          </motion.p>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          variants={itemVariants}
          className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] flex items-center justify-center"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 p-2">
            <motion.img
              src="/images/profile-pic.jpg"
              alt="Samarth Shinde"
              className="w-full h-full rounded-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 text-primary text-2xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
          <motion.div
            className="absolute -bottom-4 -right-4 w-8 h-8 text-primary text-2xl"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -360, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✦
          </motion.div>
        </motion.div>
      </motion.div>

    </header>
  );
};

export default Header;
