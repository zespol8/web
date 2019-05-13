import {Component, OnInit} from '@angular/core';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import {Post} from '../../../../main/main.component';


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

  constructor(public tf: TrueFalseService, private data: DataService, private http: HttpService) {
  }

  ngOnInit() {

    this.http.getEventAdminById(this.data.getAccessToken(), this.data.newEventId).subscribe(i => {
      this.event = i;
      console.log(this.data.newEventId);
      console.log(this.event);
    });
  }

  editEventButton() { // Zawtierdznie edycji danego eventu bez edycji punktów
    this.data.error = this.data.checkSyntax(this.event);
    if (this.data.error === '') {
      this.http.postEventEdit(this.data.newEventId, this.event, this.data.getAccessToken()).subscribe(i => {
        console.log('Edycja eventu bez edycji punktów: ' + i);
      });
      this.tf.edit_event_show1 = true;
      this.tf.edit_event_show2 = false;
    }
  }

  editPointsButton() { // Zatwierdzenie edycji eventu i edycje jego punktów
    this.data.error = this.data.checkSyntax(this.event);
    if (this.data.error === '') {
      this.http.postEventEdit(this.data.newEventId, this.event, this.data.getAccessToken()).subscribe(i => {
        console.log('Edycja eventu z punktami: ' + i);
        this.tf.edit_picked_event = false;
        this.tf.edit_picked_event_points = true;
      });
      this.look();
    }
  }

  look() { // Odswiezanie listy punktow dla danego eventu
    this.tf.showListOfPoints = true;
  }

  editPoint(id: number) { // Edycja danego punktu
    this.tf.showListOfPoints = false;
    this.nr = id;
    this.http.getPointAdminById(this.data.newEventId, this.nr, this.data.getAccessToken()).subscribe(i => {
      this.onePoint = i;
      this.data.onePoint = this.onePoint;
      console.log('Wybrany punkt do edycji: ' + this.onePoint.name);
    });
    this.tf.edit_one_point = true;
    this.tf.edit_picked_event_points = false;
  }

  editPointConfirm() { // Zatwierdzenie edycji wybranego punktu
    this.data.error = this.data.checkSyntax(this.onePoint);
    this.onePoint.eventId = this.event.id;
    if (this.data.error === '') {
      this.http.postPointEdit(this.onePoint.id, this.onePoint, this.data.getAccessToken()).subscribe(i => {
        console.log('Edycja pojedynczego punktu zakonczona: ' + i);
        this.look();
      });
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
      this.http.postAddPointAdmin(this.onePoint, this.data.getAccessToken()).subscribe(i => {
        console.log(i);
        this.look();
      });
      this.tf.edit_one_point = false;
      this.tf.edit_picked_event_points = true;
      this.tf.edit_picked_event_add_new_point = false;
    }
  }

  deletePoint(nr: number) { // Usuwanie wybranego punktu z wybranego eventu
  }

  addNewPointButton() {
    this.onePoint = this.data.resetData();
    this.tf.edit_picked_event_add_new_point = true;
    this.tf.edit_picked_event_points = false;
  }

  cancelEditPoint() {
    this.tf.showListOfPoints = true; // pokaż z powrotem punkty na mapie

    this.tf.edit_one_point = false;
    this.tf.edit_picked_event_points = true;
    this.tf.edit_picked_event_add_new_point = false;
  }

  backButton() { // Cofa do wyboru eventu bez zatwierdzenia punków
    this.tf.showListOfPoints = false;
    this.tf.edit_picked_event_points = false;
    this.tf.edit_event_show1 = true;
    this.tf.edit_event_show2 = false;
  }

  confirmAndBackListOfAll() { // Cofa do wyboru eventu ale zatwierdza zmiany po przesunieciu punktów
    this.data.listOfAll.forEach(element => {
      element.eventId = this.data.newEventId;
    });
    this.data.listOfAll.forEach(element => {
      this.http.postPointEdit(element.id, element, this.data.getAccessToken()).subscribe(i => {
        console.log(i);
        this.data.error = '';
      }, error => {
        console.log(error);
      });
    });
    this.tf.edit_picked_event_points = false;
    this.tf.edit_event_show1 = true;
    this.tf.edit_event_show2 = false;
  }
}
