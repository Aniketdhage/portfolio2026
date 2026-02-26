import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: 'Front-End Developer',
    company: 'CT Info Pvt. Ltd., Pune, India',
    period: 'Apr 2023 – Present',
    details: [
      'Developed scalable and responsive web applications using React.js, improving overall user experience by approximately 30%.',
      'Built cross-platform mobile applications for Android and iOS using React Native with Expo.',
      'Designed reusable and modular React components, reducing development time and improving code maintainability.',
      'Integrated RESTful APIs and managed global state using Context API.',
      'Implemented modern UI designs using Material UI, Styled Components, and Tailwind CSS.',
      'Collaborated with designers and backend engineers to deliver maintainable and scalable frontend solutions.',
      'Used Git and GitLab for version control and participated in code reviews to maintain code quality.',
      'Debugged UI issues and ensured cross-browser compatibility and basic accessibility (ADA-friendly practices).',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Sapio Analytics, Mumbai, India',
    period: 'Feb 2022 – Oct 2022',
    details: [
      'Developed and enhanced frontend features using React.js based on client requirements.',
      'Improved team productivity by organizing feature development and bug tracking through component-based architecture.',
      'Collaborated with developers to update existing pages and implement new UI features.',
      'Performed daily code maintenance, debugging, and issue resolution.',
      'Built dynamic and browser-compatible pages using HTML5, CSS3, and React.js.',
    ],
  },
];

const Experience = () => (
  <section className="experience" id="experience">
    <motion.h2
      className="experience-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Professional Experience
    </motion.h2>
    <div className="experience-list">
      {experiences.map((exp, idx) => (
        <motion.div
          className="experience-card"
          key={exp.company}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>{exp.role}</h3>
          <span className="company">{exp.company}</span>
          <span className="period">{exp.period}</span>
          <ul>
            {exp.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
