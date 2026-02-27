import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Professional Summary
      </motion.h2>
      <motion.p
        className="about-summary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        React.js and Next.js Front-End Developer with 3+ years of experience
        building scalable, SEO-friendly, and high-performance web applications.
        Strong expertise in React.js, Next.js fundamentals, modern JavaScript
        (ES6+), component-driven architecture, and REST API integration.
        Experienced in creating responsive, accessible UIs using Material UI,
        Styled Components, and Tailwind CSS. Hands-on experience with React
        Native for cross-platform mobile development. Proven ability to
        collaborate with cross-functional teams and deliver production-ready
        applications.
      </motion.p>
    </section>
  );
};

export default About;
