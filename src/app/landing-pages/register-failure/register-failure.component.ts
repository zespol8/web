import {Component, isDevMode, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-failure',
  templateUrl: './register-failure.component.html',
  styleUrls: ['./register-failure.component.css']
})
export class RegisterFailureComponent implements OnInit {

  public error = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.error = params['error'];
    });
    setTimeout(() => {
      window.open(window.location.origin + (!isDevMode() ? '/web' : '') + '/product', '_self');

    }, 7500);
  }

}
