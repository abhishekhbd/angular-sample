import { Component, OnInit } from '@angular/core';
import { EncryptDecryptService } from '../../shared/service/encrypt-decrypt.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  firstName ="";

  usercreds = {
    username:"",
    password:""
  }

  constructor(private cryptoService: EncryptDecryptService) { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.cryptoService.encrypt(this.usercreds));
  }

}
