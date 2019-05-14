import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import {Md5} from 'md5-typescript';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {Post} from '../../main/main.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Post = {};
  loginError: string;

  constructor(private data: DataService, private http: HttpService,
              public tf: TrueFalseService, private router: Router, private route: ActivatedRoute) {
    if (this.data.isLoggedIn()) {
      this.router.navigate(['/main'], {relativeTo: this.route});
    }
    this.log.email = 'gruszkojados@gmail.com';
    this.log.password = 'razdwatrzy12';
    this.loginError = '';
  }

  ngOnInit() {
  }

  login() {
    this.log.password = Md5.init(this.log.password);
    this.http.postLoginAdmin(this.log).subscribe(i => {
      this.data.saveAccessToken(i.accessToken);
      this.router.navigate(['/main'], {relativeTo: this.route});
    }, error => {
      this.http.errors = error;
      this.loginError = this.data.checkLoginError(this.http.errors.status);
      this.loginError = error;
    });
    this.log.password = '';
  }
}
