import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'Redux/selectors';

export function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
