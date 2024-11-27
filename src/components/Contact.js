import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await emailjs.sendForm(
        'service_euci9c6',
        'template_9py9fpm',
        form.current,
        'qADHIQp58ZDAzLBGq'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });

      // Clear form
      setFormState({
        user_name: '',
        user_email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('samarthshinde4033@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: HiMail,
      href: 'mailto:samarthshinde4033@gmail.com',
      action: handleCopyEmail,
      color: 'hover:text-primary'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/Samarth40',
      color: 'hover:text-[#2ea44f]'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/samarth-shinde-b44200245/',
      color: 'hover:text-[#0a66c2]'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://x.com/Samarth4033',
      color: 'hover:text-[#1da1f2]'
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col justify-center py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-primary font-mono text-xl sm:text-2xl mb-3 sm:mb-4 bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">Get In Touch</h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">Let's Connect</h3>
          <p className="text-base sm:text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto px-4">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  value={formState.user_name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/50 border border-text/10 rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  value={formState.user_email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-surface/50 border border-text/10 rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Email"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className="w-full min-h-[200px] bg-surface/50 border border-text/10 rounded-lg px-4 py-3 sm:py-4 text-base sm:text-lg text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-3 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-500/10 text-green-500' :
                    submitStatus.type === 'error' ? 'bg-red-500/10 text-red-500' :
                    'bg-primary/10 text-primary'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitStatus.type === 'loading'}
                className={`w-full bg-primary text-background font-semibold rounded-lg px-6 py-3 sm:py-4 flex items-center justify-center space-x-2 transition-colors ${
                  submitStatus.type === 'loading' 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-primary/90'
                }`}
              >
                <span className="text-base sm:text-lg">
                  {submitStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
                <FaPaperPlane className={`text-sm sm:text-base ${
                  submitStatus.type === 'loading' ? 'animate-pulse' : ''
                }`} />
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 lg:pl-8"
          >
            <div className="text-center lg:text-left mb-8">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-[#38bdf8] to-primary bg-clip-text text-transparent">Connect With Me</h4>
              <p className="text-base sm:text-lg text-secondary/80 mb-6">
                Feel free to reach out through any of these platforms
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={link.action}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex items-start justify-between p-4 rounded-lg bg-surface/50 border border-text/10 hover:border-primary/50 transition-all ${link.color}`}
                >
                  <div className="flex items-start">
                    <link.icon className="text-2xl mt-0.5" />
                    <span className="ml-4 text-lg">{link.name}</span>
                  </div>
                  {link.name === 'Email' && emailCopied && (
                    <span className="text-primary text-sm">Copied!</span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
