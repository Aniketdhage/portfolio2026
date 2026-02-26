import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const education = [
  {
    degree: 'Post Graduate Diploma in Management',
    institution: 'MIT College, Pune',
    period: 'Jun 2024 – Present',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'MGM’s College of Computer Science & Information Technology',
    period: 'Jun 2017 – Mar 2020',
  },
];

const Education = () => (
  <section className="education" id="education">
    <motion.h2
      className="education-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Education
    </motion.h2>
    <div className="education-list">
      {education.map((edu, idx) => (
        <motion.div
          className="education-card"
          key={edu.degree}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <h3>{edu.degree}</h3>
          <span className="institution">{edu.institution}</span>
          <span className="period">{edu.period}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Education;
