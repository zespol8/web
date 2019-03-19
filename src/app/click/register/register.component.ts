import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';
import { Post } from 'src/app/app.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dane: Post = {};
  constructor(private tf: TrueFalseService, private http: HttpService) {
  }

  ngOnInit() {
  }

  registerButton() {
    this.tf.login_show = false;
    this.tf.register_show2 = true;
  }

  dodaj() {
    this.http.postRegisterAdmin(this.dane).subscribe(i => {
      console.log(i);
    });
    this.tf.login_show = true;
    this.tf.register_show2 = false;
  }

}
