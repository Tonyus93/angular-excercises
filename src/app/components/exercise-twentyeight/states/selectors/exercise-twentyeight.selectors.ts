import { createSelector } from '@ngrx/store';

import { AppState } from '../../interfaces/state.interface';
 
export const formDataFeature = (state: AppState) => state;
 
export const getFormDataSelector = createSelector(
  formDataFeature,
  (state: AppState) => {state.name, state.age}
);