import {Injectable} from '@angular/core';
import {Post} from '../main/main.component';
import {isNullOrUndefined} from 'util';
import {HttpService} from './http.service';
import {TrueFalseService} from './true-false.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public error = '';
  public dane: Post;
  public lng = 0;
  public lat = 0;
  public newEventId: number;
  public listOfAll: Array<Post>;
  public onePoint: Post = {geographicCoordinate: {}};
  public isMarkerVisible = false;

  constructor(private http: HttpService, private trueFalseService: TrueFalseService) {
    this.onePoint.geographicCoordinate.latitude = 53.01371393719378;
    this.onePoint.geographicCoordinate.longitude = 18.598043358450923;
  }

  getAccessToken(): string {
    const accessToken = sessionStorage.getItem('token');
    if (isNullOrUndefined(accessToken) || accessToken === '') {
      return '';
    }
    return accessToken;
  }

  public saveAccessToken(accessToken: string) {
    sessionStorage.setItem('token', accessToken);
  }

  public removeAccessToken() {
    sessionStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return this.getAccessToken() !== '' && !isNullOrUndefined(this.getAccessToken());
  }

  checkSyntax(data: Post): string { // Sprawdzanie czy formularz eventu lub punktu zostal poprawnie uzupelniony.
    if (data.geographicCoordinate.latitude === 0 || data.geographicCoordinate.longitude === 0) {
      return 'Wybierze lokalizację na mapie.';
    } else if (data.name.length < 3) {
      return 'Nazwa minimum 3 znaki.';
    } else if (data.description.length < 10) {
      return 'Opis minimum 10 znaków.';
    } else if (data.place.length < 3) {
      return 'Miejsce minimum 3 znaki.';
    } else if (data.startDate == null) {
      return 'Podaj datę rozpoczęcia.';
    } else if (data.endDate == null) {
      return 'Podaj datę zakończenia.';
    } else if (data.startDate >= data.endDate) {
      return 'Data rozpoczęcia nie może być wcześniejsza niż data zakończenia.';
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
      name: '', description: '', shortDescription: '', place: '', geographicCoordinate: {latitude: 0, longitude: 0},
      endDate: null, startDate: null, openingHours: null, price: null, minAge: null
    };
  }
}
