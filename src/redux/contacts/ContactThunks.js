import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContact, addContact, deleteContact } from "api/auth";


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const data = await getContact();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/create',
  async (contact) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (contactId) => {
    try {
      await deleteContact(contactId);
      return contactId;
    } catch (error) {
      throw new Error(error);
    }
  }
);
