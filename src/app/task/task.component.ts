import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StoreControlService } from '../share/services/StoreControlService';
import { StoreService } from '../share/services/StoreService';
import { UserService } from '../user/services/UserService';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  data: any;
  constructor(
    private location: Location,
    private storeService: StoreService,
    private storeControlService: StoreControlService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.data = this.location.getState();
    const userList = this.storeService.userList;
    // console.log('Store data:', userList);
    console.log('Store data:', this.storeControlService.getStoreUserList());
    console.log('Store Data:', this.storeControlService.action('GET_USER_LIST'));
    this.userService.userList.subscribe((list) => {
      console.log('Service data:', list);
    });
  }

}
