import {Component, isDevMode, ViewChild} from '@angular/core';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import {TrueFalseService} from '../services/true-false.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../assets/css/inputs.css']
})
export class MainComponent {
  public isCollapsed = true;
  selectedFile: File = null;
  @ViewChild('messages') messages: MessagesComponent;

  constructor(public http: HttpService, private data: DataService, public tf: TrueFalseService,
              private router: Router, private route: ActivatedRoute) {
    if (!this.data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
  }

  logout() {
    this.data.removeAccessToken();
    window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/product', '_self');
  }

  openNewEvent() {
    this.router.navigate(['/event/new'], {relativeTo: this.route});
  }

  exportCSV() {
    window.open(this.http.downloadEventsInCSV(this.data.getAccessToken()));
  }

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  importCSV() {
    this.http.uploadCsv(this.data.getAccessToken(), this.selectedFile).subscribe(i => {
      this.messages.setSuccess('Importowanie pliku CSV powiodło się.');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
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
  imagesNumber?: number;

  newPointId?: string;

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

export class EndResetPasswordModel {
  email: string;
  newPassword: string;
  resetHash: string;

  constructor(email: string, newPassword: string, resetHash: string) {
    this.email = email;
    this.newPassword = newPassword;
    this.resetHash = resetHash;
  }
}
