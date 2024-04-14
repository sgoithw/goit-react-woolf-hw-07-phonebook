import React, { Component, useState } from 'react';
import style from './ContactForm.module.css';

const ContactFrom = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <label className={style.formLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label className={style.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={({ target }) => setNumber(target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactFrom;
