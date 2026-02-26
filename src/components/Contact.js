import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <motion.h2
      className="contact-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      Contact
    </motion.h2>
    <motion.p
      className="contact-description"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      style={{ maxWidth: '420px', margin: '0 auto', textAlign: 'center' }}
    >
      Ready to elevate your team? Hire a passionate Front-End Developer for beautiful, scalable results.
    </motion.p>
    <div className="contact-info">
      <span><FaEnvelope /> Email: <a href="mailto:aniketdhage90@gmail.com">aniketdhage90@gmail.com</a></span>
      <span><FaPhone /> Phone: <a href="tel:+919673517187">+91 9673517187</a></span>
      <span><FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/aniket-dhage" target="_blank" rel="noopener noreferrer">aniket-dhage</a></span>
      <span><FaWhatsapp /> WhatsApp: <a href="https://wa.me/919673517187" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></span>
    </div>
  </section>
);

export default Contact;
