import { Component } from 'react';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  contactsFiltered = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filter = this.state.filter;
    const contactsAfterFilter = this.contactsFiltered();

    return (
      <Container>
        <Section title="Phonebook" />
        <ContactForm formSubmit={this.onFormSubmit} />
        <Section title="Contacts" />
        <Filter filter={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={contactsAfterFilter}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}