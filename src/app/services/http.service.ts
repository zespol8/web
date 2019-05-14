import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {EndResetPasswordModel, HttpErrors, Post} from '../main/main.component';

@Injectable()
export class HttpService { // globalny servis do komunikacji z serverem
  errors: HttpErrors = {};

  url = 'https://team8-server.herokuapp.com/';

  constructor(private http: HttpClient) { // Konstruktor tworzy obiekt http i obiekt login
    this.errors.status = 0;
  }

  postLoginAdmin(log: Post): Observable<Post> {
    // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
    return this.http.post<Post>(this.url + 'admin/login', log);
  }

  postLogoutAdmin(accessToken: string): Observable<Post> {
    return this.http.post<Post>(this.url + 'admin/logout?accessToken=' + accessToken, null);
  }

  postRegisterAdmin(log: Post): Observable<Post> {
    // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
    return this.http.post<Post>(this.url + 'admin/register', log);
  }

  postImgAdd(accessToken: string, eventId: number, img: File) { // <<< =======
    const formData: FormData = new FormData();
    formData.append('file', img);
    return this.http.post(this.url + 'admin/event/' + eventId + '/image?accessToken=' + accessToken, formData);
  }

  postAddEventAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie eventu
    return this.http.post<Post>(this.url + 'admin/event?accessToken=' + accessToken, log);
  }

  postAddPointAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie punktu do eventu
    return this.http.post<Post>(this.url + 'admin/point?accessToken=' + accessToken + '', log);
  }

  postEventEdit(id: number, event: Post, accessToken: string): Observable<Post> {
    // Edycja pojedynczego eventu
    return this.http.post<Post>(this.url + 'admin/event/' + id + '/edit?accessToken=' + accessToken, event);
  }

  postPointEdit(id: string, point: Post, accessToken: string): Observable<Post> {
    // Edycja pojedynczego punktu
    return this.http.post<Post>(this.url + 'admin/point/' + id + '/edit?accessToken=' + accessToken, point);
  }

  postEventDelete(id: number, accessToken: string): Observable<Post> {
    // Usuwanie pojedynczego eventu
    return this.http.post<Post>(this.url + 'admin/event/' + id + '/delete?accessToken=' + accessToken, null);
  }

  postPointDelete(eventId: number, pointId: number, accessToken: string): Observable<Post> {
    // Usuwanie pojedynczego punktu
    return this.http.post<Post>(this.url + 'admin/'
      + eventId + '/point/' + pointId + '/delete?accessToken=' + accessToken, null);
  }

  getEventsAdmin(accessToken: string): Observable<Array<Post>> {
    // Pobieranie eventów danego admina
    return this.http.get<Array<Post>>(this.url + 'admin/events?accessToken=' + accessToken);
  }

  getEventAdminById(accessToken: string, id: number): Observable<Post> {
    // Pobieranie pojedynczego eventu
    return this.http.get<Post>(this.url + 'admin/event/' + id + '/?accessToken=' + accessToken);
  }

  getPointAdminById(eventId: number, pointId: number, accessToken: string): Observable<Post> {
    // Pobieranie pojedynczego punktu
    return this.http.get<Post>(this.url + 'admin/'
      + eventId + '/point/' + pointId + '/?accessToken=' + accessToken);
  }

  getEventsPointsAdmin(accessToken: string, id: number): Observable<Array<Post>> {
    // Pobieranie punktów eventu o danym id
    return this.http.get<Array<Post>>(this.url + 'admin/' + id + '/points?accessToken=' + accessToken);
  }

  isActive(accessToken: string): Observable<any> {
    // Metotda sprawdza czy jestes aktywny
    return this.http.get(this.url + 'admin/active?accessToken=' + accessToken);
  }

  downloadEventsInCSV(accessToken: string): string {
    // Pobieranie CSV
    return this.url + 'events.csv?accessToken=' + accessToken;
  }

  uploadCsv(accessToken: string, csv: File) {
    // Import csv
    const formData: FormData = new FormData();
    formData.append('file', csv);
    return this.http.post(this.url + 'events.csv?accessToken=' + accessToken, formData);
  }

  addImageToEvent(accessToken: string, eventId: number, image: File) {
    // Dodaj zdjęcie do eventu
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post(this.url + 'admin/event/' + eventId + '/image?accessToken=' + accessToken, formData);
  }

  addImageToPoint(accessToken: string, eventId: number, pointId: number, image: File) {
    // Dodaj zdjęcie do punktu
    const formData: FormData = new FormData();
    formData.append('file', image);
    return this.http.post(this.url + 'admin/' + eventId
      + '/point/' + pointId + '/image?accessToken=' + accessToken, formData);
  }

  getEventImage(accessToken: string, eventId: number, imageNumber: number): Observable<any> {
    return this.http.get(this.url + 'admin/event/' + eventId +
      '/image/' + imageNumber + '?accessToken=' + accessToken, {responseType: 'blob'});
  }

  getPointImage(accessToken: string, eventId: number, pointId: string, imageNumber: number): Observable<any> {
    return this.http.get(this.url + 'admin/' + eventId + '/point/' + pointId +
      '/image/' + imageNumber + '?accessToken=' + accessToken, {responseType: 'blob'});
  }

  startResetPassword(email: string): Observable<any> {
    return this.http.get(this.url + 'admin/resetPassword?email=' + email);
  }

  endResetPassword(model: EndResetPasswordModel): Observable<any> {
    return this.http.post<any>(this.url + 'admin/resetPassword', model);
  }

}
