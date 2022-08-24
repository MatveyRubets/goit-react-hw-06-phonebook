import { createSlice } from '@reduxjs/toolkit';

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    contacts: {
      items: [],
    },
    addContact(state, action) {
      return state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = myContactsSlice.actions;
