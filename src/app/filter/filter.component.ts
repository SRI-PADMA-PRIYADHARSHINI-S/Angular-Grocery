import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  exit:boolean=true;
  link:string="";
  first:any=[];
  variety:any=[];
  varietyProducts:any=[];
  indexarray:any=[];
  count:number=0;
  s:number=0;
  i:number=0;
  constructor(private filter:DatabaseService, private router:Router){
    // get details of about variety of dishes
    this.variety=this.filter.send_variety();
  }

  // this block is used to display variety details
  varietyName(index:any){
    if(!this.indexarray.includes(index)){
      this.indexarray[this.i++]=index;
    }
    else{
      var ind=this.indexarray.indexOf(index);
      this.indexarray.splice(ind,1);
      this.i-=1;
    }

    var size=this.indexarray.length;

    if(size==1){
      this.varietyProducts=this.variety[this.indexarray[0]];
    }
    else{
      this.varietyProducts=[];
      for(var i=0;i< size;i++){
        this.varietyProducts[i]=this.variety[this.indexarray[i]];
      }
    }

    this.filter.getFilter(this.varietyProducts);
  }

  // this block is route to home component
  home(){
    this.router.navigateByUrl("");
  }
}
