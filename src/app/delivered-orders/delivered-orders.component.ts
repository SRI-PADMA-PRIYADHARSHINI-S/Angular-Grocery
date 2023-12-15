import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.css']
})
export class DeliveredOrdersComponent {

  customerDetails:any=[];
  deliveredOrderDetails:any=[];
  categoryDetails:any=[];
  setCategoryDetails:any=[];
  itemsArray:any=[];

  isViewDetails:boolean=false;
  isPaymentButton:boolean=false;
  isDeliverTime:boolean=true;


  viewDetailsInfo:any=[];
  isEmpty:boolean=false;

  constructor(private Delivered:DatabaseService, private router:Router){

    // get details of Delivered orders of the customer
    this.Delivered.sendOrders().subscribe(x=>{
      this.customerDetails=x;
      this.deliveredOrderDetails=this.customerDetails.deliveredOrders
      if(this.deliveredOrderDetails.length==0){
        this.isEmpty=true;
      }
    });
  }

  // this block is  used to route the particular category of the order
  categoryRoute(indexNumber:any){
    this.Delivered.read_categorys().subscribe(x=>{
      this.categoryDetails=x;
      for(var i=0;i<this.categoryDetails.length;i++){

        console.log(this.categoryDetails[i].categoryname);

        if(this.deliveredOrderDetails[indexNumber].categoryName==this.categoryDetails[i].categoryname){
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
    this.isDeliverTime=true;

    this.viewDetailsInfo=this.deliveredOrderDetails[indexNumber];

    console.log(this.viewDetailsInfo);
  }

// this is block is show the reorder details of the order
  reOrder(indexNumber:any){
      this.Delivered.read_categorys().subscribe(x=>{
        this.categoryDetails=x;
        for(var i=0;i<this.categoryDetails.length;i++){
          if(this.deliveredOrderDetails[indexNumber].categoryName==this.categoryDetails[i].categoryname){
            this.setCategoryDetails=JSON.stringify(this.categoryDetails[i]);
            sessionStorage.setItem('cartCategoryDetails',this.setCategoryDetails);
            this.Delivered.getAddToCart(this.deliveredOrderDetails[indexNumber].orderedItems);
            setTimeout(()=>{
              this.router.navigateByUrl("cart");
            },1000);
          }
        }

      });

  }

  // this block is close the order details ui
  close(){
    this.isViewDetails=false;
  }

}
