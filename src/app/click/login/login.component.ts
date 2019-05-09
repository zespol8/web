import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import {Md5} from 'md5-typescript';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {Post} from '../../main/main.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Post = {};
  loginError: string;

  constructor(private data: DataService, private http: HttpService, public tf: TrueFalseService, private router: Router, private route: ActivatedRoute) {
    console.log('tutaj 1');
    if (this.data.isLoggedIn()) {
      console.log('tutaj 2');
      this.router.navigate(['/main'], {relativeTo: this.route});
    }
    console.log('tutaj 3');
    this.log.email = 'gruszkojados@gmail.com';
    this.log.password = 'razdwatrzy12';
    this.loginError = '';
  }

  ngOnInit() {
  }

  Powrot() {
    this.tf.login_show = false;
  }

  login() {
    this.log.password = Md5.init(this.log.password);
    console.log(this.log);
    this.http.postLoginAdmin(this.log).subscribe(i => {
      this.data.saveAccessToken(i.accessToken);
      console.log(this.data.getAccessToken());
      this.router.navigate(['/main'], {relativeTo: this.route});
    }, error => {
      this.http.errors = error;
      console.log('HttpError status = ' + this.http.errors.status);
      this.loginError = this.data.checkLoginError(this.http.errors.status);
      this.loginError = (error as HttpErrorResponse).error;
    });
    this.log.password = '';
  }
}
