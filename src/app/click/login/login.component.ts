import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/app.component';
import {Md5} from 'md5-typescript';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Post = {};
  error = '';
  constructor(private data: DataService, private http: HttpService, private tf: TrueFalseService) {
    this.log.email = 'gruszkojados@gmail.com';
    this.log.password = 'razdwatrzy12';
  }

  ngOnInit() {
  }

  login() {
    this.log.password = Md5.init(this.log.password);
    console.log(this.log);
    this.http.postLoginAdmin(this.log).subscribe(i => {
      this.data.accessToken = i.accessToken;
      console.log(this.data.accessToken);
    });
    this.tf.click_c_show2 = true;
    this.tf.login_show = false;
    this.tf.map_c_show = true;
    this.tf.register_show1 = false;
  }
}
