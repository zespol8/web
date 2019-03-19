import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, HttpErrors } from '../app.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpService { // globalny servis do komunikacji z serverem
  errors: HttpErrors = {};
  constructor(private http: HttpClient) { // Konstruktor tworzy obiekt http i obiekt login
    this.errors.status = 0;
  }

  getPointsUser(): Observable<Post> {
    // Metoda pobiera jeden punkt, observable daje mozliwosc pobierania z niegodanych w innych komponentach
    return this.http.get<Post>('http://team8-server.herokuapp.com/client/point/1');
  }

  postLoginAdmin(log: Post): Observable<Post> {
    // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/login', log);
  }

  postRegisterAdmin(log: Post): Observable<Post> {
    // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/register', log);
  }

  postAddEventAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie eventu
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/event?accessToken=' + accessToken, log);
  }

  postAddPointAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie punktu do eventu
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/point?accessToken=' + accessToken + '', log);
  }

  postEventDelete(id: number, accessToken: string): Observable<Post> {
    // Usuwanie Eventu
    const post: Post = {};
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/event/' + id + '/delete?accessToken=' + accessToken, null);
  }

  getEventsAdmin(accessToken: string): Observable<Array<Post>> {
    // Pobieranie eventów admina
    return this.http.get<Array<Post>>('http://team8-server.herokuapp.com/admin/events?accessToken=' + accessToken);
  }

  getEventsPointsAdmin(accessToken: string, id: number): Observable<Array<Post>> {
    // Pobieranie punktów eventu o danym id
    return this.http.get<Array<Post>>('http://team8-server.herokuapp.com/admin/' + id + '/points?accessToken=' + accessToken);
  }

  isActive(accessToken: string): Observable<Post> {
    // Metotda sprawdza czy jestes aktywny
    return this.http.get<Post>('https://team8-server.herokuapp.com/admin/active?accessToken=' + accessToken);
  }
}
