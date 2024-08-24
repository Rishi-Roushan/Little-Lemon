// src/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Little Lemon</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.navLink}>Home</Link></li>
        <li><Link to="/about" className={styles.navLink}>About</Link></li>
        <li><Link to="/services" className={styles.navLink}>Services</Link></li>
        <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
