import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://649b68d9bf7c145d023a48c2.mockapi.io/api";

export const fetchTasks = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
    
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (value, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", { value });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/tasks/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.push(action.payload);
//     },
//     removeContact: (state, action) => {
//       return state.filter((contact) => contact.id !== action.payload);
//     },
//     selectContact: (state, action) => {
//       state.selectedContact = action.payload;
//     },
//     loadContacts: (state, action) => {
//       state = action.payload;
//     },
//   },
// });

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/tasks");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };