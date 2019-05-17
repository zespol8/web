import {Component, isDevMode, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import {MessagesComponent} from '../../messages/messages.component';

@Component({
  selector: 'app-reset-password-start',
  templateUrl: './reset-password-start.component.html',
  styleUrls: ['./reset-password-start.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../../assets/css/inputs.css']
})
export class ResetPasswordStartComponent implements OnInit {

  email = '';
  @ViewChild('messages') messages: MessagesComponent;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
  }

  ngOnInit() {
  }

  return() {
    window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/product', '_self');
  }

  send() {
    if (this.email === '') {
      this.messages.setError('Pole email nie może pozostać puste.');
    } else if (!this.email.includes('@')) {
      this.messages.setError('Email jest niepoprawny.');
    } else {
      this.messages.setMessage('Rozpoczynam resetowanie hasła...');
      this.http.startResetPassword(this.email).subscribe(success => {
        this.messages.setSuccess('Sprawdź maila.');
      }, error => {
        console.log(error);
        if (error === 'Email doesn\'t exist!') {
          this.messages.setError('Podany email nie posiada konta!');
        } else if (error === 'Password reset already started, check the email!') {
          this.messages.setError('Sprawdź maila, proces przypominania hasła już się rozpoczął!');
        } else {
          this.messages.setError('Coś poszło nie tak!');
        }
      });
    }
  }
}
