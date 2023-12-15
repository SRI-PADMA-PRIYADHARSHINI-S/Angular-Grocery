import { Component } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  value:any=[];
  productArray:any=[];
  itemArray:any=[];
  array:any=[];
  items:any;
  dummy:any;
  dummy1:any;
  ind:number=0;
  indexNumber:any;

  favorite:string="";

  getCategoryName:any=[];
  setCategoryName:any=[];

  getFavorites:any=[];
  getfavoritesCount:number=0;
  getFavoritesArray:any=[];
  getFavoriteArray:any=[];
  getFavoriteObject:any;
  sendFavoritesArray:any=[];

  checkFavorite:any=[];
  checkFavoriteArray:any=[];

  products:string="";

  islogged:any;

  frontUi:boolean=true;
  searchproduct:FormGroup;


  emptyArray:any=[];
  productNameArray:any=[];
  finalProductArray:any=[];
  isfound:boolean=false;

  sendProductArray:any;
  putsessionProductDetails:any=[];

constructor( private categoryName:DatabaseService, productSearch:FormBuilder){
  //  get details of the category and products
  this.dummy=sessionStorage.getItem('products');
  this.dummy1=JSON.parse(this.dummy);
  this.getCategoryName=sessionStorage.getItem('categoryDetails');
  this.setCategoryName=JSON.parse(this.getCategoryName);

  this.array=this.dummy1;
  if(this.array == null){
    this.ind=0;
    this.array=[];
  }

  // store the added product items in json after login
  this.islogged=sessionStorage.getItem('isentered');
  if(this.islogged=="true"){
    this.categoryName.sendFavorite().subscribe(x=>{
      this.checkFavorite=x;
      this.checkFavoriteArray=this.checkFavorite.Favorites;
      this.getCategoryName=sessionStorage.getItem('categoryDetails');
      this.setCategoryName=JSON.parse(this.getCategoryName);
      if(this.checkFavoriteArray.length==1){
        if(this.checkFavoriteArray[0].categoryname===this.setCategoryName.categoryname){
          this.favorite="red";
        }
        else{
          this.favorite="";
        }
      }
      else{
        for(var i=0;i<this.checkFavoriteArray.length;i++){
          if(this.checkFavoriteArray[i].categoryname===this.setCategoryName.categoryname){
            this.favorite="red";
            break;
          }
          else{
            this.favorite="";
          }
        }
      }
    });


  }

  // searchbar form
  this.searchproduct=productSearch.group({
    searchproducts:new FormControl(['',Validators.required])
  });

  this.searchproduct.valueChanges.subscribe(x=>{
    if(x.searchproducts!=''){
      this.searchdishname(x.searchproducts);
    }
    else{
      this.finalProductArray=[];
    }
  });
  this.value=this.categoryName.sendCategoryName();
  this.productArray=this.value.products;
}

// this block is used to display the searched products and added to the cart

searchdishname(product:string){
  var s=0;
  this.emptyArray=[];
  for(var i=0; i< this.productArray.length; i++){
    this.productNameArray[i]=this.productArray[i].productName;
  }
  for(var i=0; i< this.productArray.length; i++){
    var str=this.productNameArray[i].toLowerCase();
    var str1=product.toLowerCase();
   if(str.includes(str1)){
   this.emptyArray[s++]=this.productArray[i];
   }
  }
  if(this.emptyArray.length==0){
    this.isfound=true;
  }
  else{
    this.isfound=false;
  }
  this.finalProductArray=this.emptyArray;

}


// this block is used added the items in cart
searchcartItems(ind:any){

  this.indexNumber=ind;
  this.itemArray=this.array;
  this.ind=this.array.length;
  // if(this.categoryName.sendCartCategoryDetails())
    {
      this.sendProductArray={
        categoryName:this.setCategoryName.categoryname,
        categoryImage:this.setCategoryName.categoryimage,
        productName:this.finalProductArray[ind].productName,
        productQuantity:1,
        productPrice:parseInt(this.finalProductArray[ind].productPrice),
        dishType:this.finalProductArray[ind].dishType
      }
      if(this.itemArray.length>=1){
        for(var i=0;i<this.itemArray.length;i++){

          console.log(this.itemArray[i].productName.includes(this.finalProductArray[ind].productName));
          if(this.itemArray[i].productName.includes(this.finalProductArray[ind].productName)){
              alert("this item is  already added in cart");
              break;

          }
          else{

              if(i===this.itemArray.length-1){
                this.itemArray[this.ind]=this.sendProductArray;
                if(sessionStorage.getItem('isentered')=="true"){
                  this.categoryName.getAddToCart(this.itemArray);
                }
                this.items=JSON.stringify(this.itemArray);
                sessionStorage.setItem('products',this.items);
                break;
              }
          }
        }
      }
      else{
        this.itemArray[this.ind]=this.sendProductArray;
        if(sessionStorage.getItem('isentered')=="true"){
          this.categoryName.getAddToCart(this.itemArray);
        }

        this.items=JSON.stringify(this.itemArray);
        sessionStorage.setItem('products',this.items);

      }


    }
    // else{
    //   confirm("new category entry");
    // }


}

// this block is used store the category details of the order
cartItems(ind:number){

  this.indexNumber=ind;
  this.itemArray=this.array;
  this.ind=this.array.length;
  // if(this.categoryName.sendCartCategoryDetails())
    {
      this.sendProductArray={
        categoryName:this.setCategoryName.categoryname,
        categoryImage:this.setCategoryName.categoryimage,
        productName:this.productArray[ind].productName,
        productQuantity:1,
        productPrice:parseInt(this.productArray[ind].productPrice),
        productType:this.productArray[ind].productType
      }
      if(this.itemArray.length>=1){
        for(var i=0;i<this.itemArray.length;i++){

          console.log(this.itemArray[i].productName.includes(this.productArray[ind].productName));
          if(this.itemArray[i].productName.includes(this.productArray[ind].productName)){
              alert("this item is  already added in cart");
              break;

          }
          else{

              if(i===this.itemArray.length-1){
                this.itemArray[this.ind]=this.sendProductArray;
                if(sessionStorage.getItem('isentered')=="true"){
                  this.categoryName.getAddToCart(this.itemArray);
                }
                this.items=JSON.stringify(this.itemArray);
                sessionStorage.setItem('products',this.items);
                break;
              }
          }
        }
      }
      else{
        this.itemArray[this.ind]=this.sendProductArray;
        if(sessionStorage.getItem('isentered')=="true"){
          this.categoryName.getAddToCart(this.itemArray);
        }

        this.items=JSON.stringify(this.itemArray);
        sessionStorage.setItem('products',this.items);

      }


    }
    // else{
    //   confirm("new caategory entry");
    // }

}

// this block is used to add the category to the favorites
Favorite(){

  this.getCategoryName=sessionStorage.getItem('categoryDetails');
  this.setCategoryName=JSON.parse(this.getCategoryName);
  if(this.favorite==""){
    this.favorite="red";
    alert("this category is added to your favorite list");
    this.getfavoritesCount=0;
    this.categoryName.sendFavorite().subscribe(x=>{
      this.getFavorites=x;
      this.getFavoritesArray[this.getfavoritesCount++]=this.getFavorites.Favorites;
      if(this.getFavoritesArray[0]==null || this.getFavoritesArray.length==0){
        this.getFavoritesArray[0]=this.setCategoryName;
        this.categoryName.getFavorite(this.getFavoritesArray).subscribe(x=>{
             console.log(x) ;
          });
      }
      else{
        this.getFavoriteArray=this.getFavoritesArray[0];
        for(var i=0;i<this.getFavoriteArray.length;i++){
          this.sendFavoritesArray[i]=this.getFavoriteArray[i];
        }
        this.sendFavoritesArray[this.getFavoriteArray.length]=this.setCategoryName;
        this.categoryName.getFavorite(this.sendFavoritesArray).subscribe(x=>{
          console.log(x) ;
       });
      }
    });

  }
  else{
    this.favorite="";
    alert("this category is removed from your favorite list");
    this.getfavoritesCount=0;
    this.categoryName.sendFavorite().subscribe(x=>{
      this.getFavorites=x;
      this.getFavoritesArray[this.getfavoritesCount++]=this.getFavorites.Favorites;
      this.getFavoriteArray=this.getFavoritesArray[0];
      if(this.getFavoriteArray.length==1){
        if(this.getFavoriteArray[0].categoryname===this.setCategoryName.categoryname){
          this.getFavoriteArray=[];
          this.categoryName.getFavorite(this.getFavoriteArray).subscribe(x=>{
            console.log(x) ;
         });
        }
      }
      else{
        for(var i=0;i<this.getFavoriteArray.length;i++){
          if(this.getFavoriteArray[i].categoryname===this.setCategoryName.categoryname){
            this.getFavoriteArray.splice(i,1);
            --i;
            break;
          }
        }

        this.categoryName.getFavorite(this.getFavoriteArray).subscribe(x=>{
          console.log(x) ;
       });
      }
    })
  }
}

// this block is used to show the search bar
searchBar(){
  this.frontUi=false;
}

// this block is used to hide the search bar
closeSearchbar() {
  this.frontUi=true;
}

}
