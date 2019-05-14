import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {DataService} from './services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class IsActiveInterceptor implements HttpInterceptor {
  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 400 && err.error.message === 'Access token expired!') {
        this.data.removeAccessToken();
        this.router.navigate(['/login'], {relativeTo: this.route});
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
