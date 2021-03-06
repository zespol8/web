import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { TrueFalseService } from '../services/true-false.service';
import { Post } from '../main/main.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class MapComponent {
  markerNumber: number = null;
  lng: number;
  lat: number;
  zoom = 10;
  inputValue = '';
  pointList: Array<Post> = [];
  eventId: string;
  isListVisible = false;
  isMarkerVisible = true;

  constructor(public cords: DataService, public tf: TrueFalseService, private router: Router, private route: ActivatedRoute) {
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
  }
  setPointList(list: Array<Post>) {
    this.pointList = list;
    this.isMarkerVisible = false;
    this.isListVisible = true;
  }
  setEventId (id: string) {
    this.eventId = id;
  }
  dragOneMarker(event) {
    this.cords.lat = event.coords.lat;
    this.cords.lng = event.coords.lng;
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

  markerMove(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  pointDetails(id: number) {
    this.router.navigate(['/point/' + this.eventId + '/' + id], { relativeTo: this.route });
  }
}
