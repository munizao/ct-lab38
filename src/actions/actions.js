import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../constants/action-types';

export const drinkCoffee = () => ({
  type: DRINK_COFFEE,
});

export const eatSnack = () => ({
  type: EAT_SNACK,
});

export const takeNap = () => ({
  type: TAKE_NAP,
});

export const study = () => ({
  type: STUDY,
});
