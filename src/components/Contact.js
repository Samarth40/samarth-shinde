import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      className="relative py-12 md:py-20 bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-sm md:text-base lg:text-lg text-text max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="mailto:samarthshinde40@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-background font-medium text-sm md:text-base transition-colors duration-300 hover:bg-primary/90"
            >
              Say Hello
            </motion.a>
            <motion.a
              href="https://github.com/Samarth40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium text-sm md:text-base transition-colors duration-300 hover:bg-primary/10"
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
