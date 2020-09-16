import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.reducer';
import * as fromUserList from '../ngrx/user.reducer';
import * as LoadUserListActions from '../ngrx/user.actions';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/share/services/StoreService';
import { UserService } from '../services/UserService';
import { StoreControlService } from 'src/app/share/services/StoreControlService';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  dataSource;
  displayedColumns = [
    'id',
    'username',
    'description'
  ];
  userPage$;
  count = 0;
  constructor(
    private store: Store<AppState>,
    private userService: UserService,
    private storeService: StoreService,
    private storeControlService: StoreControlService,
    private router: Router
  ) {
    // this.userPage$ = this.store.pipe(select(fromUserList.selectUserListState));
  }

  ngOnInit(): void {
    // this.store.dispatch(LoadUserListActions.getUserList());
    this.userService.getUserListService();
    this.initGrid();
  }

  initGrid() {
    // this.userPage$.subscribe((userList) => {
    //   console.log(userList);
    //   if (userList) {
    //     this.dataSource = userList;
    //   }
    // });
    this.userService.userList.subscribe((userList) => {
      if (userList) {
        this.dataSource = userList;
        this.storeControlService.action('SET_USER_LIST', userList);
      }
    });
  }

  viewTask(user) {
    this.router.navigateByUrl('task', { state: { user } });
  }
  viewDetail(user) {
    this.router.navigateByUrl('detail', { state: { user } });
  }
}
