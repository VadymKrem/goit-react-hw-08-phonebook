import { useDispatch } from 'react-redux';
import { Contact, ButtonDel } from './ContactListItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'Redux/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
  };

  return (
    <Contact key={id}>
      <p>
        {name}: {number}
      </p>
      <ButtonDel onClick={() => handleDeleteContact(id)}>Delete</ButtonDel>
    </Contact>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
