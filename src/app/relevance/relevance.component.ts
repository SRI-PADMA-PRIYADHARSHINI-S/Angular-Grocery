import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-relevance',
  templateUrl: './relevance.component.html',
  styleUrls: ['./relevance.component.css']
})
export class RelevanceComponent {

val:any=[];
value:any;
productPage="productpage";
filtercategorys:any=[];
constructor(private category:DatabaseService, private router:Router){

this.filtercategorys=this.category.sendFilter();
this.readcategorys();
}

// this block is used to arrange the categorys
readcategorys(){
  if(this.filtercategorys.length == 0){
    this.category.read_categorys().subscribe((x:any)=>{
      this.val=x;
  });
  }
  else{
    this.val=this.filtercategorys;
  }
};

// this block is used to route the dishcomponent for the paricular category
categoryList(ind:number){
  this.value=JSON.stringify(this.val[ind]);

  sessionStorage.setItem('categoryDetails',this.value);
  this.router.navigateByUrl("/productPage");
}
}
