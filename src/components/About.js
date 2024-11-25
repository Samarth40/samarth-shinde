import { motion, useAnimation } from 'framer-motion';
import { FiCode } from 'react-icons/fi';
import { SiWebflow, SiZapier, SiAirtable, SiNotion, SiFramer } from 'react-icons/si';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { useEffect, useCallback } from 'react';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const About = () => {
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
      title: "No-Code & Low-Code Enthusiast",
      description: "Building efficient solutions without traditional coding.",
      details: "Empowering businesses through modern no-code platforms and automated workflows."
    }
  ];

  return (
    <motion.section
      id="about"
      ref={ref}
      className="relative py-20 bg-background w-full overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
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
        className="absolute inset-0"
      />

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and pushing the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Tilt key={index} className="group">
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
            <div
              key={index}
              className="bg-surface/30 backdrop-blur-sm p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center gap-2 group hover:-translate-y-1"
            >
              <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {tool.icon}
              </div>
              <span className="text-sm text-secondary/80 group-hover:text-secondary transition-colors duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
