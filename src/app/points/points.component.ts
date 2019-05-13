import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../main/main.component';
import { HttpService } from '../services/http.service';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointsComponent {
  eventId: number;
  pointsList: Array<Post>;

  constructor(private data: DataService, private http: HttpService,
     private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    this.route.paramMap.subscribe(params => {
      this.eventId = Number(params.get('id'));
      console.log('points component: ' + this.eventId);
    });
    this.loadPoints();
  }
  async loadPoints() {
    await this.http.getEventsPointsAdmin(this.data.getAccessToken(), this.eventId).subscribe(i => {
      this.pointsList = i;
      console.log(i);
    });
  }
  openNewPoint() {
    this.router.navigate(['/point/' + this.eventId + '/new'], { relativeTo: this.route});
  }

  deletePoint(id: number) {
    console.log('Delete point ' + id);
    this.http.postPointDelete(this.eventId, id, this.data.getAccessToken()).subscribe(i => {
      console.log(i);
      this.loadPoints();
    }, error => {
      console.log(error);
    });
  }

  back() {
    this.router.navigate(['/event/' + this.eventId], { relativeTo: this.route });
  }
}
