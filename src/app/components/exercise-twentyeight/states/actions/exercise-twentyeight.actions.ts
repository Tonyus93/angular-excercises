import { createAction, props } from '@ngrx/store';

import { AppState } from '../../interfaces/state.interface';

export const formDataAction = createAction(
  '[Exercise Twentyeight] FormData',
  props<AppState>()
);