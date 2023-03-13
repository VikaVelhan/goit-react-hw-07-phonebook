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
            <div>
              <img width={50} src={contact.avatar} alt="avatar" />
              <span>{contact.name}: </span>
              <br />
              <span>{contact.phone} </span>
            </div>

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
        <p>No data to display :(</p>
      )}
    </ul>

    /*<ul className={css.contactList}>
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
    </ul>*/

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
};

export default ContactList;
