import {Component, isDevMode, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../main/main.component';
import {TrueFalseService} from '../services/true-false.service';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../map/map.component';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public tf: TrueFalseService, public data: DataService, private http: HttpService,
              private route: ActivatedRoute, private router: Router, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    config.seconds = true;
    config.spinners = false;
  }

  @ViewChild('messages') messages: MessagesComponent;
  event = this.data.resetData();
  onePoint: Post = {};
  isNew = false;
  public isCollapsed = true;
  selectedFile: File = null;
  imagesToShow = [];
  currentDate = new Date();
  startDate = {'year': this.currentDate.getFullYear(), 'month': this.currentDate.getMonth() + 1, 'day': this.currentDate.getDate()};
  startTime = {'hour': this.currentDate.getHours(), 'minute': this.currentDate.getMinutes(), 'second': this.currentDate.getSeconds()};
  endDate = {'year': this.currentDate.getFullYear(), 'month': this.currentDate.getMonth() + 1, 'day': this.currentDate.getDate()};
  endTime = {'hour': this.currentDate.getHours(), 'minute': this.currentDate.getMinutes(), 'second': this.currentDate.getSeconds()};
  @ViewChild('map') map: MapComponent;

  static addLeadingZero(x: number): string {
    if (x < 10) {
      return '0' + x;
    }
    return x.toString();
  }

  public static getDateAsUTC(date: { month: number; year: number; day: number }, time: { hour: number; minute: number; second: number }) {
    return date.year + '-' + EventComponent.addLeadingZero(date.month) + '-' + EventComponent.addLeadingZero(date.day) +
      'T' + EventComponent.addLeadingZero(time.hour - 2) + ':' + EventComponent.addLeadingZero(time.minute)
      + ':' + EventComponent.addLeadingZero(time.second);
  }

  public static getDateFromMillis(millis: number): {
    month: number; year: number; day: number;
    hour: number; minute: number; second: number
  } {
    const date = new Date(millis);
    return {
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === 'new') {
        this.isNew = true;
      } else {
        this.loadEventData(Number(id));
      }
    });
  }


  async loadEventData(id: number) {
    this.messages.setMessage('Trwa ładowanie wydarzenia...');
    await this.http.getEventAdminById(this.data.getAccessToken(), id).subscribe(i => {
      this.event = i;
      this.map.markerMove(i.geographicCoordinate.latitude, i.geographicCoordinate.longitude);
      this.data.lat = i.geographicCoordinate.latitude;
      this.data.lng = i.geographicCoordinate.longitude;
      this.data.isMarkerVisible = true;
      const startDate = EventComponent.getDateFromMillis(i.startDate);
      const endDate = EventComponent.getDateFromMillis(i.endDate);
      this.startDate = {year: startDate.year, month: startDate.month, day: startDate.day};
      this.startTime = {hour: startDate.hour, minute: startDate.minute, second: startDate.second};
      this.endDate = {year: endDate.year, month: endDate.month, day: endDate.day};
      this.endTime = {hour: endDate.hour, minute: endDate.minute, second: endDate.second};
      this.loadEventImages(id);
      this.messages.clearAll();
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  loadEventImages(id: number) {
    for (let i = 0; i < this.event.imagesNumber; i++) {
      this.http.getEventImage(this.data.getAccessToken(), id, i).subscribe(image => {
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

  addEvent() {
    this.event.geographicCoordinate.latitude = this.data.lat;
    this.event.geographicCoordinate.longitude = this.data.lng;
    const startDate = new Date(EventComponent.getDateAsUTC(this.startDate, this.startTime));
    const endDate = new Date(EventComponent.getDateAsUTC(this.endDate, this.endTime));
    this.event.startDate = startDate.getTime();
    this.event.endDate = endDate.getTime();
    const accessToken = this.data.getAccessToken();
    this.data.error = this.data.checkSyntax(this.event); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
    if (this.data.error === '') {
      if (!(this.isNew)) { // jeśli true to edycja eventu
        this.messages.setMessage('Trwa edytowanie wydarzenia...');
        this.http.postEventEdit(this.event.id, this.event, accessToken).subscribe(i => {
          window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/event/' + this.event.id, '_self');
        }, error => {
          console.log(error);
          this.messages.setError('Coś poszło nie tak!');
        });
      } else { //// jeśli false to nowy event
        this.messages.setMessage('Trwa dodawanie wydarzenia...');
        this.http.postAddEventAdmin(this.event, accessToken).subscribe(i => {
          this.data.newEventId = i.newEventId;
          window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/event/' + i.newEventId, '_self');
        }, error => {
          console.log(error);
          this.messages.setError('Coś poszło nie tak!');
        });
      }
    } else {
      this.messages.setError(this.data.error);
    }
  }

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addImage() {
    this.messages.setMessage('Trwa dodawanie zdjęcia...');
    this.http.addImageToEvent(this.data.getAccessToken(), this.event.id, this.selectedFile).subscribe(i => {
      window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/event/' + this.event.id, '_self');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  editPoints() {
    this.router.navigate(['/points/' + this.event.id], {relativeTo: this.route});
  }

  deleteEvent() {
    this.messages.setMessage('Trwa usuwanie wydarzenia...');
    const accessToken = this.data.getAccessToken();
    this.http.postEventDelete(this.event.id, accessToken).subscribe(i => {
      this.router.navigate(['/main'], {relativeTo: this.route});
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  back() {
    this.router.navigate(['/main'], {relativeTo: this.route});
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + EventComponent.addLeadingZero(date.month + 1) + '-' + EventComponent.addLeadingZero(date.day);
  }

  deleteImage(index: number) {
    this.messages.setMessage('Trwa usuwanie zdjęcia...');
    const accessToken = this.data.getAccessToken();
    this.http.deleteEventImage(index, this.event.id, accessToken).subscribe(i => {
      this.imagesToShow.splice(index, 1);
      this.messages.setSuccess('Zdjęcie zostało usunięte.');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }
}
