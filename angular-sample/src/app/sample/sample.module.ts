import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample/sample.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MzSelectModule, MaterializeModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    SampleRoutingModule, 
    ReactiveFormsModule,
    MzSelectModule,
    MaterializeModule.forRoot(),
  ],
  declarations: [SampleComponent]
})
export class SampleModule { }
