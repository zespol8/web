import {Component, isDevMode, OnInit, ViewChild} from '@angular/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';
import {EventComponent} from '../event/event.component';
import {MapComponent} from '../map/map.component';
import {Post} from '../main/main.component';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './point.component.css']
})
export class PointComponent implements OnInit {
  onePoint = this.data.resetData();
  eventData: Post; /// uzywany tylko do określania położenia eventu na mapie dla nowego punktu
  eventId: number;
  pointId: string;
  isNew = false;
  @ViewChild('messages') messages: MessagesComponent;

  public isCollapsed = true;
  selectedFile: File = null;
  imagesToShow = [];
  currentDate = new Date();
  startDate = {'year': this.currentDate.getFullYear(), 'month': this.currentDate.getMonth() + 1, 'day': this.currentDate.getDate()};
  startTime = {'hour': this.currentDate.getHours(), 'minute': this.currentDate.getMinutes(), 'second': this.currentDate.getSeconds()};
  endDate = {'year': this.currentDate.getFullYear(), 'month': this.currentDate.getMonth() + 1, 'day': this.currentDate.getDate()};
  endTime = {'hour': this.currentDate.getHours(), 'minute': this.currentDate.getMinutes(), 'second': this.currentDate.getSeconds()};

  constructor(public data: DataService, private http: HttpService,
              private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    /// 'point/:eventId/:pointId'
    config.seconds = true;
    config.spinners = false;
  }

  @ViewChild('map') map: MapComponent;

  static addLeadingZero(x: number): string {
    if (x < 10) {
      return '0' + x;
    }
    return x.toString();
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
      this.messages.setMessage('Trwa dodawanie punktu...');
      if (!(this.isNew)) { // jeśli true to edycja punkt /// 'point/:eventId/:pointId'
        this.http.postPointEdit(this.pointId, this.onePoint, accessToken).subscribe(i => {
          window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/point/' + this.eventId + '/' + this.pointId, '_self');
        }, error => {
          console.log(error);
          this.messages.setError('Coś poszło nie tak!');
        });
      } else { //// jeśli false to nowy punkt
        this.http.postAddPointAdmin(this.onePoint, accessToken).subscribe(i => {
          window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/point/' + this.eventId + '/' + i.newPointId, '_self');
        }, error => {
          console.log(error);
          this.messages.setError('Coś poszło nie tak!');
        });
      }
    } else {
      this.messages.setError(this.data.error);
    }
  }

  deletePoint() {
    this.messages.setMessage('Trwa usuwanie punktu...');
    const accessToken = this.data.getAccessToken();
    this.http.postPointDelete(this.eventId, Number(this.pointId), accessToken).subscribe(i => {
      this.router.navigate(['/points/' + this.eventId], {relativeTo: this.route});
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  back() {
    this.router.navigate(['/points/' + this.eventId], {relativeTo: this.route});
  }

  async loadEventData() {
    await this.http.getEventAdminById(this.data.getAccessToken(), this.eventId).subscribe(i => {
      this.eventData = i;
      this.onePoint.place = this.eventData.place;
      this.map.markerMove(this.eventData.geographicCoordinate.latitude, this.eventData.geographicCoordinate.longitude);
    });
  }

  async loadPointData() {
    this.messages.setMessage('Trwa ładowanie punktu...');
    await this.http.getPointAdminById(this.eventId, Number(this.pointId), this.data.getAccessToken()).subscribe(i => {
      this.onePoint = i;
      const startDate = EventComponent.getDateFromMillis(i.startDate);
      const endDate = EventComponent.getDateFromMillis(i.endDate);
      this.startDate = {year: startDate.year, month: startDate.month, day: startDate.day};
      this.startTime = {hour: startDate.hour, minute: startDate.minute, second: startDate.second};
      this.endDate = {year: endDate.year, month: endDate.month, day: endDate.day};
      this.endTime = {hour: endDate.hour, minute: endDate.minute, second: endDate.second};
      this.loadPointImage();
      this.data.lat = i.geographicCoordinate.latitude;
      this.data.lng = i.geographicCoordinate.longitude;
      this.map.markerMove(this.onePoint.geographicCoordinate.latitude, this.onePoint.geographicCoordinate.longitude);
      this.messages.clearAll();
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  loadPointImage() {
    for (let i = 0; i < this.onePoint.imagesNumber; i++) {
      this.http.getPointImage(this.data.getAccessToken(), this.eventId, this.pointId, i).subscribe(image => {
        this.createImageFromBlob(image, i);
      }, error => {
        console.log(error);
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
    this.messages.setMessage('Trwa dodawanie zdjęcia...');
    const accessToken = this.data.getAccessToken();
    this.http.addImageToPoint(accessToken, this.eventId, Number(this.pointId), this.selectedFile).subscribe(i => {
      window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/point/' + this.eventId + '/' + this.pointId, '_self');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + PointComponent.addLeadingZero(date.month + 1) + '-' + PointComponent.addLeadingZero(date.day);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('eventId'));
      this.pointId = params.get('pointId');
      if (this.pointId === 'new') {
        this.isNew = true;
        this.loadEventData();
      } else {
        this.loadPointData();
      }
    });
  }

  deleteImage(index: number) {
    this.messages.setMessage('Trwa usuwanie zdjęcia...');
    const accessToken = this.data.getAccessToken();
    this.http.deletePointImage(index, this.eventId, this.onePoint.id, accessToken).subscribe(i => {
      this.imagesToShow.splice(index, 1);
      this.messages.setSuccess('Zdjęcie zostało usunięte.');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }
}

