import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'Redux/selectors';
import { useMemo } from 'react';
// import { createSelector } from '@reduxjs/toolkit';

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  console.log(contacts);
  const filter = useSelector(getContactsFilter);
  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
  }, [filter, contacts]);
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
