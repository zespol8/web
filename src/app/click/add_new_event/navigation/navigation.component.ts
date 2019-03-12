import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private tf: TrueFalseService) { }

  add_n_button() {
    this.tf.navigation_c_add = true;
    this.tf.navigation_c_show_buttons = false;
    this.tf.add_point_show2 = true;
  }
  edit_button() { // Dorobienie edycji
    this.tf.navigation_c_show_buttons = false;
    this.tf.eddit_show1 = true;
  }

  ngOnInit() {
  }

}
