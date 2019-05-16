import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EndResetPasswordModel} from '../../main/main.component';
import {HttpService} from '../../services/http.service';
import {MessagesComponent} from '../../messages/messages.component';

@Component({
  selector: 'app-reset-password-change',
  templateUrl: './reset-password-change.component.html',
  styleUrls: ['./reset-password-change.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../../assets/css/inputs.css']
})
export class ResetPasswordChangeComponent implements OnInit {

  model: EndResetPasswordModel = {resetHash: '', newPassword: '', email: ''};
  confirmPassword = '';
  @ViewChild('messages') messages: MessagesComponent;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.route.params.subscribe(params => {
      this.model.resetHash = params['hash'];
    });
  }

  ngOnInit() {
  }

  send() {
    this.messages.setMessage('Trwa zmiana hasła...');
    if (this.model.email === '') {
      this.messages.setError('Pole email nie może pozostać puste.');
    } else if (!this.model.email.includes('@')) {
      this.messages.setError('Email jest niepoprawny.');
    } else if (this.model.newPassword === '') {
      this.messages.setError('Pole hasło nie może pozostać puste.');
    } else if (this.confirmPassword === '') {
      this.messages.setError('Pole powtórz hasło nie może pozostać puste.');
    } else if (this.model.newPassword !== this.confirmPassword) {
      this.messages.setError('Hasła nie są równe.');
    } else {
      this.messages.setMessage('Trwa zmiana hasła...');
      this.http.endResetPassword(this.model).subscribe(success => {
        this.messages.setSuccess('Hasło zostało zmienione.');
      }, error => {
        console.log(error);
        this.messages.setError('Coś poszło nie tak!');
      });
    }
  }
}
