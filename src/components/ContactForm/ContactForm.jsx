import styles from './ContactForm.module.css';
import { Button } from 'components/Button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';

const ContactForm = () => {
  const { form, form__field, label, input } = styles;

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const values = {
      name: form.name.value,
      number: form.number.value,
    };

    dispatch(addContact(values));

    form.reset();
  };

  return (
    <form className={form} onSubmit={onSubmit}>
      <div className={form__field}>
        <label htmlFor="contactName" className={label}>
          Name
        </label>
        <input
          className={input}
          id="contactName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={form__field}>
        <label htmlFor="contactTel" className={label}>
          Phone number
        </label>
        <input
          className={input}
          id="contactTel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit" title="Add contact"></Button>
    </form>
  );
};

export default ContactForm;
