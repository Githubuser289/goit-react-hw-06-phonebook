import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ submitCallback }) {
  return (
    <form className={styles.form} onSubmit={submitCallback}>
      <div>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+((['\-][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
      </div>

      <div>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  submitCallback: PropTypes.func.isRequired,
};

export default ContactForm;
