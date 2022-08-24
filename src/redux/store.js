import { configureStore } from '@reduxjs/toolkit';
import { myContactsSlice } from './slice';

export const { increment, decrement } = myContactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: myContactsSlice.reducer,
  },
});
