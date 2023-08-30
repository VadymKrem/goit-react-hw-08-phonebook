import { useState } from 'react';

import { Form, Label, Input, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from 'Redux/selectors';
import { addContact } from 'Redux/phonebookSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);

  const dataSubmitForm = event => {
    event.preventDefault();
    const searchContact = contacts.find(contact => contact.name === name);
    if (searchContact) {
      alert(`${name} is already in contacts`);
      return false;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  const handleChangeName = event => setName(event.target.value);
  const handleChangeNumber = event => setNumber(event.target.value);
  return (
    <Form onSubmit={dataSubmitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={contacts.name}
          onChange={handleChangeName}
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
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
