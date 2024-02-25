import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';

const STORAGE_KEY = 'phonebook';

function App() {
  function getDataFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);

    // tb sa adaug in store contactele citite din localStorage
    console.log('data=', data);
    // data ? setContacts(JSON.parse(data)) : setContacts([]);
  }

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
}

export default App;
