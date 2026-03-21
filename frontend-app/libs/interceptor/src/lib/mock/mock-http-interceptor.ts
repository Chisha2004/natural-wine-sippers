import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {
  //TODO we now have a mock-server, so we can remove this interceptor
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Example: mock `/users` endpoint
    if (req.url.endsWith('api/register') && req.method === 'POST') {
      const mockUsers = [{ id: 1, name: 'Test' }];
      return of(new HttpResponse({ status: 200, body: mockUsers }));
    }

    // Otherwise, pass request through
    return next.handle(req);
  }
}
