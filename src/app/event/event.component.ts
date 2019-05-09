import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../main/main.component';
import {TrueFalseService} from '../services/true-false.service';
import {DataService} from '../services/data.service';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css', './event.component.css']
})
export class EventComponent implements OnInit {

  event = this.data.resetData();
  onePoint: Post = {};
  pointList: Array<Post> = [];
  isNew = false;

  constructor(public tf: TrueFalseService, private data: DataService, private http: HttpService,
    private route: ActivatedRoute, private router: Router) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id === 'new') {
        this.isNew = true;
      } else {
        this.loadEventData(Number(id));
      }
    });
  }

  ngOnInit() {

  }

  private loadEventData(id: number) {
    this.http.getEventAdminById(this.data.getAccessToken(), id).subscribe(i => {
      console.log(i);
      this.event = i;
      this.data.isMarkerVisible = true;
    });
  }

  addEvent() {
    this.event.geographicCoordinate.latitude = this.data.lat;
    this.event.geographicCoordinate.longitude = this.data.lng;
    const accessToken = this.data.getAccessToken();
    this.data.error = this.data.checkSyntax(this.event); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
    if (this.data.error === '') {
      console.log(this.event);
      this.http.postAddEventAdmin(this.event, accessToken).subscribe(i => {
        console.log('Dodano nowy event o ID: ' + i.eventId);
        this.data.newEventId = i.newEventId;
        this.router.navigate(['/event/' + i.newEventId], {relativeTo: this.route});
      }, error => {
        console.log(error);
      });
    }
  }

  back() {
    this.router.navigate(['/main'], {relativeTo: this.route});
  }
}
