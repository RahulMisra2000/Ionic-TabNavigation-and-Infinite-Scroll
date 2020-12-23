import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  places : Place[];

  constructor(private pService: PlacesService) { }

  ngOnInit() {
    this.places = this.pService.getPlaces();
  }

}
