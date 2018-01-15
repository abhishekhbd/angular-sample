import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthRouteGuard } from './shared/app-common/auth/auth-route.guard';
import { DashboardComponent } from './shared/layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'app',
    // component: AppComponent,
    canActivate: [AuthRouteGuard],
    canActivateChild: [AuthRouteGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent},
        ]
      },
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule', //Lazy load admin module
        data: { preload: true }, 
      },
      {
        path: 'sample',
        loadChildren: 'app/sample/sample.module#SampleModule', //Lazy load sample module
        data: { preload: true }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
