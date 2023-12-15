import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userDetails:any;

  editProfile:FormGroup;

  isEditProfile:boolean=false;

  Ordresbgcolor="white";
  Orderscolor="black";
  addressbgcolor="";
  addresscolor="";
  favoritesbgcolor="";
  favoritescolor="";
  paymentbgcolor="";
  paymentcolor="";


  constructor(private fb:FormBuilder, private edit:DatabaseService){



// get details about the customer
    this.edit.sendEditProfile().subscribe(x=>{
      this.userDetails=x;
      console.log(this.userDetails);
    });

    // validation of edit profile form
    this.editProfile=fb.group({
      editProfileUsername:['',[Validators.required,Validators.pattern("^(?!.(.).\\1)[a-zA-Z][a-zA-Z0-9_-]{3,15}$")]],
      editProfileEmail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$")]]
    });
  }

// this block is used to send the edit profile to the service
  editProfileDetails(editDetails:any){

    this.edit.editProfileDetails(editDetails);

    window.location.reload();
  }

  showEditprofile(){
    this.isEditProfile=true;
  }

  close(){
    this.isEditProfile=false;
  }

  Orders(){
  this.Ordresbgcolor="white";
  this.Orderscolor="black";
  this.addressbgcolor="";
  this.addresscolor="";
  this.favoritesbgcolor="";
  this.favoritescolor="";
  this.paymentbgcolor="";
  this.paymentcolor="";
  }
  Address(){
  this.Ordresbgcolor="";
  this.Orderscolor="";
  this.addressbgcolor="white";
  this.addresscolor="black";
  this.favoritesbgcolor="";
  this.favoritescolor="";
  this.paymentbgcolor="";
  this.paymentcolor="";
  }
  Payment(){
  this.Ordresbgcolor="";
  this.Orderscolor="";
  this.addressbgcolor="";
  this.addresscolor="";
  this.favoritesbgcolor="";
  this.favoritescolor="";
  this.paymentbgcolor="white";
  this.paymentcolor="black";
  }
  Favorites(){
  this.Ordresbgcolor="";
  this.Orderscolor="";
  this.addressbgcolor="";
  this.addresscolor="";
  this.favoritesbgcolor="white";
  this.favoritescolor="black";
  this.paymentbgcolor="";
  this.paymentcolor="";
  }
}
