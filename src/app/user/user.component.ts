import { Component, OnInit, ViewChild } from '@angular/core';
import { UserSearchComponent } from './user-search/user-search.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('userSearch') userSearch: UserSearchComponent;
  constructor() { }

  ngOnInit(): void {
  }

  handleSearchData(e) {
    console.log(e);
    console.log(this.userSearch.getSearchData());
  }

}
