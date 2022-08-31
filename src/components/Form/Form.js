import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/contactsApi';

import s from './Form.module.css';

export default function Form() {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setphone] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'phone') {
      setphone(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const addingExistingName = data.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (addingExistingName) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    addContact({ name: name, phone: phone });

    reset();
  };

  function reset() {
    setName('');
    setphone('');
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Phone
        <input
          className={s.input}
          type="tel"
          value={phone}
          onChange={handleChange}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
