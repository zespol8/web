import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { DataService } from './services/data.service';
import { TrueFalseService } from './services/true-false.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpService, private acces: DataService, private tf: TrueFalseService) { }

  isActive() {
    const accessToken = this.acces.accessToken;
    this.http.isActive(accessToken).subscribe(i => {
        console.log('i.statusText');
        console.log(i);
        console.log('i.statusText');
      });
  }
}
export interface Post {
  email?: string;
  password?: string;
  accessToken?: string;

  id?: number;
  name?: string;
  place?: string;
  shortDescription?: string;
  startDate?: number;
  createdDate?: number;
  description?: string;
  endDate?: number;
  eventId?: number;
  newEventId?: number;
  geographicCoordinate?: {
    latitude?: number;
    longitude?: number;
  };

  status?: number;
  statusText?: string;
}
export interface Cords {
  lng?: number;
  lat?: number;
}



