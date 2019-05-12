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

  eventList: Array<Post> = [];
  eventsFirstImages = [];

  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService,
              private router: Router, private route: ActivatedRoute) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    this.loadEvents();
  }

  async loadEvents() {
    await this.http.getEventsAdmin(this.data.getAccessToken()).subscribe(i => {
      this.eventList = i;
      this.loadEventsFirstImages();
    });
  }

  private loadEventsFirstImages() {
    this.eventList.forEach(post => {
      console.log(post);
      this.http.getEventImage(this.data.getAccessToken(), post.id, 0).subscribe(success => {
        console.log(success);
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
  }

  deleteEvent(id: number) {
    this.http.postEventDelete(id, this.data.getAccessToken()).subscribe(i => {
      console.log(i);
      this.loadEvents();
    });
  }

  eventDetails(id: number) {
    this.router.navigate(['/event/' + id], {relativeTo: this.route});
  }

  getDate(millis: number) {
    const date = new Date(millis);
    return date.getFullYear() + '-' + EventComponent.addLeadingZero(date.getMonth() + 1) + '-' + EventComponent.addLeadingZero(date.getDay()) + ' ' + EventComponent.addLeadingZero(date.getHours()) + ':' + EventComponent.addLeadingZero(date.getMinutes());
  }

}
