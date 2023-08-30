import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'Redux/selectors';
// import { createSelector } from '@reduxjs/toolkit';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  console.log(contacts);
  // const filter = useSelector(getContactsFilter);
  // const filteredContacts = useMemo(() => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(normalizedFilter, 0);
  //   });
  // }, [filter, contacts]);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
