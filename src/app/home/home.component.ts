import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { OrderDeliveredService } from '../order-delivered.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// -------------------------------- Routing Modules--------------------

Relevance:string="";
rating:string="rating";
Delivery_Time:string="Delivery_Time";
low_to_high:string="low_to_high";
high_to_low:string="high_to_low";
filter:string="filter";

// ---------------------------------------------------------------------

categoryArray:any=[];
categoryCount=0;
slideImageUrl:string[];
slideImage="https://www.sigmatest.org/wp-content/uploads/2019/08/organic-food-in-ahmedabad.jpg";
countingVariable=0;

emptyArray:any=[];

productArray:any=[];
setAddtoCart:any=[];
constructor(private category:DatabaseService, private ordered:OrderDeliveredService){
  this.slideImageUrl=["https://cdn.modernbazaar.online/assets/uploads/category/compress/Subcat_banner_fruits_Vegetable_low.jpg","https://nammorganic.wpengine.com/wp-content/uploads/2023/02/pop-vid-3.jpg"
,"https://www.farmizen.com/wp-content/uploads/2022/02/3.png","https://nammorganic.wpengine.com/wp-content/uploads/2023/02/pop-vid-2.jpg"];
//https://www.farmizen.com/wp-content/uploads/2022/03/Subscriptions.jpg
// set the dish  array as empty after login
this.productArray=sessionStorage.getItem('products');
if(this.productArray=="undefined"){
  this.productArray=[];
  this.setAddtoCart=JSON.stringify(this.productArray);
  sessionStorage.setItem('products',this.setAddtoCart);
}
this.CategoryList();
}

// this block is used to find the number of categorys
CategoryList(){
  this.category.read_categorys().subscribe(x=>{
    this.categoryArray=x;
    this.categoryCount=this.categoryArray.length;
  })
}

// this block is used for slide show
SlideImages(ind:number){
  this.slideImage=this.slideImageUrl[ind];
  this.countingVariable=ind;
}


ngOnInit(){
  // this block is to initate the silde show
  setInterval(()=>{
    if(this.countingVariable==-1){
      this.countingVariable;
    }
    else if(this.countingVariable==4){
      this.countingVariable=0;
    }
    this.slideImage=this.slideImageUrl[this.countingVariable++];
    },3000)
}

}
