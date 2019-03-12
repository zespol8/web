import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';
import { Post } from 'src/app/app.component';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  eventList: Array<Post> = [];
  constructor(private tf: TrueFalseService, private http: HttpService, private data: DataService) {
  }

  lookButton() {
    const accesToken = this.data.accessToken;
    this.http.getEventsAdmin(accesToken).subscribe(i => {
      this.eventList = i;
    });
    console.log(this.eventList);
    this.tf.eddit_show2 = true;
  }

  backButton() {
    this.tf.navigation_c_show_buttons = true;
    this.tf.eddit_show1 = false;
  }

  ngOnInit() {
  }

}
