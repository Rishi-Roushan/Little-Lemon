// src/Service.js
import React, { useState } from 'react';
import styles from './Service.module.css';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    numberOfGuests: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.numberOfGuests) newErrors.numberOfGuests = 'Number of guests is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission, e.g., send data to server
      console.log('Booking request submitted:', formData);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Book a Table</h1>
      <div className={styles.infoSection}>
        <h2 className={styles.subtitle}>Make Your Reservation</h2>
        <p className={styles.description}>
          Enjoy a delightful dining experience with us. Fill out the form below to book a table for your next visit. We look forward to serving you!
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.label}>Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.time && <span className={styles.error}>{errors.time}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="numberOfGuests" className={styles.label}>Number of Guests</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.numberOfGuests && <span className={styles.error}>{errors.numberOfGuests}</span>}
        </div>
        <button type="submit" className={styles.submitButton}>Book Now</button>
      </form>
    </div>
  );
};

export default Service;
