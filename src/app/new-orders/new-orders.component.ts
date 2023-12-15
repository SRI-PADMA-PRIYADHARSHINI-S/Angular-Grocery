import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.css']
})
export class NewOrdersComponent {
  customerDetails:any=[];
  newOrderDetails:any=[];
  categoryDetails:any=[];
  setCategoryDetails:any=[];
  itemsArray:any=[];

  isViewDetails:boolean=false;
  isPaymentButton:boolean=false;


  viewDetailsInfo:any=[];
  isEmpty:boolean=false;

  constructor(private PastOrder:DatabaseService, private router:Router){
// get details about past orders
    this.PastOrder.sendOrders().subscribe(x=>{
      this.customerDetails=x;
      this.newOrderDetails=this.customerDetails.paymentOrderedDetails
      if(this.newOrderDetails.length==0){
        this.isEmpty=true;
      }
    });
  }

  // this block is used to route the product component for the particular category
  categoryRoute(indexNumber:any){
    this.PastOrder.read_categorys().subscribe(x=>{
      this.categoryDetails=x;
      for(var i=0;i<this.categoryDetails.length;i++){

        console.log(this.categoryDetails[i].categoryname);

        if(this.newOrderDetails[indexNumber].categoryName==this.categoryDetails[i].categoryname){
          this.setCategoryDetails=JSON.stringify(this.categoryDetails[i]);
          sessionStorage.setItem('categoryDetails',this.setCategoryDetails);
          this.router.navigateByUrl("productPage");
          break;
        }
      }

    });

  }


// this block is  show the details of the order
ViewDetails(indexNumber:any){
  this.isViewDetails=true;
  this.isPaymentButton=false;

  this.viewDetailsInfo=this.newOrderDetails[indexNumber];

  console.log(this.viewDetailsInfo);
}


// this block is close the order details ui
close(){
  this.isViewDetails=false;
}
OrderCancel(indexNumber:any){
  this.PastOrder.cancelOrder(indexNumber);

  setTimeout(()=>{
    window.location.reload();
  },1000)
}
}
