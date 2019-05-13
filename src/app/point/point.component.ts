import { Component, OnInit } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { Post } from '../main/main.component';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class PointComponent {
  onePoint = this.data.resetData();
  eventId: number;
  pointId: string;
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

  constructor(private data: DataService, private http: HttpService,
    private router: Router, private route: ActivatedRoute, config: NgbTimepickerConfig) {
      if (!data.isLoggedIn()) {
        this.router.navigate(['/login'], { relativeTo: this.route });
      }
      console.log(this.onePoint);
      /// 'point/:eventId/:pointId',
      config.seconds = true;
      config.spinners = false;
      this.route.paramMap.subscribe(params => {
        this.eventId = Number(params.get('eventId'));
        this.pointId = params.get('pointId');
        if (this.pointId === 'new') {
          this.isNew = true;
          console.log('isNew: ' + this.isNew);
        } else {
          this.loadPointData();
          console.log('isNew: ' + this.isNew);
        }
      });
     }

  loadPointData() {
    console.log('LoadEvent');
    this.http.getPointAdminById(this.eventId, Number(this.pointId), this.data.getAccessToken()). subscribe(i => {
      this.onePoint = i;
      console.log(i);
    }, error => {
      console.log(error);
    });
  }

  getDate(date: { month: number; year: number; day: number }) {
    return date.year + '-' + PointComponent.addLeadingZero(date.month + 1) + '-' + PointComponent.addLeadingZero(date.day);
  }

}

