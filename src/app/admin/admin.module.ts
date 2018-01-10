import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { AppCommonModule } from '../shared/app-common/app-common.module';
import { AuthRouteGuard } from '../shared/app-common/auth/auth-route.guard';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [UserComponent]
})
export class AdminModule { }
