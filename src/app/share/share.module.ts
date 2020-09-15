import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService, StoreServiceConfig } from './services/StoreService';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ShareModule {
  constructor(@Optional() @SkipSelf() parentModule?: ShareModule) {
    if (parentModule) {
      throw new Error(
        'ShareModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: StoreServiceConfig): ModuleWithProviders<ShareModule> {
    return {
      ngModule: ShareModule,
      providers: [
        { provide: StoreService, useValue: config }
      ]
    };
  }
}
