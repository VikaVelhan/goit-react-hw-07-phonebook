import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {getVisibleContacts().map(({ id, name, number, avatar }) => (
        <li className={css.contacItem} key={id}>
          <div>
            <img width={50} src={avatar} alt="avatar" />
            <span>{name}: </span>
            <br />
            <span>{number} </span>
          </div>
          <button
            className={css.buttonDelete}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>

    /*<ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contacItem} key={id}>
          {name}: {number}
          <button
            className={css.buttonDelete}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>*/
  );
}

export default ContactList;
