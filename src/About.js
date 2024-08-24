// src/About.js
import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 className={styles.subtitle}>Who We Are</h2>
          <p className={styles.paragraph}>
            We are a dynamic team of professionals dedicated to delivering innovative solutions that drive success. Our expertise spans various industries, allowing us to offer tailored strategies that meet the unique needs of our clients.
          </p>
          <p className={styles.paragraph}>
            Our mission is to create value through strategic insights and cutting-edge technology, fostering growth and sustainability in an ever-evolving market landscape.
          </p>
        </div>
        <div className={styles.imageSection}>
          <img src="https://via.placeholder.com/400" alt="Team" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default About;
