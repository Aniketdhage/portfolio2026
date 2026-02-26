import React from 'react';
import { motion } from 'framer-motion';
import './Languages.css';

const languages = ['English', 'Marathi', 'Hindi'];

const Languages = () => (
  <section className="languages" id="languages">
    <motion.h2
      className="languages-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Languages
    </motion.h2>
    <motion.ul
      className="languages-list"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {languages.map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </motion.ul>
  </section>
);

export default Languages;
