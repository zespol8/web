import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {HttpService} from 'src/app/services/http.service';
import {Md5} from 'md5-typescript';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {Post} from '../../main/main.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagesComponent} from '../../messages/messages.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: Post = {};
  @ViewChild('messages') messages: MessagesComponent;

  constructor(private data: DataService, private http: HttpService,
              public tf: TrueFalseService, private router: Router, private route: ActivatedRoute) {
    if (this.data.isLoggedIn()) {
      this.router.navigate(['/main'], {relativeTo: this.route});
    }
    this.log.email = 'gruszkojados@gmail.com';
    this.log.password = 'razdwatrzy12';
  }

  ngOnInit() {
  }

  login() {
    this.messages.setMessage('Trwa logowanie...');
    this.log.password = Md5.init(this.log.password);
    this.http.postLoginAdmin(this.log).subscribe(i => {
      this.data.saveAccessToken(i.accessToken);
      this.router.navigate(['/main'], {relativeTo: this.route});
    }, error => {
      console.log(error);
      if (error === 'Admin don\'t exist!') {
        this.messages.setError('Niepoprawny email lub hasło!');
      } else if (error === 'Credentials not valid!') {
        this.messages.setError('Niepoprawny email lub hasło!');
      } else {
        this.messages.setError('Coś poszło nie tak!');
      }
    });
  }
}
