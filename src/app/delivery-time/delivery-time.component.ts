import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
@Component({
  selector: 'app-delivery-time',
  templateUrl: './delivery-time.component.html',
  styleUrls: ['./delivery-time.component.css']
})
export class DeliveryTimeComponent {
  dummyArray:any=[];
  categoryCount=0;
  realTime:any=[];
  value:any;
constructor(private delTime:DatabaseService, private router:Router){
this.read_deltime();
}

// this block is used to arrange the categorys in the basis of delivery time
read_deltime(){
  this.delTime.read_categorys().subscribe(x=>{
    this.dummyArray=x;
    this.categoryCount=this.dummyArray.length;
    var del=[];
    var del1=[];
    for(var i=0;i< this.categoryCount;i++){
       del[i]=this.dummyArray[i].timeDel;
       del1[i]=del[i];
    }
    del=del.sort();
    for(var i=0;i< this.categoryCount;i++){
      var index=0;
      for(var j=0;j< this.categoryCount;j++){
        if(del[i]==del1[j]){
          index=del1.indexOf(del[i]);
          del1[index]="";
          this.realTime[i]=this.dummyArray[index];
          break;
        }
      }
    }
});
}

// this block is used to route to the productpage for the particular category
sendCategory(index:any){
  this.value=JSON.stringify(this.realTime[index]);
  sessionStorage.setItem('categoryDetails',this.value);
  this.router.navigateByUrl("/productPage");
}
}
