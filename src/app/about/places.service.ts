import { Injectable } from '@angular/core';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places : Place[] = [
            new Place('1', "place 1", "https://www.sciencekids.co.nz/images/pictures/animals/alligator.jpg"),
            new Place('2', "place 2", "https://www.sciencekids.co.nz/images/pictures/animals/alligator.jpg"),
            new Place('3', "place 3","https://www.sciencekids.co.nz/images/pictures/animals/dog.jpg"),
            new Place('4', "place 4", "https://www.sciencekids.co.nz/images/pictures/animals/dog.jpg"),
            new Place('5', "place 5","https://www.sciencekids.co.nz/images/pictures/animals/dog.jpg")
  ];

  private _users =
  [{
    "name": "Aline Grover",
    "created": "November 28, 2012"
  }, {
    "name": "Nevada Anders",
    "created": "January 18, 2014"
  }, {
    "name": "Nicholas Morissette",
    "created": "November 11, 2014"
  }, {
    "name": "Rusty Umland",
    "created": "January 8, 2019"
  }, {
    "name": "Amada Cerulli",
    "created": "July 22, 2009"
  }, {
    "name": "Harriette Garcia",
    "created": "July 29, 2018"
  }, {
    "name": "Erminia Marotz",
    "created": "September 29, 2016"
  }, {
    "name": "Shanelle Parodi",
    "created": "May 26, 2018"
  }, {
    "name": "Roger Leite",
    "created": "August 6, 2015"
  }, {
    "name": "Latina Faulcon",
    "created": "February 5, 2014"
  }, {
    "name": "Jerrie Hoekstra",
    "created": "June 2, 2016"
  }, {
    "name": "Domonique Byam",
    "created": "December 30, 2010"
  }, {
    "name": "Monnie Bonar",
    "created": "December 20, 2018"
  }, {
    "name": "Chu Kahle",
    "created": "November 17, 2017"
  }, {
    "name": "Allan Passman",
    "created": "November 12, 2015"
  }, {
    "name": "Conrad Caliendo",
    "created": "February 10, 2016"
  }, {
    "name": "Elma Chenier",
    "created": "August 13, 2011"
  }, {
    "name": "Wendi Hirano",
    "created": "July 27, 2018"
  }, {
    "name": "Loren Wordlaw",
    "created": "December 20, 2014"
  }, {
    "name": "Hubert Frum",
    "created": "January 21, 2013"
  }, {
    "name": "Rueben Basil",
    "created": "December 2, 2013"
  }, {
    "name": "Krystyna Hardiman",
    "created": "February 11, 2016"
  }, {
    "name": "Micki Murch",
    "created": "December 17, 2009"
  }, {
    "name": "Allene Knight",
    "created": "November 3, 2010"
  }, {
    "name": "Davis Lunsford",
    "created": "October 17, 2011"
  }, {
    "name": "Elin Conte",
    "created": "June 23, 2015"
  }, {
    "name": "Yasuko Hites",
    "created": "August 25, 2017"
  }, {
    "name": "Gerri Pinon",
    "created": "May 21, 2014"
  }, {
    "name": "Caryl Hawker",
    "created": "April 13, 2018"
  }, {
    "name": "Savannah Hoard",
    "created": "October 31, 2009"
  }, {
    "name": "Carolyn Knutsen",
    "created": "July 16, 2015"
  }, {
    "name": "Shantay Mckissack",
    "created": "July 9, 2010"
  }, {
    "name": "Vertie Pinales",
    "created": "November 20, 2010"
  }, {
    "name": "Gidget Stuck",
    "created": "August 17, 2017"
  }, {
    "name": "Drew Crownover",
    "created": "August 30, 2017"
  }, {
    "name": "Vashti Krajewski",
    "created": "January 25, 2018"
  }, {
    "name": "Candice Dike",
    "created": "November 19, 2018"
  }, {
    "name": "Dorthey Buhler",
    "created": "October 22, 2012"
  }, {
    "name": "Hailey Deluna",
    "created": "September 13, 2012"
  }, {
    "name": "Richard Aaron",
    "created": "April 27, 2016"
  }];


  constructor() { }

  getPlaces () : Place[] {
    return [... this._places];
  }

  getPlace(id : string): Place {
    return this._places.find(p=> p.id == id);

  }

  getUsers(start:number, howMany: number): any[]{

    console.log(start, howMany);
    console.log(this._users);

    return [...this._users.slice(start,start+howMany)];

  }

}
