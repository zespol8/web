import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../services/data.service';
import {Post} from '../main/main.component';
import {HttpService} from '../services/http.service';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {MapComponent} from '../map/map.component';
import {EventComponent} from '../event/event.component';
import {EventsComponent} from '../events/events.component';
import {MessagesComponent} from '../messages/messages.component';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointsComponent implements OnInit {
  eventId: number;
  pointsList: Array<Post>;
  eventPoint: Post;
  @ViewChild('messages') messages: MessagesComponent;

  constructor(private data: DataService, private http: HttpService,
              private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('id'));
    });
  }

  @ViewChild('map') map: MapComponent;

  async loadPoints() {
    this.messages.setMessage('Trwa wczytawanie punktów...');
    await this.http.getEventAdminById(this.data.getAccessToken(), this.eventId).subscribe(i => {
      this.eventPoint = i;
      this.http.getEventsPointsAdmin(this.data.getAccessToken(), this.eventId).subscribe(j => {
        this.pointsList = j.sort((a, b) => EventsComponent.compareDates(a.startDate, b.startDate));
        this.map.setEventId(this.eventId.toString());
        if (this.pointsList.length === 0) {
          this.map.markerMove(this.eventPoint.geographicCoordinate.latitude, this.eventPoint.geographicCoordinate.longitude);
        } else {
          this.map.markerMove(this.eventPoint.geographicCoordinate.latitude, this.eventPoint.geographicCoordinate.longitude);
          this.map.setPointList(this.pointsList);
        }
      });
    });
  }

  openNewPoint() {
    this.router.navigate(['/point/' + this.eventId + '/new'], {relativeTo: this.route});
  }

  deletePoint(id: number) {
    this.messages.setMessage('Trwa usuwanie punktów...');
    this.http.postPointDelete(this.eventId, id, this.data.getAccessToken()).subscribe(i => {
      this.loadPoints();
      this.messages.setSuccess('Usunięto punkt.');
    }, error => {
      console.log(error);
      this.messages.setError('Coś poszło nie tak!');
    });
  }

  pointDetails(id: number) {
    this.router.navigate(['/point/' + this.eventId + '/' + id], {relativeTo: this.route});
  }

  back() {
    this.router.navigate(['/event/' + this.eventId], {relativeTo: this.route});
  }

  getDate(millis: number) {
    const date = new Date(millis);
    return date.getFullYear() + '-' + EventComponent.addLeadingZero(date.getMonth() + 1) + '-' +
      EventComponent.addLeadingZero(date.getDate()) + ' ' + EventComponent.addLeadingZero(date.getHours())
      + ':' + EventComponent.addLeadingZero(date.getMinutes());
  }

  ngOnInit(): void {
    this.loadPoints();
  }
}
