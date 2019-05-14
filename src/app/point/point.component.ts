import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import {EventComponent} from '../event/event.component';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointComponent {
  onePoint = this.data.resetData();
  eventId: number;
  pointId: string;
  isNew = false;

  public isCollapsed = true;
  selectedFile: File = null;
  imagesToShow = [];
  startDate = { 'year': 2019, 'month': 5, 'day': 9 };
  startTime = { 'hour': 13, 'minute': 30, 'second': 0 };
  endDate = { 'year': 2019, 'month': 5, 'day': 9 };
  endTime = { 'hour': 13, 'minute': 30, 'second': 0 };

  static addLeadingZero(x: number): string {
    if (x < 10) {
      return '0' + x;
    }
    return x.toString();
  }

  constructor(public data: DataService, private http: HttpService,
    private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    /// 'point/:eventId/:pointId'
    config.seconds = true;
    config.spinners = false;
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('eventId'));
      this.pointId = params.get('pointId');
      if (this.pointId === 'new') {
        this.isNew = true;
      } else {
        this.loadPointData();
      }
    });
  }
  addPoint() {
    this.onePoint.geographicCoordinate.latitude = this.data.lat;
    this.onePoint.geographicCoordinate.longitude = this.data.lng;
    const startDate = new Date(EventComponent.getDateAsUTC(this.startDate, this.startTime));
    const endDate = new Date(EventComponent.getDateAsUTC(this.endDate, this.endTime));
    this.onePoint.startDate = startDate.getTime();
    this.onePoint.endDate = endDate.getTime();
    const accessToken = this.data.getAccessToken();
    this.onePoint.eventId = this.eventId;
    this.data.error = this.data.checkSyntax(this.onePoint); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
    if (this.data.error === '') {
      if (!(this.isNew)) { // jeśli true to edycja eventu /// 'point/:eventId/:pointId'
        this.http.postPointEdit(this.pointId, this.onePoint, accessToken).subscribe(i => {
          window.open(window.location.origin + '/point/' + this.eventId + '/' + this.pointId, '_self');
        }, error => {
        });
      } else { //// jeśli false to nowy event
        this.http.postAddPointAdmin(this.onePoint, accessToken).subscribe(i => {
          window.open(window.location.origin + '/point/' + this.eventId + '/' + i.newPointId, '_self');
        }, error => {
        });
      }
    }
  }

  deletePoint() {
    const accessToken = this.data.getAccessToken();
    this.http.postPointDelete(this.eventId, Number(this.pointId), accessToken).subscribe(i => {
      this.router.navigate(['/points/' + this.eventId], { relativeTo: this.route });
    }, error => {
    });
  }

  back() {
    this.router.navigate(['/points/' + this.eventId], { relativeTo: this.route });
  }

  async loadPointData() {
    await this.http.getPointAdminById(this.eventId, Number(this.pointId), this.data.getAccessToken()).subscribe(i => {
      this.onePoint = i;
      const startDate = EventComponent.getDateFromMillis(i.startDate);
      const endDate = EventComponent.getDateFromMillis(i.endDate);
      this.startDate = { year: startDate.year, month: startDate.month, day: startDate.day };
      this.startTime = { hour: startDate.hour, minute: startDate.minute, second: startDate.second };
      this.endDate = { year: endDate.year, month: endDate.month, day: endDate.day };
      this.endTime = { hour: endDate.hour, minute: endDate.minute, second: endDate.second };
      this.loadPointImage();
    }, error => {
    });
  }

  loadPointImage() {
    for (let i = 0; i < this.onePoint.imagesNumber; i++) {
      this.http.getPointImage(this.data.getAccessToken(), this.eventId, this.pointId, i).subscribe(image => {
        this.createImageFromBlob(image, i);
      });
    }
  }

  createImageFromBlob(image: Blob, index: number) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imagesToShow[index] = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addImage() {
    const accessToken = this.data.getAccessToken();
    this.http.addImageToPoint(accessToken, this.eventId, Number(this.pointId), this.selectedFile).subscribe(i => {
      window.open(window.location.origin + '/point/' + this.eventId + '/' + this.pointId, '_self');
    }, error => {
    });
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + PointComponent.addLeadingZero(date.month + 1) + '-' + PointComponent.addLeadingZero(date.day);
  }
}

