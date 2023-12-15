import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  categoryName:string="";
  cuisines=["./assets/images/apple.jpg","assets/images/ginger.jpg","assets/images/orange.jpg",
"assets/images/lady-finger.jpg","assets/images/Pomegranate.jpg","assets/images/spinch1.jpeg"];

categoryNameArray:any=[];
data:any=[];
value:any;
array:any=[];
array2:any=[];
finalArray:any=[];
originalArray:any=[];
logged:boolean=false;
category:FormGroup;
issearched:boolean=true;
iscategoryName:boolean=false;
isfound:boolean=false;
x:number=0;

getSearchArray:any;
setSearchArray:any=[];

getCategorys:any=[];
getCategory1:any;
getCategory2:any;

constructor(private search:DatabaseService ,hn:FormBuilder, private router:Router){

// chech the user is login or not
  if(sessionStorage.getItem('isentered')=="true"){
  this.data=this.search.send_search();
  }

  this.search.read_categorys().subscribe((x)=>{
    this.array=x;
 });


  const time = setInterval(()=>{
    this.logged=this.search.islogged;
  },3000);

  this.category= hn.group({
    categoryname:new FormControl([Validators.required])
  })

  this.category.valueChanges.subscribe(x=>{
    if(x.categoryname!=''){
      this.searchCategory(x.categoryname);
    }
    else{
      this.issearched=true;
      this.iscategoryName=false;
    }
  })
}
// this block is used to search the categorys
searchCategory(Hname:string){
  this.issearched=false;
  this.iscategoryName=true;
  var s=0;
  this.array2=[];
  for(var i=0; i< this.array.length; i++){
    this.originalArray[i]=this.array[i].categoryname;
  }
  for(var i=0; i< this.array.length; i++){
    var str=this.originalArray[i].toLowerCase();
    var str1=Hname.toLowerCase();
   if(str.includes(str1)){
   this.array2[s++]=this.array[i];
   }
  }
  if(this.array2.length==0){
    this.isfound=true;
  }
  else{
    this.isfound=false;
  }
  this.finalArray=new Set(this.array2);
}
// this block is used to send the categorydetails
sendCategory(index:any){
  this.value=JSON.stringify(this.array2[index]);
  sessionStorage.setItem('categoryDetails',this.value);
  if(this.data==undefined || this.data.length==5){
    var ind=0;
    this.categoryNameArray[ind]=this.array2[index].categoryname;
  }
  else{
    this.categoryNameArray=this.data;
    this.categoryNameArray[this.data.length]=this.array2[index].categoryname;
  }

  if(sessionStorage.getItem('isentered')=="true"){
    this.search.get_search(this.categoryNameArray).subscribe(x=>{
      console.log(x);
    });
    this.router.navigateByUrl("/productPage");
  }
  else{
    this.router.navigateByUrl("/productPage");
  }

}


clear(){
  window.location.reload();
}

// this block is used to route product component for the particular category
categoryRoute(ind:any){
  this.getCategorys=this.search.read_categorys().subscribe(x=>{
    this.getCategory1=x;
    for(var i=0;i<this.getCategory1.length;i++){
      if(this.getCategory1[i].categoryname == this.data[ind]){
        console.log(this.getCategory1[i]);
        this.getCategory2=JSON.stringify(this.getCategory1[i]);
        sessionStorage.setItem('categoryDetails',this.getCategory2);
        this.router.navigateByUrl("/productPage");
      }
    }

  });

}
}
