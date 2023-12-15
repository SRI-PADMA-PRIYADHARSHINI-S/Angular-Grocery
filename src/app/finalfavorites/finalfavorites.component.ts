import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-finalfavorites',
  templateUrl: './finalfavorites.component.html',
  styleUrls: ['./finalfavorites.component.css']
})
export class FinalfavoritesComponent {

  totalDetails:any=[];
  FavoritesArray:any=[];
  FavoriteCategory:any=[];

  constructor(private Favorite:DatabaseService, private router:Router){
    // get details about favorite category list
    this.Favorite.sendFavorite().subscribe(x=>{
      this.totalDetails=x;
      this.FavoritesArray=this.totalDetails.Favorites;
    })
  }

  //  this block is used to route productcomponent for the particular category
  sendCategory(index:any){
    this.FavoriteCategory=JSON.stringify(this.FavoritesArray[index]);
    sessionStorage.setItem('categoryDetails',this.FavoriteCategory);
    this.router.navigateByUrl("/productPage");
  }
}
