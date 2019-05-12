import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Post } from '../main/main.component';
import { HttpService } from '../services/http.service';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointsComponent {
  eventId: string;
  pointsList: Array<Post>;

  constructor(private data: DataService, private http: HttpService,
     private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
    if (!data.isLoggedIn()) {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('id');
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
  openNevPoint() {
    console.log('New point');
  }
  back() {
    this.router.navigate(['/event/' + this.eventId], { relativeTo: this.route });
  }
}
