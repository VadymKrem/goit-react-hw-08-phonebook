import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'Redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContactsList);
  const filter = useSelector(getContactsFilter);
  const filteredContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };
