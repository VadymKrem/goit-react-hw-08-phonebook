import { Container } from './App.styled';

import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Container>
      <Section title="Phonebook" />
      <ContactForm />
      <Section title="Contacts" />
      <Filter />
      <ContactList />
    </Container>
  );
};
