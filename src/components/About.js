import { motion, useAnimation } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { SiReact, SiFramer, SiZapier, SiTailwindcss } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { useEffect, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useState } from 'react';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const tools = [
    { icon: <SiReact className="text-[#61DAFB]" />, name: "React.js" },
    { icon: <SiFramer className="text-[#E42E2E]" />, name: "Framer Motion" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "Tailwind CSS" },
    { icon: <TbApi className="text-[#FF5733]" />, name: "REST APIs" },
    { icon: <SiZapier className="text-[#FF4A00]" />, name: "Zapier" }
  ];

  const highlights = [
    {
      icon: <FiCode className="group-hover:rotate-12 transition-transform duration-300" />,
      title: "No-Code & Low-Code Enthusiast",
      description: "Building efficient solutions without traditional coding.",
      details: "Empowering businesses through modern no-code platforms and automated workflows."
    },
    {
      icon: <FiCode className="group-hover:text-primary transition-colors duration-300" />,
      title: "Frontend Developer",
      description: "Specializing in modern web technologies and frameworks.",
      details: "Proficient in HTML, CSS, JavaScript, and React.js for building responsive and interactive web applications."
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen relative flex flex-col justify-center py-20"
    >
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              color: {
                value: "#64ffda",
              },
              links: {
                color: "#64ffda",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
              },
              size: {
                value: { min: 1, max: 3 },
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
              },
            },
          }}
        />
      )}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Tilt
              key={index}
              className="group"
              options={{
                max: 25,
                scale: 1.05,
                speed: 300
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
                }}
                className="bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary text-xl">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {highlight.title}
                    </h3>
                    <p className="text-secondary/80 mb-3">
                      {highlight.description}
                    </p>
                    <p className="text-sm text-secondary/60">
                      {highlight.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {tools.map((tool, index) => (
            <Tilt
              key={index}
              className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              options={{
                max: 25,
                scale: 1.05,
                speed: 300
              }}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-3xl">{tool.icon}</div>
                <p className="text-sm text-gray-300">{tool.name}</p>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
