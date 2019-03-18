import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private tf: TrueFalseService) { }

  ngOnInit() {
  }

  backButton() {
    this.tf.navigation_c_show_buttons = true;
    this.tf.eddit_nav_show = false;
    this.tf.edit_event_show1 = false;
    this.tf.edit_event_show2 = false;
  }

}
