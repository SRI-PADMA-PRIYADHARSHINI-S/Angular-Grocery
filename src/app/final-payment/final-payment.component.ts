import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-payment',
  templateUrl: './final-payment.component.html',
  styleUrls: ['./final-payment.component.css']
})
export class FinalPaymentComponent {

  Walletbgcolor:string="white";
  Cardbgcolor:string="";
  UPIbgcolor:string="";


  Walletcolor:string="black";
  Cardcolor:string="";
  UPIcolor:string="";



  constructor(private router:Router){

  }



  Wallets(){
    this.Walletbgcolor="white";
    this.Cardbgcolor="";
    this.Cardcolor="";
    this.Walletcolor="black";
    this.UPIbgcolor="";
    this.UPIcolor="";

  }

  Cards(){
    this.Cardbgcolor="white";
    this.Walletbgcolor="";
    this.Cardcolor="black";
    this.Walletcolor="";
    this.UPIbgcolor="";
    this.UPIcolor="";
  }

  UPI(){
    this.Cardbgcolor="";
    this.Walletbgcolor="";
    this.Cardcolor="";
    this.Walletcolor="";
    this.UPIbgcolor="white";
    this.UPIcolor="black";
  }

}
