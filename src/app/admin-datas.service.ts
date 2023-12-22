import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminDatasService {

  categoryDetailsArray:any=[];
  customerDetailsArray:any=[];

  constructor(private http:HttpClient) {

   }

   AddCategorys(CategoryData:any){
    this.http.get<any>(environment.CategoryDetails).subscribe(x=>{
      const check=x.find((CName:any)=>{
        return CategoryData.categoryname==CName.categoryname;
      })

      if(check){
        return alert("this category is already register");
      }
      else{

        return this.http.post(environment.CategoryDetails,CategoryData).subscribe(()=>{
          alert(CategoryData.categoryname+" category Added Successfully");
          window.location.reload();
        })
      }
    })
   }
   DeleteCategorys(index:any){
      this.http.get(environment.CategoryDetails).subscribe(x=>{
        this.categoryDetailsArray=x;
        const value=confirm("Are you sure to remove this "+this.categoryDetailsArray[index-1].categoryname+" category");
        if(value){
          this.http.delete(environment.CategoryEntry+index).subscribe(()=>{
            window.location.reload();
          });
        }
        else{
          window.location.reload();
        }

      });
   }
   UpdateCategorys(categoryDetails:any,index:any){
    var ind=index+1;

    this.http.patch(environment.CategoryEntry+ind,categoryDetails).subscribe(()=>{
      alert(categoryDetails.categoryname+' category Updated Successful');
      window.location.reload();
    })
   }

   AddProduct(productDeatils:any,categoryname:any){

    this.http.get<any>(environment.CategoryDetails).subscribe(x=>{
      this.categoryDetailsArray=x.find((Cname:any)=>{
        if(Cname.phonenumber==categoryname){
          Cname.products.push(productDeatils);
          this.http.patch(environment.CategoryEntry+categoryname,{products:Cname.products}).subscribe(()=>{
            alert(productDeatils.productName+" Added successfully");
            window.location.reload();
          })
        }
      })
    })
   }


   deleteProduct(index:any,categoryname:any){
    this.http.get<any>(environment.CategoryDetails).subscribe(x=>{
      this.categoryDetailsArray=x.find((Cname:any)=>{
        if(Cname.phonenumber==categoryname){
          var deletedProduct=Cname.products[index].productName;
          Cname.products.splice(index,1);
          this.http.patch(environment.CategoryEntry+categoryname,{products:Cname.products}).subscribe(()=>{
            alert(deletedProduct+" Deleted successfully");
            window.location.reload();
          })
        }
      })
    })
   }

   updateProduct(productDeatils:any,index:any,categoryname:any){
    this.http.get<any>(environment.CategoryDetails).subscribe(x=>{
      this.categoryDetailsArray=x.find((Cname:any)=>{
        if(Cname.phonenumber==categoryname){
          Cname.products[index]=productDeatils;
          this.http.patch(environment.CategoryEntry+categoryname,{products:Cname.products}).subscribe(()=>{
            alert(productDeatils.productName+" Updated successfully");
            window.location.reload();
          })
        }
      })
    })
   }

   fetchCustomers(){
    return this.http.get(environment.CustomerDetails);
   }
}
