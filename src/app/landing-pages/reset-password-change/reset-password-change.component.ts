import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EndResetPasswordModel} from '../../main/main.component';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-reset-password-change',
  templateUrl: './reset-password-change.component.html',
  styleUrls: ['./reset-password-change.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../../assets/css/inputs.css']
})
export class ResetPasswordChangeComponent implements OnInit {

  model: EndResetPasswordModel = {resetHash: '', newPassword: '', email: ''};
  confirmPassword = '';
  error = '';
  success = '';

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.route.params.subscribe(params => {
      this.model.resetHash = params['hash'];
    });
  }

  ngOnInit() {
  }

  send() {
    this.error = '';
    if (this.model.email === '') {
      this.error = 'Pole email nie może pozostać puste.';
    } else if (!this.model.email.includes('@')) {
      this.error = 'Email jest niepoprawny.';
    } else if (this.model.newPassword === '') {
      this.error = 'Pole hasło nie może pozostać puste.';
    } else if (this.confirmPassword === '') {
      this.error = 'Pole powtórz hasło nie może pozostać puste.';
    } else if (this.model.newPassword !== this.confirmPassword) {
      this.error = 'Hasła nie są równe.';
    } else {
      this.http.endResetPassword(this.model).subscribe(success => {
        this.success = 'Hasło zostało zmienione.';
      }, error => {
        this.error = 'Coś poszło nie tak, spróbuj ponownie później.';
        console.log(error);
      });
    }
  }
}
