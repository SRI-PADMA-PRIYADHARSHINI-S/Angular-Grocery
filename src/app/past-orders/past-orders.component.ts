import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css']
})
export class PastOrdersComponent {
  customerDetails:any=[];
  pastOrderDetails:any=[];
  categoryDetails:any=[];
  setCategoryDetails:any=[];
  itemsArray:any=[];

  isViewDetails:boolean=false;
  isPaymentButton:boolean=false;
  isDeliverTime:boolean=true;


  viewDetailsInfo:any=[];
  isEmpty:boolean=false;

  constructor(private PastOrder:DatabaseService, private router:Router){
// get details about past orders
    this.PastOrder.sendOrders().subscribe(x=>{
      this.customerDetails=x;
      this.pastOrderDetails=this.customerDetails.Orders

      if(this.pastOrderDetails.length==0){
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

        if(this.pastOrderDetails[indexNumber].categoryName==this.categoryDetails[i].categoryname){
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

  this.viewDetailsInfo=this.pastOrderDetails[indexNumber];

  console.log(this.viewDetailsInfo);
}

// this is block is show the reorder details of the order
reOrder(indexNumber:any){
    this.PastOrder.read_categorys().subscribe(x=>{
      this.categoryDetails=x;
      for(var i=0;i<this.categoryDetails.length;i++){
        if(this.pastOrderDetails[indexNumber].categoryName==this.categoryDetails[i].categoryname){
          this.setCategoryDetails=JSON.stringify(this.categoryDetails[i]);
          sessionStorage.setItem('cartCategoryDetails',this.setCategoryDetails);
          this.PastOrder.getAddToCart(this.pastOrderDetails[indexNumber].orderedItems);
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
