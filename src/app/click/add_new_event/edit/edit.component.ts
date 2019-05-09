import {Component, OnInit} from '@angular/core';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {HttpService} from 'src/app/services/http.service';
import {DataService} from 'src/app/services/data.service';
import {Post} from '../../../main/main.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  eventList: Array<Post> = [];

  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService) {
  }

  lookButton() {
    console.log('Nowa lista');
    this.http.getEventsAdmin(this.data.getAccessToken()).subscribe(i => {
      this.eventList = i;
    });
  }

  deleteEvent(id: number) {
    this.http.postEventDelete(id, this.data.getAccessToken()).subscribe(i => {
      console.log(i);
    });
    setTimeout(() => this.lookButton(), 2000); // Poprawić timeout czekania na nowa liste.
  }

  editEvent(id: number): void {
    this.data.newEventId = id;
    this.tf.edit_event_show2 = true;
    this.tf.edit_event_show1 = false;
    this.tf.edit_picked_event = true;
  }

  backButton() {
    this.tf.navigation_c_show_buttons = true;
    this.tf.eddit_nav_show = false;
    this.tf.edit_event_show1 = false;
    this.tf.edit_event_show2 = false;
  }

  ngOnInit() {
    console.log('Nowa lista');
    this.http.getEventsAdmin(this.data.getAccessToken()).subscribe(i => {
      this.eventList = i;
    });
  }
}
