import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as GetUserListActions from './user.actions';
import { UserService } from '../services/UserService';
import { UserModel } from '../model/UserModel';
@Injectable()
export class UserListEffects {
  constructor(private userService: UserService, private actions$: Actions) { }

  $loadUserList = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUserListActions.getUserList),
      mergeMap(() => {
        return this.userService.getUserListAPI().pipe(
          map((users: any) => {
            const { data } = users;
            if (data) {
              return GetUserListActions.getUserListSuccess({ userList: data.map(user => new UserModel(user)) });
            }
          })
        );
      })
    )
  );
}
