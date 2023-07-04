import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, createContact, removeContact } from "./ContactThunks";

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filteredContacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilteredContacts: (state, action) => {
      state.filteredContacts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
        state.filteredContacts = action.payload; // Оновлення filteredContacts після завантаження
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeContact.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
        state.filteredContacts = state.filteredContacts.filter(
          (contact) => contact.id !== action.payload
        ); // Оновлення filteredContacts після видалення
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: contactsActions, reducer: contactsReducer } = contactsSlice;
export const { setFilteredContacts } = contactsActions; // Експорт додаткового action
