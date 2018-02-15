import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EncryptDecryptService } from '../../shared/service/encrypt-decrypt.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  usercreds = {

  }

  constructor(private fb: FormBuilder) { 
    
  }

  identityProof: any=
  {
    certicicate:""
  }

  identityProofArray: any = [{ 'key': 'Passport', 'value': 'Passport' },
  { 'key': 'AadharCard', 'value': 'AadharCard' },
  { 'key': 'DrivingLicense', 'value': 'DrivingLicense' },
  { 'key': 'VoterCard', 'value': 'VoterCard' },
  { 'key': 'PANCard', 'value': 'PANCard' }];

  ngOnInit() {
    console.log();
  }

  form: FormGroup;
  loading: boolean = false;

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    alert(this.identityProof.certicicate)
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  fileToUpload: any;

  handleFileInput(files: FileList) {
    let  file = files.item(0);
    let reader = new FileReader();
    reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
  }

  postDocs(){
    const formModel = this.form.value;
  }

}
