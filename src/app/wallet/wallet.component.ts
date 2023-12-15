import { Component } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  isPaytmWallet:boolean=false;
  isPhonePeWallet:boolean=false;

  cartTotalPrice:any;
  constructor(){

    this.cartTotalPrice=sessionStorage.getItem("TotalCartPrice");
  }

  PaytmWallet(){
    if(this.isPaytmWallet){
      this.isPaytmWallet=false;
    }
    else{
      this.isPaytmWallet=true;
    }
  }
  PhonePeWallet(){
    if(this.isPhonePeWallet){
      this.isPhonePeWallet=false;
    }
    else{
      this.isPhonePeWallet=true;
    }
  }
}
