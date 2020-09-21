import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('userSearch') userSearch: UserSearchComponent;
  tmp = 'Temp';
  searchData = {};
  constructor() { }

  ngOnInit(): void {
  }

  handleSearchData(e) {
    console.log('on emit:', e);
    console.log('one viewchild:', this.userSearch.getSearchData());
    this.searchData = this.userSearch.getSearchData();
  }

}
