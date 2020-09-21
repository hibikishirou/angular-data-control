import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    username: new FormControl('')
  });

  @Output()
  returnSearchData = new EventEmitter<any>();

  constructor(
    private parent: UserComponent
  ) { }

  ngOnInit(): void {
    console.log(this.parent);
  }

  getSearchData(): any {
    return this.searchForm.getRawValue();
  }

  search(): void {
    const searchData = this.getSearchData();
    this.returnSearchData.emit(searchData);
  }
}
