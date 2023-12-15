import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contactform!:FormGroup;
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit():void{
    this.contactform=this.formBuilder.group({
      firstname:['',[Validators.required,Validators.pattern("^(?!.*([A-Za-z])\\1{2})[A-Z][a-zA-Z\s]{2,14}$")]],
      lastname:['',[Validators.required,Validators.pattern("^(?!.*([A-Za-z])\\1{2})[A-Z][a-zA-Z\s]{2,14}$")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.(?:co|com|ac\.in|org)$")]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      message:['',[Validators.required,Validators.pattern("^(?!.*([a-zA-Z0-9!@#$%^&*])\\1{3})[a-zA-Z][a-zA-Z0-9!@#$%^&*]{4,99}$")]],
  })
  }
  contact() {
    if (this.contactform.valid) {
      alert('Successfully sent email');
      this.contactform.reset();
    } else {
      alert('Please fill the details correctly');
    }
  }


}
