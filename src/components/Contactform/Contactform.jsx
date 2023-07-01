import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import FormFormik from './FormFormik';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, { resetForm }) => {
    const { name, number } = values;
    const response = await fetch('https://649b68d9bf7c145d023a48c2.mockapi.io/api/contacts');
    const data = await response.json();

    const existingContact = data.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      alert('Hey Dude, you already have it');
      return;
    }

    const newContact = { name, number };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <>
      <FormFormik onSubmit={handleFormSubmit} />
    </>
  );
}