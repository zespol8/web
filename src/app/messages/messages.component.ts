import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  error: string = null;
  success: string = null;
  message: string = null;

  constructor() {
  }

  ngOnInit() {
  }

  public clearAll() {
    this.error = null;
    this.message = null;
    this.success = null;
  }

  public setError(error: string) {
    this.clearAll();
    this.error = error;
  }

  public setSuccess(success: string) {
    this.clearAll();
    this.success = success;
  }

  public setMessage(message: string) {
    this.clearAll();
    this.message = message;
  }

  public getError(): string {
    return this.error;
  }

  public getSuccess(): string {
    return this.success;
  }

  public getMessage(): string {
    return this.message;
  }

}
