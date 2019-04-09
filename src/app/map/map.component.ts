import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lng: number;
  lat: number;
  zoom = 12;
  inputValue = '';

  constructor(private cords: DataService) {
    this.lng = 18.598043358450923;
    this.lat = 53.01371393719378;
  }
  onChoseLocation(event) {
    this.lng = event.coords.lng;
    this.lat = event.coords.lat;
    this.cords.lng = this.lng;
    this.cords.lat = this.lat;
    console.log('onMapClick Lng: ' + this.cords.lng + ' Lat: ' + this.cords.lat);
  }

}
