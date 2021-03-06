import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApikeyInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let params = new HttpParams({fromString: request.params.toString()});

    params = params.append('apikey', API.KEY);

    request = request.clone({
      params: params
    });

    return next.handle(request);
  }
}
