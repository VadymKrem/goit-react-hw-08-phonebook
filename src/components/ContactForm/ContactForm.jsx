// import { useState } from 'react';

import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'Redux/selectors';
import { addContact } from 'Redux/operations';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const dataSubmitForm = event => {
    event.preventDefault();

    const formName = event.target.elements.name.value;
    const formNumber = event.target.elements.number.value;

    const searchContact = contacts.find(contact => contact.name === formName);
    if (searchContact) {
      alert(`${formName} is already in contacts`);
      return false;
    }
    // dispatch(addContact({ name, number }));
    // setName('');
    // setNumber('');
    dispatch(addContact({ name: formName, phone: formNumber }));
    // event.target.reser();
  };
  // const handleChangeName = event => setName(event.target.value);
  // const handleChangeNumber = event => setNumber(event.target.value);
  return (
    <Form onSubmit={dataSubmitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={contacts.name}
          // onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={contacts.number}
          // onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
