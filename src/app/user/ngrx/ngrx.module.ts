import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { UserListEffects } from './user.effects';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    StoreModule.forFeature(
      fromUser.usersPageFeatureKey,
      fromUser.reducer
    ),
    EffectsModule.forFeature([
      UserListEffects
    ])
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class StoreNgrxModule { }
