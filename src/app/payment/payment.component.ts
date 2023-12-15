import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {


  customerDetails:any=[];
  cardDetails:any=[];
  cardTypeImage:any;
  constructor(private payment:DatabaseService){

// get details about registered bank card
    this.payment.sendOrders().subscribe(x=>{

      this.customerDetails=x;
      this.cardDetails=this.customerDetails.PaymentCradDetails

      if(this.cardDetails.cardType=="visa"){
        this.cardTypeImage="./assets/VisaLogo.png";
      }
      else{
        this.cardTypeImage="./assets/MasterCardLogo.png";
      }
      console.log(this.cardDetails);
    });
  }
}
