import { Component } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent {
  isLegalInfo:boolean=false;
  isPrivacyInfo:boolean=false;
  isCancelInfo:boolean=false;

  LegalInfo(){
    if(this.isLegalInfo){
      this.isLegalInfo=false;
    }
    else{
      this.isLegalInfo=true;
    }
  }

  PrivacyInfo(){
    if(this.isPrivacyInfo){
      this.isPrivacyInfo=false;
    }
    else{
      this.isPrivacyInfo=true;
    }
  }

  CancelInfo(){
    if(this.isCancelInfo){
      this.isCancelInfo=false;
    }
    else{
      this.isCancelInfo=true;
    }
  }
}
