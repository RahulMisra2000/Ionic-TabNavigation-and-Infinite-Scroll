import { Injectable } from '@angular/core';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places : Place[] = [
            new Place('1', "place 1"),
            new Place('2', "place 2"),
            new Place('3', "place 3"),
            new Place('4', "place 4"),
            new Place('5', "place 5")
  ];

  constructor() { }

  getPlaces () : Place[] {
    return [... this._places];
  }

  getPlace(id : string): Place {
    return this._places.find(p=> p.id == id);

  }


}
