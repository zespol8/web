import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';

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
    console.log(this.onePoint);
    /// 'point/:eventId/:pointId'
    config.seconds = true;
    config.spinners = false;
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('eventId'));
      this.pointId = params.get('pointId');
      if (this.pointId === 'new') {
        this.isNew = true;
        console.log('isNew: ' + this.isNew);
      } else {
        this.loadPointData();
        console.log('isNew: ' + this.isNew);
      }
    });
  }
  addPoint() {
    this.onePoint.geographicCoordinate.latitude = this.data.lat;
    this.onePoint.geographicCoordinate.longitude = this.data.lng;
    const startDate = new Date(this.getDateAsUTC(this.startDate, this.startTime));
    const endDate = new Date(this.getDateAsUTC(this.endDate, this.startTime));
    this.onePoint.startDate = startDate.getTime();
    this.onePoint.endDate = endDate.getTime();
    const accessToken = this.data.getAccessToken();
    this.onePoint.eventId = this.eventId;
    this.data.error = this.data.checkSyntax(this.onePoint); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
    if (this.data.error === '') {
      if (!(this.isNew)) { // jeśli true to edycja eventu /// 'point/:eventId/:pointId'
        this.http.postPointEdit(this.pointId, this.onePoint, accessToken).subscribe(i => {
          console.log('Edycja eventu: ' + i);
          window.open(window.location.origin + '/point/' + this.eventId + '/' + this.pointId, '_self');
        }, error => {
          console.log(error);
        });
      } else { //// jeśli false to nowy event
        this.http.postAddPointAdmin(this.onePoint, accessToken).subscribe(i => {
          console.log('Dodano nowy event o ID: ' + i.newEventId);
          console.log(i);
          window.open(window.location.origin + '/point/' + this.eventId + '/' + i.newPointId, '_self');
        }, error => {
          console.log(error);
        });
      }
    }
  }

  deletePoint() {
    const accessToken = this.data.getAccessToken();
    this.http.postPointDelete(this.eventId, Number(this.pointId), accessToken).subscribe(i => {
      this.router.navigate(['/points/' + this.eventId], { relativeTo: this.route });
    }, error => {
      console.log(error);
    });
  }

  back() {
    this.router.navigate(['/points/' + this.eventId], { relativeTo: this.route });
  }

  private getDateAsUTC(date: { month: number; year: number; day: number }, time: { hour: number; minute: number; second: number }) {
    return date.year + '-' + PointComponent.addLeadingZero(date.month + 1) + '-' + PointComponent.addLeadingZero(date.day) +
      'T' + PointComponent.addLeadingZero(time.hour) + ':' + PointComponent.addLeadingZero(time.minute)
      + ':' + PointComponent.addLeadingZero(time.second);
  }

  private getDateFromMillis(millis: number): { month: number; year: number; day: number; hour: number; minute: number; second: number } {
    const date = new Date(millis);
    return {
      month: date.getMonth(),
      year: date.getFullYear(),
      day: date.getDay(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  async loadPointData() {
    console.log('LoadEvent');
    await this.http.getPointAdminById(this.eventId, Number(this.pointId), this.data.getAccessToken()).subscribe(i => {
      this.onePoint = i;
      const startDate = this.getDateFromMillis(i.startDate);
      const endDate = this.getDateFromMillis(i.endDate);
      this.startDate = { year: startDate.year, month: startDate.month, day: startDate.day };
      this.startTime = { hour: startDate.hour, minute: startDate.minute, second: startDate.second };
      this.endDate = { year: endDate.year, month: endDate.month, day: endDate.day };
      this.endTime = { hour: endDate.hour, minute: endDate.minute, second: endDate.second };
      this.loadPointImage();
      console.log(i);
    }, error => {
      console.log(error);
    });
  }

  loadPointImage() {
    console.log('Liczba zdjęć = ' + this.onePoint.imagesNumber);
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
    console.log(this.selectedFile);
  }

  addImage() {
    console.log(this.selectedFile);
    const accessToken = this.data.getAccessToken();
    this.http.addImageToPoint(accessToken, this.eventId, Number(this.pointId), this.selectedFile).subscribe(i => {
      console.log(i);
      window.open(window.location.origin + '/point/' + this.eventId + '/' + this.pointId, '_self');
    }, error => {
      console.log(error);
    });
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + PointComponent.addLeadingZero(date.month + 1) + '-' + PointComponent.addLeadingZero(date.day);
  }
}

