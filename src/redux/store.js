import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import filterReducer from './slices/filterSlice';
import authReducer from './slices/auth/authSlice'
import { baseApi } from 'services/baseApi';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware, baseApi.middleware),
  devTools: true,
});

export default store;
