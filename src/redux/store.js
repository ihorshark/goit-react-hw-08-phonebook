import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './phonebook/filterSlice';
import { contactsApi } from './phonebook/contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
