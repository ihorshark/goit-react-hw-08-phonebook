import ContactForm from 'components/phoneBook/ContactForm';
import ContactList from 'components/phoneBook/ContactList';
import Filter from 'components/phoneBook/Filter';
import styles from '../pages/pages.module.css';
import { useSelector } from 'react-redux';
import { getLoading } from 'redux/contacts/contacts-selectors';

const Contacts = () => {
  const isLoading = useSelector(getLoading);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <h2 className={styles.subTitle}>Add contact</h2>
      <ContactForm />
      <h2 className={styles.subTitle}>Contact list</h2>
      {isLoading && <p>Loading...</p>}
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
