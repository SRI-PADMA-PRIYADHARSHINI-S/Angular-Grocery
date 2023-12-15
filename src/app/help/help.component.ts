import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  Legalbgcolor:string="white";
  FAQsbgcolor:string="";

  Legalcolor:string="black";
  FAQscolor:string="";



  Help:string="Help";


  constructor(private router:Router){

  }


  Legal(){
    this.Legalbgcolor="white";
    this.FAQsbgcolor="";
    this.FAQscolor="";
    this.Legalcolor="black";

  }

  FAQs(){
    this.FAQsbgcolor="white";
    this.Legalbgcolor="";
    this.FAQscolor="black";
    this.Legalcolor="";
  }


}
