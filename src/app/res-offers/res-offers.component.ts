import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-res-offers',
  templateUrl: './res-offers.component.html',
  styleUrls: ['./res-offers.component.css']
})
export class ResOffersComponent {
  dummyArray:any=[];
  categoryCount=0;
  realTime:any=[];
  value:any=[];
constructor(private delTime:DatabaseService, private router:Router){
this.read_deltime();
}

// this block is used to arrange the category basis on offers
read_deltime(){
  this.delTime.read_categorys().subscribe(x=>{
    this.dummyArray=x;
    this.categoryCount=this.dummyArray.length;
    var del=[];
    var del1=[];
    for(var i=0;i< this.categoryCount;i++){
       del[i]=this.dummyArray[i].offer;
       del1[i]=del[i];
    }
    for(var i=0;i< this.categoryCount;i++){
      for(var j=0;j< this.categoryCount;j++){
        if(del[i]==""){
          del[i]="cleared";
        }
      }
    }
    console.log(del);
    var m=0;
    for(var i=0;i< this.categoryCount;i++){
      var index=0;
      for(var j=0;j< this.categoryCount;j++){
        if(del[i]==del1[i]){
          index=del1.indexOf(del[i]);
          del1[index]="";
          this.realTime[m++]=this.dummyArray[index];
          break;
        }
      }
    }
});
}
// this block is used for route the product component for the particular category
sendCategory(index:any){
  this.value=JSON.stringify(this.realTime[index]);
  sessionStorage.setItem('categoryDetails',this.value);
  this.router.navigateByUrl("/productPage");
}
}
