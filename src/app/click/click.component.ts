import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {DataService} from '../services/data.service';
import {TrueFalseService} from '../services/true-false.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  show1: boolean;
  show2: boolean;

  constructor(private http: HttpService, public accessToken: DataService, public tf: TrueFalseService) {
    this.tf.click_c_show1 = true;
    this.tf.click_c_show2 = false;
    this.tf.click_c_show1 = false;
    this.tf.click_c_show2 = true;
    this.tf.map_c_show = true;
  }

  ngOnInit() {
  }
}
