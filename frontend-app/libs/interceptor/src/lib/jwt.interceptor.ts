import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStore } from '@smwine-fe-app/store';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler
  ): Observable<HttpEvent<T>> {
    //Skip adding the Authorization header for authentication requests
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }

    const userStore = inject(UserStore);
    const token = userStore.token?.();

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(clonedRequest);
    }

    return next.handle(req);
  }
}
