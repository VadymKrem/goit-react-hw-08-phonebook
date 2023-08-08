import { useState, useEffect } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';


export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevState => ([...prevState, newContact]));
  };

  const changeFilter = event => {
    setFilter( event.currentTarget.value);
  }

const normalizedFilter = filter.toLowerCase();
const contactsAfterFilter = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id))
}

  return (
      <Container>
        <Section title="Phonebook" />
        <ContactForm formSubmit={onFormSubmit} />
        <Section title="Contacts" />
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList
          contacts={contactsAfterFilter}
          onDelete={deleteContact}
        />
      </Container>
    );
  }