import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../main/main.component';
import { TrueFalseService } from '../services/true-false.service';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public tf: TrueFalseService, public data: DataService, private http: HttpService,
    private route: ActivatedRoute, private router: Router, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    config.seconds = true;
    config.spinners = false;
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === 'new') {
        this.isNew = true;
        console.log('isNew: ' + this.isNew);
      } else {
        this.loadEventData(Number(id));
        console.log('isNew: ' + this.isNew);
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

  ngOnInit() {
    console.log('oninit');
  }


  async loadEventData(id: number) {
    await this.http.getEventAdminById(this.data.getAccessToken(), id).subscribe(i => {
      console.log(i);
      this.event = i;
      this.data.isMarkerVisible = true;
      const startDate = this.getDateFromMillis(i.startDate);
      const endDate = this.getDateFromMillis(i.endDate);
      this.startDate = { year: startDate.year, month: startDate.month, day: startDate.day };
      this.startTime = { hour: startDate.hour, minute: startDate.minute, second: startDate.second };
      this.endDate = { year: endDate.year, month: endDate.month, day: endDate.day };
      this.endTime = { hour: endDate.hour, minute: endDate.minute, second: endDate.second };
      console.log(this.startDate);
      console.log(this.endDate);
      console.log('Load Event');
      this.loadEventImages(id);
    });
  }

  loadEventImages(id: number) {
    console.log('Liczba zdjęć = ' + this.event.imagesNumber);
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
    const startDate = new Date(this.getDateAsUTC(this.startDate, this.startTime));
    const endDate = new Date(this.getDateAsUTC(this.endDate, this.startTime));
    this.event.startDate = startDate.getTime();
    this.event.endDate = endDate.getTime();
    const accessToken = this.data.getAccessToken();
    this.data.error = this.data.checkSyntax(this.event); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
    if (this.data.error === '') {
      if (!(this.isNew)) { // jeśli true to edycja eventu
        this.http.postEventEdit(this.event.id, this.event, accessToken).subscribe(i => {
          console.log('Edycja eventu: ' + i);
          window.open(window.location.origin + '/web/event/' + this.event.id, '_self');
        }, error => {
          console.log(error);
        });
      } else { //// jeśli false to nowy event
        this.http.postAddEventAdmin(this.event, accessToken).subscribe(i => {
          console.log('Dodano nowy event o ID: ' + i.newEventId);
          console.log(i);
          this.data.newEventId = i.newEventId;
          window.open(window.location.origin + '/web/event/' + i.newEventId, '_self');
        }, error => {
          console.log(error);
        });
      }
    }
  }

  private getDateAsUTC(date: { month: number; year: number; day: number }, time: { hour: number; minute: number; second: number }) {
    return date.year + '-' + EventComponent.addLeadingZero(date.month + 1) + '-' + EventComponent.addLeadingZero(date.day) +
      'T' + EventComponent.addLeadingZero(time.hour) + ':' + EventComponent.addLeadingZero(time.minute)
      + ':' + EventComponent.addLeadingZero(time.second);
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

  fileAdd(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  addImage() {
    console.log(this.selectedFile);
    this.http.addImageToEvent(this.data.getAccessToken(), this.event.id, this.selectedFile).subscribe(i => {
      console.log(i);
      window.open(window.location.origin + '/event/' + this.event.id, '_self');
    }, error => {
      console.log(error);
    });
  }

  editPoints() {
    console.log('Point eddit/add init: ' + this.event.id);
    this.router.navigate(['/points/' + this.event.id], { relativeTo: this.route });
  }

  deleteEvent() {
    const accessToken = this.data.getAccessToken();
    this.http.postEventDelete(this.event.id, accessToken).subscribe(i => {
      console.log('Usunięto event: ' + this.event.id);
      this.router.navigate(['/main'], { relativeTo: this.route });
    }, error => {
      console.log(error);
    });
  }

  back() {
    this.router.navigate(['/main'], { relativeTo: this.route });
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + EventComponent.addLeadingZero(date.month + 1) + '-' + EventComponent.addLeadingZero(date.day);
  }
}
