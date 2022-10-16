import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async (_, thunkAPI) => {
    try {
    const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const isIncludes = (newName, contacts) => {
  return contacts.find(
    contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  )
};
export const addContact = createAsyncThunk(
  "contacts/addContact", async ({ name, number }, thunkAPI) => {
    const stateContacts = thunkAPI.getState().contacts.items;
    if (isIncludes(name, stateContacts)) {
      return thunkAPI.rejectWithValue(`${name} is already in contacts`);
    }

    try {
      const response = await axios.post("/contacts", { name, number });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
