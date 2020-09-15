import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../share/services/StoreService';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  data: any;
  constructor(private location: Location, private storeService: StoreService) { }

  ngOnInit(): void {
    this.data = this.location.getState();
    const userList = this.storeService.userList;
    console.log(userList);
  }

}
