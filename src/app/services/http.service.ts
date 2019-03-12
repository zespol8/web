import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../app.component';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpService { // globalny servis do komunikacji z serverem

  constructor(private http: HttpClient) { // Konstruktor tworzy obiekt http i obiekt login
  }

  getPointsUser(): Observable<Post> {
    // Metoda pobiera jeden punkt, observable daje mozliwosc pobierania z niegodanych w innych komponentach
    return this.http.get<Post>('http://team8-server.herokuapp.com/client/point/1');
  }

  postLoginAdmin(log: Post): Observable<Post> {
    // Logowanie do servera przu uzyciu interfejsu Login zawierajacej haslo i emai, powinno zwrocic accessToken
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/login', log);
  }

  postAddEventAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie eventu
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/event?accessToken=' + accessToken, log);
  }

  postAddPointAdmin(log: Post, accessToken: string): Observable<Post> {
    // Dodawanie punktu do eventu
    return this.http.post<Post>('https://team8-server.herokuapp.com/admin/point?accessToken=' + accessToken + '', log);
  }

  // JESZCZE NIE UZYWANE
  getPointsAdmin(): Observable<Post> {
    return this.http.get<Post>('http://team8-server.herokuapp.com/admin/event/1');
  }

  getEventsAdmin(accessToken: string): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('http://team8-server.herokuapp.com/admin/events?accessToken=' + accessToken);
  }

  isActive(accessToken: string): Observable<Post> { // Metotda sprawdza czy jestes aktywny
    return this.http.get('https://team8-server.herokuapp.com/admin/active?accessToken=' + accessToken );
  }
}
