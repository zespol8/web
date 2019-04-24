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

  /// logowanie i rejstracja
  login_show = true;
  register_show1 = true;
  register_show2 = false;
  register_show3 = true;

  /// app-edit-event
  edit_picked_event = false;
  edit_picked_event_points = false;
  edit_one_point = false;
  edit_picked_event_add_new_point = false; // dodaj nowy punkt do eventu

  logoutButtonShow = false;

  logoutFunction() {
    this.click_c_show1 = true;
    this.click_c_show2 = false;
    this.map_c_show = false;
    this.navigation_c_show_buttons = true;
    this.navigation_c_add = false;
    this.add_point_show1 = false;
    this.add_point_show2 = true;
    this.eddit_show1 = false;
    this.eddit_show2 = false;

    this.eddit_nav_show = false;
    this.edit_event_show1 = false;
    this.edit_event_show2 = false;

    this.login_show = true;
    this.register_show1 = true;
    this.register_show2 = false;

    /// app-edit-event
    this.edit_picked_event = false;
    this.edit_picked_event_points = false;
    this.edit_one_point = false;

    this.logoutButtonShow = false;

    this.edit_picked_event_add_new_point = false;
  }
}
