import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample/sample.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
