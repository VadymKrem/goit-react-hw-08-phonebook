import { ContactListItem } from './ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};