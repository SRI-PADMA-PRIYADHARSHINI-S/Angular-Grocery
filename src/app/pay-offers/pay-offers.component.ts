import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-pay-offers',
  templateUrl: './pay-offers.component.html',
  styleUrls: ['./pay-offers.component.css']
})
export class PayOffersComponent {
val:any=[];
available:any=[];
unavailable:any=[];
bankOffers:any=[];
a:number=0;
u:number=0;
b:number=0;
constructor(private delTime:DatabaseService){
this.read_deltime();
}

// this block is used to split the coupons into Available and unAvailable
read_deltime(){
  this.delTime.read_Offers().subscribe((x:any)=>{
    this.val=x;
    for(var i=0;i<this.val.length;i++){
      if(this.val[i].Coupons=="Available Coupons"){
        this.available[this.a++]=this.val[i];
      }
      else if(this.val[i].Coupons=="Bank Offers"){
        this.bankOffers[this.b++]=this.val[i];
      }
      else{
        this.unavailable[this.u++]=this.val[i];
      }
    }
  });
}


}
