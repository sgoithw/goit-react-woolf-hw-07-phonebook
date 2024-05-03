import style from './ContactList.module.css';
import ContactListItem from '../ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const isVisible = contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase());

  return (
    <ul className={style.contactList}>
      {contacts.filter(isVisible).map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
