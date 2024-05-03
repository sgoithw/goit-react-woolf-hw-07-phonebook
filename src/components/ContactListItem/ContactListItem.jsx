import { useDispatch } from 'react-redux';
import style from './ContactListItem.module.css';
import { removePhone } from '../../redux/phoneSlice';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(removePhone(id));
  };

  return (
    <li className={style.contactListItem}>
      {name}: {number}
      <button
        className={style.contactListItemDeleteButton}
        type="button"
        onClick={deleteContact}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;
