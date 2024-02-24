import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ changeCallback }) {
  return (
    <div className={styles.div}>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={changeCallback} required />
    </div>
  );
}

Filter.propTypes = {
  changeCallback: PropTypes.func.isRequired,
};

export default Filter;
