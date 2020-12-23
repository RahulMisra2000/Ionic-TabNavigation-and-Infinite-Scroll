import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlacesService } from '../about/places.service';

@Component({
  selector: 'app-infinitescrollexample',
  templateUrl: './infinitescrollexample.page.html',
  styleUrls: ['./infinitescrollexample.page.scss'],
})
export class InfinitescrollexamplePage implements OnInit, AfterViewInit {
  
    length:number = 0;
    
    users = [];

    @ViewChild('trvList', {read: ElementRef}) trvList: ElementRef;
    @ViewChild('trvInfiniteScroll', {read: ElementRef}) trvInfiniteScroll: ElementRef;

  constructor(private pService: PlacesService) { }
  
  ngAfterViewInit(): void {

    console.log("****", this.trvList.nativeElement);
    console.log("****", this.trvInfiniteScroll.nativeElement);

    this.users = this.pService.getUsers(0,20);
    this.appendItems(this.users.length);
    this.length += this.users.length;
  }

  async doInfinite(e){
    this.users = this.pService.getUsers(this.length,10);
    console.log('DoInfinite CALLED:', this.length, this.users.length);

    if (this.users.length > 0) {
      console.log('Loading data...');
      await this.wait(500);
      this.trvInfiniteScroll.nativeElement.complete();
      
      this.appendItems(this.users.length);
      this.length += this.users.length;

      console.log('Done');
    } else {
      console.log('No More Data');
      this.trvInfiniteScroll.nativeElement.disabled = true;
    }
  }

  ngOnInit() {
    
  }

  async appendItems(n) {
    
    let el:HTMLIonItemElement;

    for (var i = 0; i < n; i++) {
      console.log(i);
      console.log('array', this.users);
      console.log(this.users[1].name);
      console.log("here");
      console.log(this.users[i].name);
      

      el = document.createElement('ion-item');
      el.innerHTML = `
        <ion-avatar slot="start">
          <img src="https://www.gravatar.com/avatar/${i + this.length}?d=monsterid&f=y">
        </ion-avatar>
        <ion-label>
          <h2>${this.users[i].name}</h2>
          <p>Created ${this.users[i].created}</p>
        </ion-label>
      `;

      //await this.wait(200);

      document.querySelector('#mylist').appendChild(el);   
      //this.trvList.nativeElement.appendChild(el);    
    }
  }

  wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1);
      }, time);
    });
  }

}
