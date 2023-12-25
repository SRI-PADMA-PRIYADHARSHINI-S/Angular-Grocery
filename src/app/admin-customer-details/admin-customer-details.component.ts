import { Component } from '@angular/core';
import { AdminDatasService } from '../admin-datas.service';

@Component({
  selector: 'app-admin-customer-details',
  templateUrl: './admin-customer-details.component.html',
  styleUrls: ['./admin-customer-details.component.css']
})
export class AdminCustomerDetailsComponent {
  customerDetails:any=[];
  deliveredOrderDetails:any=[];
  isShowDeliveredOrders:boolean=false;
  isShowPendingOrders:boolean=false;
  isShowOrderDetails:boolean=false;
  isShowAddress:boolean=false;
  pendingOrderDetails:any=[];
  deliveredOrders:any=[];
  showOrderDetail:any=[];
  pendingOrders:any=[];
  showAddressDetail:any=[];
  constructor(private Admin:AdminDatasService){

    this.Admin.fetchCustomers().subscribe(customers=>{
      this.customerDetails=customers;

      for(var i=0;i<this.customerDetails.length;i++){
        if(this.customerDetails[i].deliveredOrders == undefined && this.customerDetails[i].Orders == undefined){
          this.deliveredOrders[i]=0;
          this.pendingOrders[i]=0;
        }
        else if(this.customerDetails[i].deliveredOrders == undefined && this.customerDetails[i].Orders != undefined){
          this.deliveredOrders[i]=0;
          this.pendingOrders[i]=this.customerDetails[i].Orders.length;
        }
        else if(this.customerDetails[i].deliveredOrders != undefined && this.customerDetails[i].Orders == undefined){
          this.deliveredOrders[i]=this.customerDetails[i].deliveredOrders.length;
          this.pendingOrders[i]=0;
        }
        else{
          this.deliveredOrders[i] = this.customerDetails[i].deliveredOrders.length;
          this.pendingOrders[i] = this.customerDetails[i].Orders.length;
        }
      }

    })

  }

  showDeliveredOrders(index:any){
    if(this.isShowDeliveredOrders==false){
      this.isShowDeliveredOrders=true;
      this.deliveredOrderDetails=this.customerDetails[index].deliveredOrders;
    }else{
      this.isShowDeliveredOrders=false;
    }

  }

  showOrderDetails(index:any){
    if(this.isShowOrderDetails==false){
      this.isShowOrderDetails=true;
      this.showOrderDetail=this.deliveredOrderDetails[index];
    }else{
      this.isShowOrderDetails=false;
    }
  }

  showPendingOrders(index:any){
    if(this.isShowPendingOrders==false){
      this.isShowPendingOrders=true;
      this.pendingOrderDetails=this.customerDetails[index].Orders;
    }else{
      this.isShowPendingOrders=false;
    }

  }
  showPendingOrderDetails(index:any){
    if(this.isShowOrderDetails==false){
      this.isShowOrderDetails=true;
      this.showOrderDetail=this.pendingOrderDetails[index];
    }else{
      this.isShowOrderDetails=false;
    }
  }

  showAddress(index:any){
    if(this.isShowAddress==false){
      this.isShowAddress=true;
      this.showAddressDetail=this.customerDetails[index].Address;
      console.log(this.showAddressDetail);
    }else{
      this.isShowAddress=false;
    }
  }

}
