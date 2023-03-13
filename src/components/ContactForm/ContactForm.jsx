import css from './ContactForm.module.css';

//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selector';
import Notiflix from 'notiflix';

export default function ContactForm() {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target.elements;
    if (
      allContacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          form.name.value.toLowerCase().trim()
      )
    ) {
      Notiflix.Notify.warning(`Contact ${form.name.value} already exist`);
      evt.currentTarget.reset();
    } else {
      dispatch(addContact({ name: form.name.value, phone: form.number.value }));
      evt.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
}
