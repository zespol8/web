import {Component, OnInit} from '@angular/core';
import {Post} from '../main/main.component';
import {TrueFalseService} from '../services/true-false.service';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './events.component.css']
})
export class EventsComponent implements OnInit {

  eventList: Array<Post> = [];
  pointList: Array<Post> = [];
  accesToken = this.data.accessToken;

  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService, private router: Router, private route: ActivatedRoute) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    this.loadEvents();
  }

  private loadEvents() {
    this.http.getEventsAdmin(this.accesToken).subscribe(i => {
      this.eventList = i;
    });
  }

  ngOnInit() {
  }

  deleteEvent(id: number) {
    this.http.postEventDelete(id, this.accesToken).subscribe(i => {
      console.log(i);
    });
  }

  eventDetails(id: number) {
    this.router.navigate(['/event/' + id], {relativeTo: this.route});
  }
}
