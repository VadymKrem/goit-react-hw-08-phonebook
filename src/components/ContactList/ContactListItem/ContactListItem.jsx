import { Contact, ButtonDel } from './ContactListItem.styled';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact key={id}>
      <p>
        {name}: {number}
      </p>
      <ButtonDel onClick={() => onDelete(id)}>Delete</ButtonDel>
    </Contact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};