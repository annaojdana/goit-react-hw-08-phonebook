import styles from './Filter.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';

const Filter = () => {
  const { field, text, input } = styles;

  const dispatch = useDispatch();

  const filterValue = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <div className={field}>
      <p className={text}>Find contact by name</p>
      <input className={input} type="text" onChange={filterValue} />
    </div>
  );
};

export default Filter;
