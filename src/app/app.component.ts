import { Component, OnInit} from '@angular/core';
import { OrderDeliveredService } from './order-delivered.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  constructor(private ordered:OrderDeliveredService){

  }

  ngOnInit(): void {


    // This Block is used to iniate the time Countdown for Order purpose

    if(sessionStorage.getItem('isentered')=="true"){
      this.ordered.startInterval();
    }

  }

}
