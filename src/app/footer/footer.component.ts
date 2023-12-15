import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  HomePage:string="Home";
  HelpPage:string="Help";
  TermsPage:string="Terms";
  AboutPage:string="About";
  CancelPage:string="Cancel";
  PrivacyPage:string="Privacy";
  ContactPage:string="Contact";


}
