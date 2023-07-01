import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await axios.get('https://649b68d9bf7c145d023a48c2.mockapi.io/api/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactData) => {
  const response = await axios.post('https://649b68d9bf7c145d023a48c2.mockapi.io/api/contacts', contactData);
  return response.data;
});

export const removeContact = createAsyncThunk('contacts/removeContact', async (contactId) => {
  await axios.delete(`https://649b68d9bf7c145d023a48c2.mockapi.io/api/contacts/${contactId}`);
  return contactId;
});

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    selectContact: (state, action) => {
      state.selectedContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        const contactId = action.payload;
        state.data = state.data.filter((contact) => contact.id !== contactId);
      });
  },
});

export const { selectContact } = contactsSlice.actions;

export default contactsSlice.reducer;