import { Component, OnInit } from '@angular/core';
import { TrueFalseService } from 'src/app/services/true-false.service';

@Component({
  selector: 'app-edit-nav',
  templateUrl: './edit-nav.component.html',
  styleUrls: ['./edit-nav.component.css']
})
export class EditNavComponent implements OnInit {

  constructor(public tf: TrueFalseService) { }

  ngOnInit() {
  }

}
