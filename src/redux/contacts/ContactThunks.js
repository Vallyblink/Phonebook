import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContact, addContact, deleteContact } from "api/auth";


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getContact();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/create',
  async (contact, {rejectWithValue}) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
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
