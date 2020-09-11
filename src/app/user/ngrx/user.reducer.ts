import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';
import { UserModel } from '../model/UserModel';
import * as UserListActions from './user.actions';
import * as fromRoot from '../../ngrx/app.reducer';

export const usersPageFeatureKey = 'users_page';

export interface UserState {
  userList: UserModel[];
}

export interface State extends fromRoot.AppState {
  [usersPageFeatureKey]: UserState;
}

export const initialState: UserState = {
  userList: [],
};

const userListReducer = createReducer(
  initialState,
  on(UserListActions.getUserListSuccess, (state, { userList }) => ({
    ...state,
    userList
  })),
  on(UserListActions.getUserListFailure, (state, action) => ({
    ...state,
    errorMessage: action.errorMessage,
  }))
);

export function reducer(state: UserState | undefined, action: Action) {
  return userListReducer(state, action);
}
export const selecteUserState = createFeatureSelector<State, UserState>(usersPageFeatureKey);
export const selectUserListState = createSelector(selecteUserState, (state) => state.userList);
