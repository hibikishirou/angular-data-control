import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from 'protractor';

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
  returnSearchData: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getSearchData(): any {
    return this.searchForm.getRawValue();
  }

  search(): void {
    this.returnSearchData.emit(this.getSearchData());
  }
}
