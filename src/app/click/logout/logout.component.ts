import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private http: HttpService, private data: DataService, public tf: TrueFalseService) { }

  ngOnInit() {
  }

  logoutButton() {
    this.http.postLogoutAdmin(this.data.accessToken).subscribe(i => {
      console.log('Wylogowano: ' + i);
    }, logoutError => {
      console.log('Wylogowano');
      this.tf.logoutFunction();
      this.tf.login_show1 = true;
      this.tf.opis_show1 = true;
    });
  }

}
