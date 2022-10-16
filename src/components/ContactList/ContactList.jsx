import styles from './ContactList.module.css';
import { Notification } from 'components/Notification/Notification';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const { wrapper, text, button } = styles;

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(c => c.name.toLowerCase().includes(filter));
  }, [contacts, filter]);

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <ul className={wrapper}>
          {filteredContacts.map(contact => {
            return (
              <li className={text} key={nanoid()}>
                <span>
                  {`${contact.name}:
               ${contact.phone}`}
                </span>
                <button
                  type="button"
                  className={button}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification message="Your phonebook is empty" />
      )}
    </>
  );
};

export default ContactList;
