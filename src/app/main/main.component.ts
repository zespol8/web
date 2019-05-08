import {Component} from '@angular/core';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import {TrueFalseService} from '../services/true-false.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class MainComponent {

  constructor(public http: HttpService, private acces: DataService, public tf: TrueFalseService, private router: Router, private route: ActivatedRoute) {
    if (!this.acces.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
  }

  isActive() {
    const accessToken = this.acces.accessToken;
    this.http.isActive(accessToken).subscribe(i => {
      },
      error => {
        this.http.errors = error;
        console.log(error);
        console.log(this.http.errors.error);
        console.log('HttpError status = ' + this.http.errors.status);
      }
    );
  }

  logout() {
    this.acces.removeAccessToken();
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
  openingHours?: number;
  price?: number;
  minAge?: number;
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
