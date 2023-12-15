import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { OrderDeliveredService } from '../order-delivered.service';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UPIComponent {
cartTotalPrice:any;

UPIArray:any=[];

constructor(private upi:DatabaseService, private ordered:OrderDeliveredService,private router:Router){
  this.cartTotalPrice=sessionStorage.getItem("TotalCartPrice");


  this.upi.UPI().subscribe(x=>{
    this.UPIArray=x;
  })
}
// this block is used to send the paymenttype of UPI
SendPaymentUPI(paymentMethod:any){
  this.upi.paymentOrdered("UPI");

  this.router.navigateByUrl("");

}

//this block is used to send the paymenttype of Cash on delivery
SendPaymentCashOnDelivery(){
  this.upi.paymentOrdered("Cash On Delivery");
  this.router.navigateByUrl("");
}
}
