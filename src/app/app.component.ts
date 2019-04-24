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

  constructor(public http: HttpService, private acces: DataService, public tf: TrueFalseService) { }

  isActive() {
    const accessToken = this.acces.accessToken;
    this.http.isActive(accessToken).subscribe(i => { },
      error => {
        this.http.errors = error;
        console.log(error);
        console.log(this.http.errors.error);
        console.log('HttpError status = ' + this.http.errors.status);
      }
    );
  }
}

export interface Post {
  email?: string;
  password?: string;
  accessToken?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;


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
  url?: string;
}
export interface Cords {
  lng?: number;
  lat?: number;
}

export interface HttpErrors {
  error?: string;
  status?: number;
  message?: string;
}
