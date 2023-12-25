import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { AdminDatasService } from '../admin-datas.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


  val:any=[];
  value:any;
  // productPage="dispage";
  filtercategorys:any=[];
  showCategoryForm:boolean=false;
  AddCategory:FormGroup;
  UpdateCategoryForm:any;
  AddProductForm:FormGroup;
  UpdateProductForm:any;
  showUpdate:boolean=false;
  adminProductPage:boolean=false;
  showProductForm:boolean=false;
  showUpdateProduct:boolean=false;
  productList:any=[];
  constructor(private category:DatabaseService, private router:Router, private formbuilder:FormBuilder, private adData:AdminDatasService){

  this.filtercategorys=this.category.sendFilter();
  this.readcategorys();

  //this block is used to validate the AddCategoryForm

  this.AddCategory=formbuilder.group({
    categoryname:['',[Validators.required]],
    categoryimage:['',[Validators.required]],
    productvariety:['',[Validators.required]],
    timeDel:['',[Validators.required]],
    offer:['',[]],
    CouponCode:['',[]]
  })
  // this form is used to add the product
  this.AddProductForm=formbuilder.group({
    productName:['',[Validators.required]],
    productPrice:['',[Validators.required]],
    productDescription:['',[Validators.required]],
    productImage:['',[Validators.required]]
  })
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

  AddCategorys(){
    if(this.showCategoryForm==false){
      this.showCategoryForm=true;

    }
    else{
      this.showCategoryForm=false;
    }
  }
  UpdateCategorys(index:any){
    if(this.showUpdate==false){
      this.showUpdate=true;
      var offerValue=this.val[index].offer.slice(0,3);
      var CouponValue=this.val[index].offer.slice(14,this.val[index].offer.length);
      this.UpdateCategoryForm=this.formbuilder.group({
        categoryname:[this.val[index].categoryname,[Validators.required]],
        categoryimage:[this.val[index].categoryimage,[Validators.required]],
        productvariety:[this.val[index].productvariety,[Validators.required]],
        timeDel:[this.val[index].timeDel,[Validators.required]],
        offer:[offerValue,[]],
        CouponCode:[CouponValue,[]],
        index:[index,[]]
      })
    }
    else{
      this.showUpdate=false;
    }
  }
  AddCategoryDB(data:any){

    var categoryData={
      phonenumber:this.val.length+1,
      categoryname:data.categoryname,
      categoryimage:data.categoryimage,
      productvariety:data.productvariety,
      timeDel:data.timeDel,
      offer:data.offer+"% off | Use "+data.CouponCode,
      Rating:"4",
      products:[]
    }
    this.adData.AddCategorys(categoryData);
    this.showCategoryForm=false;
  }

  DeleteCategory(index:any){
    this.adData.DeleteCategorys(index+1);
  }
  UpdateCategoryDetails(categoryDeatils:any){
    var categoryData={
      categoryname:categoryDeatils.categoryname,
      categoryimage:categoryDeatils.categoryimage,
      productvariety:categoryDeatils.productvariety,
      timeDel:categoryDeatils.timeDel,
      offer:categoryDeatils.offer+" off | Use "+categoryDeatils.CouponCode
    }
    this.adData.UpdateCategorys(categoryData,categoryDeatils.index);
  }

  categoryList(ind:any){
    if(this.adminProductPage==false){
      this.adminProductPage=true;
      this.productList=this.val[ind];
    }
    else{
      this.adminProductPage=false;
    }
  }

  showProduct(){
    if(this.showProductForm==false){
      this.showProductForm=true;
    }
    else{
      this.showProductForm=false;
    }
  }

  updateProduct(index:any){
    if(this.showUpdateProduct==false){
      this.showUpdateProduct=true;
      this.UpdateProductForm=this.formbuilder.group({
        productName:[this.productList.products[index].productName,[Validators.required]],
        productImage:[this.productList.products[index].productImage,[Validators.required]],
        productPrice:[this.productList.products[index].productPrice,[Validators.required]],
        productDescription:[this.productList.products[index].productDescription,[]],
        index:[index,[]]
      })
    }
    else{
      this.showUpdateProduct=false;
    }
  }

  AddProductDetails(productDetails:any){
    this.adData.AddProduct(productDetails,this.productList.phonenumber);
  }
  DeleteProductDetails(index:any){
    this.adData.deleteProduct(index,this.productList.phonenumber);
  }
  UpdateProductDetails(productDetails:any){
    var UpdateProduct={
      productName:productDetails.productName,
      productImage:productDetails.productImage,
      productPrice:productDetails.productPrice,
      productDescription:productDetails.productDescription

    }
    this.adData.updateProduct(UpdateProduct,productDetails.index,this.productList.phonenumber);
  }
}
