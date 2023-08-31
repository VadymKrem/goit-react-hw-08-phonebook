import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handleOnPending = state => {
  state.isLoading = true;
};

const handleOnRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handleOnPending,
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: handleOnRejected,

    [addContact.pending]: handleOnPending,
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: handleOnRejected,

    [deleteContact.pending]: handleOnPending,
    [deleteContact.fulfilled](state, action) {
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: handleOnRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
