import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  {
    category: 'Frontend Frameworks & Libraries',
    items: [
      'React.js',
      'Next.js (App Router / Pages Router concepts)',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS',
    ],
  },
  {
    category: 'UI & Styling',
    items: [
      'Material UI (MUI)',
      'Styled Components',
      'Tailwind CSS',
      'Responsive Web Design',
      'Component-Based UI Architecture',
    ],
  },
  {
    category: 'State Management & Data Handling',
    items: [
      'Context API',
      'REST API Integration',
      'Client-side Rendering (CSR)',
      'Server-side Rendering (SSR) – Next.js concepts',
      'Static Site Generation (SSG) – Next.js concepts',
    ],
  },
  {
    category: 'Mobile Development',
    items: ['React Native', 'Expo'],
  },
  {
    category: 'Tools & Development Practices',
    items: [
      'Git',
      'GitLab',
      'Postman',
      'API Testing',
      'Debugging & Performance Optimization',
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Core Skills
      </motion.h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <motion.div
            className="skill-category"
            key={skill.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
