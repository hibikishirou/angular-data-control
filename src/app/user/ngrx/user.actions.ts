import { createAction, props } from '@ngrx/store';

// Load Business-lines
export const getUserList = createAction('[Stores Page] Get User List');
export const getUserListSuccess = createAction(
  '[Stores/API] Get User List Success',
  props<{ userList: any }>()
);

export const getUserListFailure = createAction(
  '[Stores/API] Get User List Failure',
  props<{ errorMessage: any }>()
);
