import React, { useReducer } from 'react';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { reducer, initialState } from '../reducers/reducer';
import { getFace } from '../selectors/get-face';

import { study, takeNap, eatSnack, drinkCoffee } from '../actions/actions';

const actions = [
  { action: drinkCoffee, text: 'Drink Coffee', stateName: 'coffees' },
  { action: eatSnack, text: 'Snack', stateName: 'snacks' },
  { action: takeNap, text: 'Nap', stateName: 'naps' },
  { action: study, text: 'Study', stateName: 'studies' },
];


const Moods = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
  return (
    <>
      <Controls actions={controlActions} dispatch={dispatch}/>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
