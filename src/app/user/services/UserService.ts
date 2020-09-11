import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSource = new BehaviorSubject<any>([]);
  userList = this.userSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getUserList() {
    return this.httpClient.get('https://run.mocky.io/v3/261e0b16-770c-4647-bab5-890ac3007e3a');
  }

  getUserListService() {
    this.httpClient.get('https://run.mocky.io/v3/261e0b16-770c-4647-bab5-890ac3007e3a').subscribe((res: any) => {
      const { data } = res;
      this.userSource.next(data);
    });
  }
}
