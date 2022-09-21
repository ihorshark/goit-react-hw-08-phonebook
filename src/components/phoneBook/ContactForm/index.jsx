import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selectors';
import * as operations from 'redux/contacts/contacts-operations';
import styles from './contactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const addContactPromise = dispatch(operations.addContact({ name, number }));
    addContactPromise.then(result => {
      if (!result.payload.name.includes('exists')) {
        reset();
      }
    });
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={styles.label}>Number</label>
        <input
          type="tel"
          className={styles.input}
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button className={styles.btn_add} type="submit" disabled={loading}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
