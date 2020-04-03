import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer Auth`
      }
    });

    return next.handle(authRequest)
      .pipe(
        catchError((error, caught) => {
          return throwError(error);
        })) as any;
  }
}
