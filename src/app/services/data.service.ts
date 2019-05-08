import {Injectable} from '@angular/core';
import {Post} from '../main/main.component';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public accessToken = '';
  public error = '';
  public dane: Post;
  public lng = 0;
  public lat = 0;
  public newEventId: number;
  public listOfAll: Array<Post>;
  public onePoint: Post = {geographicCoordinate: {}};

  constructor() {
    this.onePoint.geographicCoordinate.latitude = 53.01371393719378;
    this.onePoint.geographicCoordinate.longitude = 18.598043358450923;
  }

  public getAccessToken(): string {
    return sessionStorage.getItem('token');
  }

  public saveAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  public removeAccessToken() {
    sessionStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    console.log(this.getAccessToken());
    return this.getAccessToken() !== '' && !isNullOrUndefined(this.getAccessToken());
  }

  checkSyntax(data: Post): string { // Sprawdzanie czy formularz eventu lub punktu zostal poprawnie uzupelniony.
    if (data.geographicCoordinate.latitude === 0 && data.geographicCoordinate.longitude === 0) {
      return 'Pick cords on map...';
    } else if (data.name.length < 5) {
      return 'Name is to short...';
    } else if (data.description.length < 10) {
      return 'Desc. min. 10...';
    } else if (data.place.length < 5) {
      return 'Place is to short...';
    } else {
      return '';
    }
  }

  checkLoginError(errorCode: number): string {
    if (errorCode === 200) {
      return '';
    } else if (errorCode === 401) {
      return 'Unauthorized 401';
    } else if (errorCode === 403) {
      return 'Forbidden 403';
    } else if (errorCode === 404) {
      return 'Not Found 404';
    } else if (errorCode === 406) {
      return 'Not Found 406';
    } else {
      return 'Server error! Try again.';
    }
  }

  clearCords(): void { // Czyszczenie danych lng i lat podczasdodawania kolejnych punktów
    this.lat = 0;
    this.lng = 0;
  }

  resetData(): Post {
    return {
      name: '', description: '', place: '', geographicCoordinate: {latitude: 0, longitude: 0},
      endDate: 0, startDate: 0
    };
  }
}
