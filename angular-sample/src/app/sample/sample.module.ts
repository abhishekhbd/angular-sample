import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample/sample.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MzSelectModule, MaterializeModule } from 'ng2-materialize';
import { EncryptDecryptService } from '../shared/service/encrypt-decrypt.service';
import { CryptoComponent } from './crypto/crypto.component';
import { Http, HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SampleRoutingModule, 
    ReactiveFormsModule,
    MzSelectModule,
    HttpModule,
    MaterializeModule.forRoot(),
  ],
  declarations: [SampleComponent, CryptoComponent],
  providers: [EncryptDecryptService]
})
export class SampleModule { }
