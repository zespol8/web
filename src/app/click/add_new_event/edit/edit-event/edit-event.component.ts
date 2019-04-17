import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';
import { Post } from 'src/app/app.component';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: Post = {};
  onePoint: Post = {};
  pointList: Array<Post> = [];
  nr: number;
  constructor(public tf: TrueFalseService, private data: DataService, private http: HttpService) { }

  ngOnInit() {

    this.http.getEventAdminById(this.data.accessToken, this.data.newEventId).subscribe(i => {
      this.event = i;
      console.log(this.data.newEventId);
      console.log(this.event);
    });
  }

  editEventButton() { // Zawtierdznie edycji danego eventu bez edycji punktów
    this.data.error = this.data.checkSyntax(this.event);
    if (this.data.error === '') {
      this.http.postEventEdit(this.data.newEventId, this.event, this.data.accessToken).subscribe(i => {
        console.log('Edycja eventu bez edycji punktów: ' + i);
      });
      this.tf.edit_event_show1 = true;
      this.tf.edit_event_show2 = false;
    }
  }

  editPointsButton() { // Zatwierdzenie edycji eventu i edycje jego punktów
    this.data.error = this.data.checkSyntax(this.event);
    if (this.data.error === '') {
      this.http.postEventEdit(this.data.newEventId, this.event, this.data.accessToken).subscribe(i => {
        console.log('Edycja eventu z punktami: ' + i);
        this.tf.edit_picked_event = false;
        this.tf.edit_picked_event_points = true;
      });
      this.look();
    }
  }

  look() { // Odswiezanie listy punktow dla danego eventu
    this.http.getEventsPointsAdmin(this.data.accessToken, this.data.newEventId).subscribe(i => {
      this.pointList = i;
      console.log('Wczytanie punktów eventu: ' + this.data.newEventId);
    });
  }

  editPoint(id: number) { // Edycja danego punktu
    this.nr = id;
    this.http.getPointAdminById(this.data.newEventId, this.nr, this.data.accessToken).subscribe(i => {
      this.onePoint = i;
      console.log('Wybrany punkt do edycji: ' + this.onePoint.name);
    });
    this.tf.edit_one_point = true;
    this.tf.edit_picked_event_points = false;
  }

  editPointConfirm() {
    this.data.error = this.data.checkSyntax(this.onePoint);
    this.onePoint.eventId = this.event.id;
    if (this.data.error === '') {
      this.http.postPointEdit(this.onePoint.id, this.onePoint, this.data.accessToken).subscribe(i => {
        console.log('Edycja pojedynczego punktu zakonczona: ' + i);
        this.look();
      });
      // setTimeout(() => this.look(), 2000);
      this.tf.edit_one_point = false;
      this.tf.edit_picked_event_points = true;
    }
  }

  addNewPoint() {
    this.onePoint.eventId = this.event.id;
    this.onePoint.geographicCoordinate.latitude = this.data.lat;
    this.onePoint.geographicCoordinate.longitude = this.data.lng;
    this.data.error = this.data.checkSyntax(this.onePoint);
    if (this.data.error === '') {
      this.http.postAddPointAdmin(this.onePoint, this.data.accessToken).subscribe(i => {
        console.log(i);
        this.look();
      });
      this.tf.edit_one_point = false;
      this.tf.edit_picked_event_points = true;
      this.tf.edit_picked_event_add_new_point = false;
    }
  }

  deletePoint(nr: number) { // Usuwanie wybranego punktu z wybranego eventu
    this.http.postPointDelete(this.data.newEventId, nr, this.data.accessToken).subscribe(i => {
      console.log('Usuwanie punktu: ' + i);
      this.look();
    });
  }

  addNewPointButton() {
    this.onePoint = this.data.resetData();
    this.tf.edit_picked_event_add_new_point = true;
    this.tf.edit_picked_event_points = false;
  }

  cancelEditPoint() {
    this.tf.edit_one_point = false;
    this.tf.edit_picked_event_points = true;
    this.tf.edit_picked_event_add_new_point = false;
  }

  backButton() {
    this.tf.edit_picked_event_points = false;
    this.tf.edit_event_show1 = true;
    this.tf.edit_event_show2 = false;
  }

}
