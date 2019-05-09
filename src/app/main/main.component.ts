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
  public isCollapsed = true;
  selectedFile: File = null;

  constructor(public http: HttpService, private data: DataService, public tf: TrueFalseService,
    private router: Router, private route: ActivatedRoute) {
    if (!this.data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
  }

  isActive() {
    const accessToken = this.data.getAccessToken();
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
    this.data.removeAccessToken();
    this.router.navigate(['/login'], {relativeTo: this.route});
  }

  openNewEvent() {
    this.router.navigate(['/event/new'], {relativeTo: this.route});
  }

  exportCSV() {
    window.open(this.http.downloadEventsInCSV(this.data.getAccessToken()));
  }

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  importCSV() {
    console.log(this.selectedFile);
    this.http.uploadCsv(this.data.getAccessToken(), this.selectedFile).subscribe(i => {
      console.log(i);
    }, error => {
      console.log(error);
    });
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
