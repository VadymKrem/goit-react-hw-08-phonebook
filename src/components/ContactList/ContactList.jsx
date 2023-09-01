import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { selectVisibleContacts } from 'Redux/selectors';
import { useSelector } from 'react-redux';

export function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
