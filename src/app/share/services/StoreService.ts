import { Injectable, Optional } from '@angular/core';

export class StoreServiceConfig {
  _userList?;
}
@Injectable({ providedIn: 'root' })
export class StoreService {
  private _userList = [];

  constructor(@Optional() config: StoreServiceConfig) {
    if (config) {
      this._userList = config._userList;
    }
  }

  get userList() {
    return this._userList;
  }

  set userList(userList) {
    this._userList = userList;
  }
}
