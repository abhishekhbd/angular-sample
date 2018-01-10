import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRouteGuard } from './auth/auth-route.guard';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { AppNavigationService } from '../layout/navigation/app-navigation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AppNavigationService
  ]

})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AppCommonModule,
        providers: [
            AuthRouteGuard
        ]
    };
}  
}
