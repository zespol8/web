import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpService } from 'src/app/services/http.service';
import { Post } from 'src/app/app.component';
import { Md5 } from 'md5-typescript';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Post = {};
  loginError: string;
  constructor(private data: DataService, private http: HttpService, public tf: TrueFalseService) {
    this.log.email = 'gruszkojados@gmail.com';
    this.log.password = 'razdwatrzy12';
    this.loginError = '';
  }

  ngOnInit() {
  }
  Powrot()
  {
  this.tf.login_show = false;
   
    
  }
  login() {
    this.log.password = Md5.init(this.log.password);
    console.log(this.log);
    this.http.postLoginAdmin(this.log).subscribe(i => {
      this.data.accessToken = i.accessToken;
      console.log(this.data.accessToken);
      this.tf.click_c_show2 = true;
      this.tf.login_show = false;
      this.tf.map_c_show = true;
      this.tf.register_show1 = false;
      this.tf.login_show1 = false;
      this.tf.opis_show1 = false;
      this.tf.logoutButtonShow = true;
    }, error => {
      this.http.errors = error;
      console.log('HttpError status = ' + this.http.errors.status);
      this.loginError = this.data.checkLoginError(this.http.errors.status);
    });
    this.log.password = '';
  }
}
