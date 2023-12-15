import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavbarComponent{

home:string="";
Help:string="Help";
offers:string="offers";
cart:string="cart";
search:string="search";
profile:string="profile";
loginUser:string="login";




details:any;
dummy1:any;
dummy:any;

username:any;



cartitems:any=[];
cartCount:number=0;
iscart:boolean=false;

islogged:any;
user:boolean=false;


constructor(){

    this.islogged=sessionStorage.getItem('isentered');


    if(this.islogged == "true"){
    this.details=sessionStorage.getItem('isusername');
    this.dummy1=JSON.parse(this.details);
    this.username=this.dummy1.username;
      this.user=true;
    }
    else{
      this.user=false;
    }
    setInterval(()=>{
        this.cartitems=sessionStorage.getItem('products');
          this.dummy=JSON.parse(this.cartitems);
          if(this.dummy==null || this.dummy.length==0){
            this.iscart=false;
            this.cartCount=0;
          }
          else{
            this.cartCount=this.dummy.length;
            this.iscart=true;
          }
    },1000);

}

// this block is used to logout the user information
LogOut(){
  sessionStorage.setItem('isentered','false');
  sessionStorage.setItem('isusername','');
  sessionStorage.setItem('isAddressAdded','false');
  window.location.reload();
}


}

