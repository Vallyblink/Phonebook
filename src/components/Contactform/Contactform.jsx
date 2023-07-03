import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormFormik from './FormFormik';

import { toast } from 'react-toastify';
import { createContact } from 'redux/contacts/ContactThunks';

export default function ContactForm() {
  const contacts = useSelector(state => state.contacts.contacts); // Оновлено
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    const normalizedContact = newContact.name.toLowerCase().trim();
    const normalizedNumber = newContact.number.replaceAll(' ', '');

    if (
      contacts.some(el => el.name.toLowerCase().trim() === normalizedContact)
    ) {
      toast.warning(
        `The contact name ${normalizedContact} already exists!`
      );
      return;
    }

    if (
      contacts.some(el => el.number.replaceAll(' ', '') === normalizedNumber)
    ) {
      toast.warning(
        `The contact number ${normalizedNumber} already exists!`
      );
      return;
    }

    dispatch(createContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormFormik onSubmit={handleFormSubmit} />
    </>
  );
}
