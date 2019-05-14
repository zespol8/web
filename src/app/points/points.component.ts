import { Component, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../main/main.component';
import { HttpService } from '../services/http.service';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointsComponent {
  eventId: number;
  pointsList: Array<Post>;
  eventPoint: Post;


  constructor(private data: DataService, private http: HttpService,
    private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('id'));
    });
    this.loadPoints();
  }

  @ViewChild('map') map: MapComponent;

  async loadPoints() {
    await this.http.getEventAdminById(this.data.getAccessToken(), this.eventId).subscribe(i => {
      this.eventPoint = i;
      this.http.getEventsPointsAdmin(this.data.getAccessToken(), this.eventId).subscribe(j => {
        this.pointsList = j;
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
    this.router.navigate(['/point/' + this.eventId + '/new'], { relativeTo: this.route });
  }

  deletePoint(id: number) {
    this.http.postPointDelete(this.eventId, id, this.data.getAccessToken()).subscribe(i => {
      this.loadPoints();
    }, error => {
    });
  }

  pointDetails(id: number) {
    this.router.navigate(['/point/' + this.eventId + '/' + id], { relativeTo: this.route });
  }

  back() {
    this.router.navigate(['/event/' + this.eventId], { relativeTo: this.route });
  }
}
