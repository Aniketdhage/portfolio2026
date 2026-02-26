import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <motion.div className="gradient-blob blob-1"></motion.div>
        <motion.div
          className="gradient-blob blob-2"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="highlight">Aniket Dhage</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Front-End Developer | React.js & Next.js Specialist
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Building beautiful, scalable, and high-performance web applications
            with 2.5+ years of professional experience
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="mailto:aniketdhage90@gmail.com"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </motion.a>
            <motion.a
              href="tel:+919673517187"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPhone />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aniket-dhage"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#00d4ff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-illustration"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="code-window">
            <div className="code-header">
              <div className="code-dot red"></div>
              <div className="code-dot yellow"></div>
              <div className="code-dot green"></div>
            </div>
            <div className="code-body">
              <p>
                <span className="code-keyword">function</span>{' '}
                <span className="code-function">buildAwesome</span>() {'{'}
              </p>
              <p className="indent">
                return <span className="code-string">"Portfolio"</span>;
              </p>
              <p>{'}'}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
