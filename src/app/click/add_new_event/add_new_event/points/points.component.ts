import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Post } from 'src/app/app.component';
import { HttpService } from 'src/app/services/http.service';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {
  point: Post;
  pointList: Array<Post> = [];
  error: string;
  constructor(public data: DataService, private cords: DataService, private http: HttpService, public tf: TrueFalseService) {
    this.resetPoint();
    this.error = '';
  }

  addPointToEvent(): void {
    this.point.geographicCoordinate.latitude = this.cords.lat;
    this.point.geographicCoordinate.longitude = this.cords.lng;
    this.point.eventId = this.data.newEventId;
    this.error = this.data.checkSyntax(this.point);
    if (this.error === '') {
      this.pointList.push(this.point);
      this.resetPoint();
      this.cords.clearCords();
    }
  }
  deletePointFromList(point1: Post) {
    this.pointList = this.pointList.filter(e => e !== point1);
  }

  addPointEventToServer() {
    const accessToken = this.data.accessToken;
    for (this.point of this.pointList) {
      console.log(this.point);
      this.http.postAddPointAdmin(this.point, accessToken).subscribe(i => {
        console.log(i);
      });
    }
    this.tf.navigation_c_show_buttons = true;
    this.tf.add_point_show1 = false;
    this.tf.add_point_show2 = false;
  }

  ngOnInit() {
  }

  resetPoint() {
    this.point = ({
      name: '', description: '', place: '',
      geographicCoordinate: { latitude: 0, longitude: 0 }, startDate: 1, endDate: 1, eventId: this.data.newEventId
    });
  }
}
