import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';
import { Post, HttpErrors } from 'src/app/app.component';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';
import { syntaxError } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dane: Post;
  passCheck: string;
  syntaxError = '';
  error: HttpErrors;
  constructor(public tf: TrueFalseService, private http: HttpService, private data: DataService) {
  }

  ngOnInit() {
  }

  registerButton() {
    this.dane = { firstName: '', lastName: '', email: '', companyName: '', password: '' };
    this.passCheck = '';
    this.tf.login_show = false;
    this.tf.register_show2 = true;
    this.tf.register_show3 = false;
  }

  dodaj() {
    this.syntaxError = this.checkSyntaxForRegistry(this.dane, this.passCheck);
    if (this.syntaxError === '') {
      this.http.postRegisterAdmin(this.dane).subscribe(i => {
        console.log(i);
      }, error => {
        console.log(error);
      });
      this.tf.login_show = true;
      this.tf.register_show2 = false;
      this.tf.register_show3 = true;
    }
  }
  back() {
    this.tf.login_show = true;
    this.tf.register_show2 = false;
    this.tf.register_show3 = true;
    this.syntaxError = '';
  }

  checkSyntaxForRegistry(dane: Post, passCheck: string): string {
    console.log('Sprawdzam składnie...');
    if (dane.firstName.length < 2) {
      return 'Wypełni pole z imieniem.(min 2 znaki)';
    } else if (dane.lastName.length < 2) {
      return 'Wypełnij pole z nazwiskiem.(min 2 znaki)';
    } else if (dane.password.length < 5) {
      return 'Zapomniałeś podać hasła.(min 5 znaków)';
    } else if (!(dane.email.includes('@')) || !(dane.email.indexOf('@') > 0)
                || !((dane.email.includes('.com')) || (dane.email.includes('.pl'))) ) {
      return 'Niepoprawny adres email.';
    } else if (dane.password !== passCheck) {
      return 'Hasła różnią się.';
    } else {
      return '';
    }
  }

}
