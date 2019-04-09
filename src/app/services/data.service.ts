import { Injectable } from '@angular/core';
import { Post } from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public accessToken = '';
  public error = '';
  public dane: Post;
  public lng = 0;
  public lat = 0;
  public newEventId: number;
  constructor() { }


  checkSyntax(data: Post): string { // Sprawdzanie czy formularz eventu lub punktu zostal poprawnie uzupelniony.
    if (data.geographicCoordinate.latitude === 0 && data.geographicCoordinate.longitude === 0) {
      return 'Pick cords on map...';
    } else if (data.name.length < 5) {
      return 'Name is to short...';
    } else if (data.description.length < 10) {
      return 'Desc. min. 10...';
    } else if (data.place.length < 5) {
      return 'Place is to short...';
    } else { return ''; }
  }

  clearCords(): void { // Czyszczenie danych lng i lat podczasdodawania kolejnych punktów
    this.lat = 0;
    this.lng = 0;
  }
}
