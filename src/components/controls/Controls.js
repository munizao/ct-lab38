import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { study, takeNap, eatSnack, drinkCoffee } from '../../actions/actions';
import { getGetCount } from '../../selectors/get-get-count';
import styles from './Controls.css';

const Controls = () => {
  const actions = [
    { action: drinkCoffee, text: 'Drink Coffee', stateName: 'coffees' },
    { action: eatSnack, text: 'Snack', stateName: 'snacks' },
    { action: takeNap, text: 'Nap', stateName: 'naps' },
    { action: study, text: 'Study', stateName: 'studies' },
  ];
  const dispatch = useDispatch();
  return (
    <section className={styles.Controls}>
      {actions.map(({ action, text, stateName }) => {
        const count = useSelector(getGetCount(stateName));
        return (
          <button key={text} onClick={() => dispatch(action())}>
            {text}
            {!!count && `- ${count}`}
          </button>
        );
      })}
    </section>
  );
};

export default Controls;
