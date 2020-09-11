import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './app.effects';


@NgModule({
  imports: [
    StoreModule.forRoot(AppReducers, {}),
    EffectsModule.forRoot(effects)
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppStoreModule { }
