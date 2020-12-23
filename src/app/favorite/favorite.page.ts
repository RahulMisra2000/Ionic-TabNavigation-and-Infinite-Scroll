import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../about/place';
import { PlacesService } from '../about/places.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  places : Place[];

  constructor(private pService: PlacesService) { }

  ngOnInit() {
    this.places = this.pService.getPlaces();

  }


  method1(id:string, iis: IonItemSliding){
    console.log("method1 clicked", id);
    iis.close();
  }

  method2(id:string,  iis: IonItemSliding){
    console.log("method2 clicked", id);
    iis.close();
  }

  method3(id:string,  iis: IonItemSliding){
    console.log("method3 clicked", id);
    iis.close();
  }
}
