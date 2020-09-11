import { ActionReducerMap } from '@ngrx/store';

import * as userListReducer from '../user/ngrx/user.reducer';

export interface AppState {
  userList: userListReducer.UserState;
}

export const AppReducers: ActionReducerMap<AppState> = {
  userList: userListReducer.reducer
};
