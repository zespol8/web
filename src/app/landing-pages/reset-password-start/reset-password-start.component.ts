import {Component, isDevMode, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-reset-password-start',
  templateUrl: './reset-password-start.component.html',
  styleUrls: ['./reset-password-start.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../../assets/css/inputs.css']
})
export class ResetPasswordStartComponent implements OnInit {

  email = '';
  error = '';
  success = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
  }

  ngOnInit() {
  }

  return() {
    window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/product', '_self');
  }

  send() {
    this.error = '';
    if (this.email === '') {
      this.error = 'Pole email nie może pozostać puste.';
    } else if (!this.email.includes('@')) {
      this.error = 'Email jest niepoprawny.';
    } else {
      this.http.startResetPassword(this.email).subscribe(success => {
        this.success = 'Sprawdź maila.';
      }, error => {
        this.error = 'Coś poszło nie tak, spróbuj ponownie później.';
        console.log(error);
      });
    }
  }
}
