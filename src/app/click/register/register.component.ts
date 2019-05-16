import {Component, OnInit, ViewChild} from '@angular/core';
import {TrueFalseService} from 'src/app/services/true-false.service';
import {HttpService} from 'src/app/services/http.service';
import {DataService} from 'src/app/services/data.service';
import {Post} from '../../main/main.component';
import {ActivatedRoute, Router} from '@angular/router';
import {MessagesComponent} from '../../messages/messages.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dane: Post;
  passCheck: string;
  @ViewChild('messages') messages: MessagesComponent;
  syntaxError = null;

  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService,
              private router: Router, private route: ActivatedRoute) {
    this.dane = {firstName: '', lastName: '', email: '', companyName: '', password: ''};
  }

  ngOnInit() {
  }

  dodaj() {
    this.syntaxError = null;
    this.syntaxError = this.checkSyntaxForRegistry(this.dane, this.passCheck);
    if (this.syntaxError === '') {
      this.messages.setMessage('Trwa rejestracja...');
      this.http.postRegisterAdmin(this.dane).subscribe(i => {
        this.router.navigate(['/register/confirm'], {relativeTo: this.route});
      }, error => {
        console.log(error);
        this.messages.setError('Coś poszło nie tak!');
      });
    } else {
      this.messages.setError(this.syntaxError);
    }
  }

  checkSyntaxForRegistry(dane: Post, passCheck: string): string {
    if (dane.firstName.length < 2) {
      return 'Wypełnij pole z imieniem.(min 2 znaki)';
    } else if (dane.lastName.length < 2) {
      return 'Wypełnij pole z nazwiskiem.(min 2 znaki)';
    } else if (dane.password.length < 5) {
      return 'Zapomniałeś podać hasła.(min 5 znaków)';
    } else if (!(dane.email.includes('@')) || !(dane.email.indexOf('@') > 0)
      || !((dane.email.includes('.com')) || (dane.email.includes('.pl')))) {
      return 'Niepoprawny adres email.';
    } else if (dane.password !== passCheck) {
      return 'Hasła różnią się.';
    } else {
      return '';
    }
  }

}
