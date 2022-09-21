import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

const isContactNameFound = (contacts, name) => {
  if (contacts.length === 0) return false;
  return contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (data) {
    const contact = { name: data.name, number: data.number };
    const contacts = await axios.get('/contacts');
    if (isContactNameFound(contacts.data, contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return { name: 'exists' };
    } else {
      const response = await axios.post('/contacts', contact);
      return response.data;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);
