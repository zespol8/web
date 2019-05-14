import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../main/main.component';
import {TrueFalseService} from '../services/true-false.service';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {MapComponent} from '../map/map.component';

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
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === 'new') {
        this.isNew = true;
      } else {
        this.loadEventData(Number(id));
      }
    });
  }

  event = this.data.resetData();
  onePoint: Post = {};
  pointList: Array<Post> = [];
  isNew = false;
  public isCollapsed = true;
  selectedFile: File = null;
  imagesToShow = [];
  startDate = {'year': 2019, 'month': 5, 'day': 9};
  startTime = {'hour': 13, 'minute': 30, 'second': 0};
  endDate = {'year': 2019, 'month': 5, 'day': 9};
  endTime = {'hour': 13, 'minute': 30, 'second': 0};
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

  public static getDateFromMillis(millis: number): { month: number; year: number; day: number; hour: number; minute: number; second: number } {
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
  }


  async loadEventData(id: number) {
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
    });
  }

  loadEventImages(id: number) {
    for (let i = 0; i < this.event.imagesNumber; i++) {
      this.http.getEventImage(this.data.getAccessToken(), id, i).subscribe(image => {
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
        this.http.postEventEdit(this.event.id, this.event, accessToken).subscribe(i => {
          window.open(window.location.origin + '/event/' + this.event.id, '_self');
        }, error => {
        });
      } else { //// jeśli false to nowy event
        this.http.postAddEventAdmin(this.event, accessToken).subscribe(i => {
          this.data.newEventId = i.newEventId;
          window.open(window.location.origin + '/event/' + i.newEventId, '_self');
        }, error => {
        });
      }
    }
  }

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addImage() {
    this.http.addImageToEvent(this.data.getAccessToken(), this.event.id, this.selectedFile).subscribe(i => {
      window.open(window.location.origin + '/event/' + this.event.id, '_self');
    }, error => {
    });
  }

  editPoints() {
    this.router.navigate(['/points/' + this.event.id], {relativeTo: this.route});
  }

  deleteEvent() {
    const accessToken = this.data.getAccessToken();
    this.http.postEventDelete(this.event.id, accessToken).subscribe(i => {
      this.router.navigate(['/main'], {relativeTo: this.route});
    }, error => {
    });
  }

  back() {
    this.router.navigate(['/main'], {relativeTo: this.route});
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + EventComponent.addLeadingZero(date.month + 1) + '-' + EventComponent.addLeadingZero(date.day);
  }
}
