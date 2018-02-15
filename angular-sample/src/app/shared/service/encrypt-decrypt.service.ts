import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Http } from '@angular/http';

@Injectable()
export class EncryptDecryptService {

  keySize = 256;
  ivSize = 128;
  iterations = 100;

  // key will be downloaded from the server.
  privateKey = "Secret Password";

  constructor(private http: Http) {
    this.http.get("/assets/app_privatekey").subscribe(response => {
      this.privateKey = response.json()._body;
      this.privateKey = this.privateKey.replace("-----BEGIN PRIVATE KEY-----", "");
      this.privateKey = this.privateKey.replace("-----END PRIVATE KEY-----", "");
      this.privateKey =  this.privateKey.replace("\n", "");
    });

  }

  encrypt(usercreds){
    let encrypted = this.encryption(usercreds.password, this.privateKey);
    console.log("Encrypted Message " + encrypted );

    var decrypted = this.decryption(encrypted, this.privateKey);
    console.log("Decrypted " + decrypted.toString(CryptoJS.enc.Utf8));
  }

  encryption (msg, pass) {
    var salt = CryptoJS.lib.WordArray.random(128/8);
    
    var key = CryptoJS.ciphertext(pass, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var iv = CryptoJS.lib.WordArray.random(128/8);
    
    var encrypted = CryptoJS.AES.encrypt(msg, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
      
    });
    
    // salt, iv will be hex 32 in length
    // append them to the ciphertext for use  in decryption
    var transitmessage = salt.toString()+ iv.toString() + encrypted.toString();
    return transitmessage;
  }
  
  decryption (transitmessage, pass) {
    var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
    var encrypted = transitmessage.substring(64);
    
    var key = CryptoJS.ciphertext(pass, salt, {
        keySize: this.keySize/32,
        iterations: this.iterations
      });
  
    var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
      iv: iv, 
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
      
    })
    return decrypted;
  }


//  keySize = 256;
//  ivSize = 128;
//  iterations = 100;

//   constructor() { }

//   encrypt(usercreds) {

//     console.log(usercreds.username);
//     console.log(usercreds.password);
    
//     //Encrypt the Passwort with Base64
//     var key = CryptoJS.enc.Base64.parse("#base64Key#");
//     var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
    
//     //Impementing the Key and IV and encrypt the password
//     var encrypted = CryptoJS.AES.encrypt(usercreds.password, key, {
//       iv: iv,
//       padding: CryptoJS.pad.Pkcs7,
//       mode: CryptoJS.mode.CBC
//     });
//     var decrypted = CryptoJS.AES.decrypt(key, encrypted);
//     var pas = decrypted.toString(CryptoJS.enc.Utf8);
//     //Save the new Login Data
//     var secureUsercreds =
//     {
//       username: usercreds.username,
//       password: encrypted.toString()
//     };

//   }

}
