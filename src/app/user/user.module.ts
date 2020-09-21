import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreNgrxModule } from './ngrx/ngrx.module';
import { UserService } from './services/UserService';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'detail',
    component: UserDetailComponent
  }
];

@NgModule({
  declarations: [UserComponent, UserListComponent, UserSearchComponent, UserDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    StoreNgrxModule,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [
  ]
})
export class UserModule { }
