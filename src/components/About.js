import { motion, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';
import { FiCode, FiUsers, FiAward, FiCopy, FiCheck } from 'react-icons/fi';
import { SiWebflow, SiZapier, SiAirtable, SiNotion, SiFramer } from 'react-icons/si';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useCallback } from 'react';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const About = () => {
  const [copied, setCopied] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const tools = [
    { icon: <SiWebflow className="text-[#4353FF]" />, name: "Webflow" },
    { icon: <SiFramer className="text-[#E42E2E]" />, name: "Framer" },
    { icon: <SiZapier className="text-[#FF4A00]" />, name: "Zapier" },
    { icon: <SiAirtable className="text-[#2AB673]" />, name: "Airtable" },
    { icon: <SiNotion className="text-gray-200" />, name: "Notion" }
  ];

  const highlights = [
    {
      icon: <FiCode className="group-hover:rotate-12 transition-transform duration-300" />,
      title: "No-Code Expert",
      description: "Building efficient no-code solutions.",
      details: "Creating scalable apps and automated workflows without traditional coding."
    },
    {
      icon: <FiUsers className="group-hover:scale-110 transition-transform duration-300" />,
      title: "Community Leader",
      description: "Growing tech communities & events.",
      details: "Organizing workshops and meetups for no-code development."
    },
    {
      icon: <FiAward className="group-hover:rotate-45 transition-transform duration-300" />,
      title: "Soft Skills & Leadership",
      description: "Combining technical expertise with strong interpersonal abilities.",
      details: "Leadership, communication, problem-solving, adaptability, and emotional intelligence drive successful collaborations and team achievements."
    }
  ];

  const achievements = [
    { number: 500, suffix: '+', label: 'Community Members' },
    { number: 5, suffix: '+', label: 'Events Organized' },
    { number: 100, suffix: '+', label: 'Lives Impacted' }
  ];

  const softSkills = [
    {
      category: "Leadership",
      icon: "👥",
      color: "#64ffda",
      skills: ["Team Management", "Project Leadership", "Mentoring", "Decision Making"]
    },
    {
      category: "Communication",
      icon: "💭",
      color: "#64d6ff",
      skills: ["Public Speaking", "Technical Writing", "Presentation", "Active Listening"]
    },
    {
      category: "Professional",
      icon: "⚡",
      color: "#ff64b1",
      skills: ["Problem Solving", "Time Management", "Adaptability", "Conflict Resolution"]
    },
    {
      category: "Interpersonal",
      icon: "🤝",
      color: "#9f64ff",
      skills: ["Emotional Intelligence", "Collaboration", "Cultural Awareness", "Empathy"]
    }
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="min-h-screen py-20 bg-background relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          style: {
            position: "absolute",
            zIndex: -1,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#4353FF",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 15,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text">
            Impact & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Tilt
                key={index}
                options={{
                  max: 25,
                  scale: 1.05,
                  speed: 300,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-center p-6 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all duration-300 group"
                  role="article"
                  aria-label={`Achievement: ${achievement.label}`}
                  onClick={() => handleCopy(`${achievement.number}${achievement.suffix} ${achievement.label}`, index)}
                >
                  <div className="absolute top-2 right-2 text-gray-400 hover:text-primary transition-colors">
                    {copied === index ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="cursor-pointer" />
                    )}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2 group-hover:text-primary transition-colors duration-300">
                    <CountUp
                      end={achievement.number}
                      suffix={achievement.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                      scrollSpyDelay={100}
                    />
                  </h4>
                  <p className="text-primary/80">{achievement.label}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-16 section-heading inline-block">
              Soft Skills & Leadership
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
              {softSkills.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group w-full max-w-md"
                >
                  {/* Hexagonal Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl -z-10" />
                  
                  {/* Category Header */}
                  <div className="flex flex-col items-center mb-6 relative">
                    <div className="hexagon-container mb-4">
                      <div 
                        className="hexagon flex items-center justify-center text-3xl"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}20, transparent)`,
                          borderColor: `${category.color}40`
                        }}
                      >
                        {category.icon}
                      </div>
                      <div 
                        className="hexagon-glow"
                        style={{ background: `${category.color}10` }}
                      />
                    </div>
                    <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-primary transition-colors duration-300">
                      {category.category}
                    </h4>
                  </div>

                  {/* Skills Cloud */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.1,
                          type: "spring",
                          stiffness: 300
                        }}
                        style={{
                          background: `linear-gradient(135deg, ${category.color}15, transparent)`,
                          borderColor: `${category.color}30`
                        }}
                        className="px-4 py-2 rounded-lg border backdrop-blur-sm
                          hover:border-primary/30 transition-all duration-300 cursor-default
                          shadow-sm hover:shadow-md hover:shadow-primary/5"
                      >
                        <span className="text-sm md:text-base whitespace-nowrap">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30 animate-pulse delay-1000" />
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Crafting Digital Solutions Without Code
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                As a passionate No-Code Developer and Community Leader, I bridge the gap between innovative ideas and practical solutions. My expertise lies in empowering individuals and businesses to leverage technology effectively, without the complexity of traditional coding.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Through community leadership and hands-on workshops, I've helped numerous entrepreneurs and professionals embrace digital transformation and achieve their goals faster.
              </p>
            </div>

            {/* Tools Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Tools I Work With</h3>
              <div className="flex flex-wrap gap-4 md:grid md:grid-cols-3 md:gap-4">
                {tools.map((tool, index) => (
                  <Tilt key={index} options={{ max: 25, scale: 1.05 }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      role="button"
                      aria-label={`${tool.name} expertise`}
                    >
                      <span className="text-xl">{tool.icon}</span>
                      <span className="text-gray-300">{tool.name}</span>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <Tilt key={index} options={{ max: 15, scale: 1.02 }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-primary/5 backdrop-blur-sm border border-primary/10 p-6 rounded-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  role="article"
                  aria-label={highlight.title}
                  tabIndex={0}
                >
                  <div className="text-primary text-2xl mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {highlight.description}
                  </p>
                  <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-4 transition-all duration-300 text-gray-400 text-sm">
                    {highlight.details}
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
