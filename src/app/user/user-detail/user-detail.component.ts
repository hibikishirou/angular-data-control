import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/share/services/StoreService';
import { UserService } from '../services/UserService';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService, private storeService: StoreService) { }

  ngOnInit(): void {
    const userList = this.storeService.userList;
    console.log('Store data:', userList);
    this.userService.userList.subscribe((list) => {
      console.log('Service data:', list);
    });
  }

}
