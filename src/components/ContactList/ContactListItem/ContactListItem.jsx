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
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};