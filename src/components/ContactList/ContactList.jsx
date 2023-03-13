import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filtredContacts } from 'redux/selector';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(filtredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {contacts.length !== 0 ? (
        contacts.map(contact => (
          <li className={css.contacItem} key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.phone} </span>
            <button
              className={css.buttonDelete}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>No data to display...</p>
      )}
    </ul>
  );
};

export default ContactList;
