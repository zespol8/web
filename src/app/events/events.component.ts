import {Component, OnInit} from '@angular/core';
import {Post} from '../main/main.component';
import {TrueFalseService} from '../services/true-false.service';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventComponent} from '../event/event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService,
              private router: Router, private route: ActivatedRoute) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
  }

  eventList: Array<Post> = [];
  eventsFirstImages = [];

  public static compareDates(date1: number, date2: number) {
    if (date1 > date2) {
      return 1;
    }
    if (date1 < date2) {
      return -1;
    }
    return 0;
  }

  async loadEvents() {
    await this.http.getEventsAdmin(this.data.getAccessToken()).subscribe(i => {
      this.eventList = i.sort((a, b) => EventsComponent.compareDates(a.startDate, b.startDate));
      this.loadEventsFirstImages();
    });
  }

  private loadEventsFirstImages() {
    this.eventList.forEach(post => {
      this.http.getEventImage(this.data.getAccessToken(), post.id, 0).subscribe(success => {
        this.createImageFromBlob(success, post.id);
      });
    });
  }

  createImageFromBlob(image: Blob, eventId: number) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.eventsFirstImages[eventId] = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  ngOnInit() {
    this.loadEvents();
  }

  deleteEvent(id: number) {
    this.http.postEventDelete(id, this.data.getAccessToken()).subscribe(i => {
      this.loadEvents();
    });
  }

  eventDetails(id: number) {
    this.router.navigate(['/event/' + id], {relativeTo: this.route});
  }

  getDate(millis: number) {
    const date = new Date(millis);
    return date.getFullYear() + '-' + EventComponent.addLeadingZero(date.getMonth() + 1) + '-' +
      EventComponent.addLeadingZero(date.getDate()) + ' ' + EventComponent.addLeadingZero(date.getHours())
      + ':' + EventComponent.addLeadingZero(date.getMinutes());
  }

  altImage(id: number) {
    // tslint:disable-next-line:max-line-length
    this.eventsFirstImages[id] = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMwMHB4IiB3aWR0aD0iMzAwcHgiIHZlcnNpb249IjEuMCIgdmlld0JveD0iLTMwMCAtMzAwIDYwMCA2MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Y2lyY2xlIHN0cm9rZT0iI0FBQSIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMjgwIiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHN0eWxlPSJsZXR0ZXItc3BhY2luZzoxO3RleHQtYW5jaG9yOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjtzdHJva2Utb3BhY2l0eTouNTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6MjtmaWxsOiM0NDQ7Zm9udC1zaXplOjM2MHB4O2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnMsTGliZXJhdGlvbiBTYW5zLCBBcmlhbCwgc2Fucy1zZXJpZjtsaW5lLWhlaWdodDoxMjUlO3dyaXRpbmctbW9kZTpsci10YjsiIHRyYW5zZm9ybT0ic2NhbGUoLjIpIj4KPHRzcGFuIHk9Ii00MCIgeD0iOCI+Tk8gSU1BR0U8L3RzcGFuPgo8dHNwYW4geT0iNDAwIiB4PSI4Ij5BVkFJTEFCTEU8L3RzcGFuPgo8L3RleHQ+Cjwvc3ZnPg==';
  }

  isPast(date: Number) {
    return date < new Date().getTime();
  }

}
