import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrueFalseService {
  constructor() { }
  click_c_show1 = true;
  click_c_show2 = false;
  map_c_show = false;
  navigation_c_show_buttons = true;
  navigation_c_add = false;
  add_point_show1 = false;
  add_point_show2 = true;
  eddit_show1 = false;
  eddit_show2 = false;

  eddit_nav_show = false;
  edit_event_show1 = false;
  edit_event_show2 = false;

  login_show = true;
  register_show1 = true;
  register_show2 = false;
}
