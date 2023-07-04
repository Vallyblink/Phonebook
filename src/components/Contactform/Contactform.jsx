import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, fetchContacts } from 'redux/contacts/ContactThunks';
import { TextField, Button, Grid } from '@mui/material';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const contacts = useSelector((state)=> state.contacts.contacts)
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 const existingContactByName = contacts.find((contact) => contact.name === name);
  const existingContactByNumber = contacts.find((contact) => contact.number === number);

  if (existingContactByName) {
    toast.warning('Contact with the same name already exists.');
    return;
  }

  if (existingContactByNumber) {
    toast.warning('Contact with the same number already exists.');
    return;
  }

  const contact = {
    name,
    number,
  };

    console.log(contact)

    dispatch(createContact(contact));
    dispatch(fetchContacts())

    // Очищення полів після відправки форми
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center"  marginTop={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={number}
            onChange={handleNumberChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
