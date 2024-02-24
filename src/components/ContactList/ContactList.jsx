import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList(props) {
  let list = props.listToRender;
  return (
    <ul>
      {list.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className={styles.delete}
            onClick={props.deleteCallback}
            id={contact.id}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  listToRender: PropTypes.array.isRequired,
  deleteCallback: PropTypes.func.isRequired,
};

export default ContactList;
