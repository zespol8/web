import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { TrueFalseService } from '../services/true-false.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {
  markerNumber: number = null;
  lng: number;
  lat: number;
  zoom = 12;
  inputValue = '';

  constructor(private cords: DataService, private tf: TrueFalseService) {
    this.lng = 18.598043358450923;
    this.lat = 53.01371393719378;
  }
  onChoseLocation(event) {
    this.lng = event.coords.lng;
    this.lat = event.coords.lat;
    this.cords.lng = this.lng;
    this.cords.lat = this.lat;
    this.cords.onePoint.geographicCoordinate.latitude = this.lat;
    this.cords.onePoint.geographicCoordinate.longitude = this.lng;
    console.log('onMapClick Lng: ' + this.cords.lng + ' Lat: ' + this.cords.lat);
  }
  markerDrag(event, id: number) {
    this.cords.listOfAll.forEach(element => {
      if (element.id === id) {
        element.geographicCoordinate.latitude = event.coords.lat;
        element.geographicCoordinate.longitude = event.coords.lng;
      }
    });
  }
  markerClick(id: number): void {
    this.markerNumber = id;
  }
  checkMarkerId(id: number): boolean {
    return this.markerNumber === id;
  }

}
