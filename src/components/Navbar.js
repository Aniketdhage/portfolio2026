import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Aniket Dhage</span>
          <span className="logo-bracket">/&gt;</span>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation Links */}
        <motion.ul
          className={`nav-links ${isOpen ? 'active' : ''}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.id} variants={itemVariants}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
