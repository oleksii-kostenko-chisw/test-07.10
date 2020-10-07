import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthDTO } from '@auth/models/auth.dto';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const { url, method, body } = request;

    return of(null).pipe(mergeMap(handleRoute));
    function handleRoute(): Observable<HttpEvent<unknown>> {
      switch (true) {
        case url.endsWith('/api/auth/sign-in') && method === 'POST':
          return handleAuth();
        default:
          return next.handle(request);
      }
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function handleAuth(): Observable<HttpEvent<unknown>> {
      const { login } = body as AuthDTO;
      const responseBody = {
        id: 1,
        username: login
      };

      return of(new HttpResponse({ status: 200, body: responseBody }));
    }
  }
}

export const fakeBackendProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
