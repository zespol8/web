import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Post } from '../app.component';
import { DataService } from '../services/data.service';
import { TrueFalseService } from '../services/true-false.service';

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
  }
  loginButton() { // Przycisk do logowania
    const log: Post = ({
      email: 'g@gmail.com',
      password: '2a1218f8f9e392fe6284a3790094fff7',
    });
    console.log(log);
    this.http.postLoginAdmin(log).subscribe(i => {
      this.accessToken.accessToken = i.accessToken;
      console.log(this.accessToken.accessToken);
    });
    this.tf.click_c_show1 = false;
    this.tf.click_c_show2 = true;
    this.tf.map_c_show = true;
  }

  ngOnInit() {}
}
