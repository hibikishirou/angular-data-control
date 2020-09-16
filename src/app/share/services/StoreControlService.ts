import { Injectable, Optional } from '@angular/core';
import { StoreService } from './StoreService';

@Injectable({ providedIn: 'root' })
export class StoreControlService {
  constructor(private storeService: StoreService) {
  }

  action(action, data?) {
    switch (action) {
      case 'GET_USER_LIST':
        return this.getStoreUserList();
      case 'SET_USER_LIST':
        return this.setStoreUserList(data);
    }
  }

  getStoreUserList() {
    return this.storeService.userList;
  }

  setStoreUserList(userList) {
    this.storeService.userList = userList;
  }
}
