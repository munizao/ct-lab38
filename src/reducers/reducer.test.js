import { drinkCoffee, eatSnack, takeNap, study } from '../actions/actions';
import { reducer, initialState } from './reducer';

// let state;
// let dispatch;
// beforeEach(() => {
//   const arr = useReducer(reducer, initialState);
//   state = arr[0];
//   dispatch = arr[1];
//   console.log(arr);
// });

describe('Reducer module', () => {
  it('increments coffee on drinkCoffee', () => {
    const newState = reducer(initialState, drinkCoffee());
    expect(newState).toEqual({
      coffees: 1,
      snacks: 0,
      naps: 0,
      studies: 0
    });
  });

  it('increments coffee on drinkCoffee', () => {
    const newState = reducer(initialState, eatSnack());
    expect(newState).toEqual({
      coffees: 0,
      snacks: 1,
      naps: 0,
      studies: 0
    });
  });

  it('increments naps on takeNap', () => {
    const newState = reducer(initialState, takeNap());
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 1,
      studies: 0
    });
  });

  it('increments studies on study', () => {
    const newState = reducer(initialState, study());
    expect(newState).toEqual({
      coffees: 0,
      snacks: 0,
      naps: 0,
      studies: 1
    });
  });
});
