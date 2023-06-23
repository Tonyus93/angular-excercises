import { createReducer, on } from '@ngrx/store';

import { formDataAction } from '../actions/exercise-twentyeight.actions';
import { AppState } from '../../interfaces/state.interface';

export const initialState: AppState = {
  name: '',
  age: 0
};

export const formDataReducer = createReducer(
  initialState,
  on(formDataAction, (state, value) => ({ ...state, name: value.name, age: value.age })),
);
