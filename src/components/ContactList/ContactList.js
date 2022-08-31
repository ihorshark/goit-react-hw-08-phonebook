import React from 'react';
import { Audio } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/phonebook/filterSlice';

import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/phonebook/contactsApi';

import s from './ContactList.module.css';

export default function ContactList() {
  const { data, isFetching } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();
  const filter = useSelector(getFilter);

  function getVisibleContacts() {
    if (filter === '') {
      return data;
    }
    const normalizedFilterText = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterText)
    );
  }

  const filteredContacts = getVisibleContacts();

  if (isFetching) {
    return <Audio heigth="200" width="200" color="grey" ariaLabel="loading" />;
  }
  if (data) {
    return (
      <ul className={s.list}>
        {data &&
          filteredContacts.map(contact => (
            <li className={s.item} key={contact.id}>
              {contact.name} {contact.phone}
              <button
                type="button"
                onClick={() => deleteContact(contact.id)}
                disabled={result.isLoading}
              >
                Delete user
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
