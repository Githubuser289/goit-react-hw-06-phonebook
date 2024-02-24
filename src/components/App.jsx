import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const STORAGE_KEY = 'phonebook';
let counter = 0;

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function getDataFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    data ? setContacts(JSON.parse(data)) : setContacts([]);
  }

  useEffect(() => {
    counter++;
    counter === 1 && getDataFromLocalStorage();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = evt => {
    let idToDel = evt.target.id;
    let list = [...contacts];
    let index = list.findIndex(elem => elem.id === idToDel);
    list.splice(index, 1);
    setContacts(list);
  };

  const handleFilterChange = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    let name = evt.target[0].value;
    let number = evt.target[1].value;
    let list = [...contacts];
    if (list.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    let newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    list.push(newContact);
    setContacts(list);
    document.getElementsByTagName('form')[0].reset();
  };

  let list = [...contacts];
  if (filter !== '') {
    list = list.filter(contact => contact.name.toLowerCase().includes(filter));
  }
  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm submitCallback={handleSubmit} />

      <h2>Contacts</h2>
      <Filter changeCallback={handleFilterChange} />

      <ContactList listToRender={list} deleteCallback={deleteContact} />
    </div>
  );
}

export default App;
