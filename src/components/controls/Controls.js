import React from 'react';
import { study, takeNap, eatSnack, drinkCoffee } from '../../actions/actions';
import styles from './Controls.css';
import Button from './Button';



const Controls = () => {
  const actionObjs = [
    { action: drinkCoffee, text: 'Drink Coffee', stateName: 'coffees' },
    { action: eatSnack, text: 'Snack', stateName: 'snacks' },
    { action: takeNap, text: 'Nap', stateName: 'naps' },
    { action: study, text: 'Study', stateName: 'studies' },
  ];
  return (
    <section className={styles.Controls}>
      {actionObjs.map((actionObj) => {
        return (
          <Button key={actionObj.text} actionObj={actionObj} />
        );
      })}
    </section>
  );
};

export default Controls;
