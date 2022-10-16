import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async (_, thunkAPI) => {
    try {
    const {data} = await axios.get("/contacts");
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
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
      const res = await axios.post("/contacts", { name, number });
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
