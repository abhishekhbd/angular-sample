import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { CryptoComponent } from './crypto/crypto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sample', component: SampleComponent, data: {permission: 'Pages.Sample.Sample'}},
      {path: 'crypto', component: CryptoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
