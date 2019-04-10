import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/app.component';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-add-new-event',
  templateUrl: './add-new-event.component.html',
  styleUrls: ['./add-new-event.component.css']
})
export class AddNewEventComponent implements OnInit {
  data: Post = ({name: '', description: '', place: '', geographicCoordinate: {}, endDate: 1, startDate: 1 });

  constructor(private cords: DataService, private http: HttpService, public tf: TrueFalseService) { }
  ngOnInit() {
  }
  onButtonClick(x): void {
    if (x === 1) {
      this.data.geographicCoordinate.latitude = this.cords.lat;
      this.data.geographicCoordinate.longitude = this.cords.lng;
      const accessToken = this.cords.accessToken;
      this.cords.error = this.cords.checkSyntax(this.data); //  SPRAWDZANIE POPRAWNOSCI W INPUTACH
      if (this.cords.error === '') {
        this.http.postAddEventAdmin(this.data, accessToken).subscribe(i => {
          this.cords.newEventId = i.newEventId;
        });
        this.cords.clearCords();
        this.tf.add_point_show1 = true;
        this.tf.add_point_show2 = false;
      }

    } else {
      this.tf.navigation_c_add = false;
      this.tf.navigation_c_show_buttons = true;
    }
  }

}
