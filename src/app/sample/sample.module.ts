import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
