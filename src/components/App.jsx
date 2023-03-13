import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import Section from '..//components/Section/Section';
import Loader from './Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        width: '70vh',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Section title="Phonebook"></Section>
      <ContactForm />

      <Section title="Contacts"></Section>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};
