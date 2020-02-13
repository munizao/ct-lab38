import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, dispatch }) => {
  console.log(actions);
  return (
    <section className={styles.Controls}>
      {actions.map(({ action, text, count }) => (
        <button key={text} onClick={() => dispatch(action())}>
          {text}
          {!!count && `- ${count}`}
        </button>
      ))}
    </section>
  );
};

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.func.isRequired,
    text: PropTypes.string,
    count: PropTypes.number
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Controls;
