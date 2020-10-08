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
import { UserDTO } from 'src/app/features/auth/models/user.dto';
import { CameraItem, CamerasResponse } from 'src/app/features/dashboard/models/cameras-response.interface';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  private readonly _imageAssetUrl: string = 'https://picsum.photos/300/200';
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const imagesUrl = this._imageAssetUrl;
    const { url, method, body, params } = request;

    return of(null).pipe(mergeMap(handleRoute));
    function handleRoute(): Observable<HttpEvent<unknown>> {
      switch (true) {
        case url.endsWith('/api/auth/sign-in') && method === 'POST':
          return handleAuth();
        case url.includes('/api/cameras') && method === 'GET':
          return getCamerasResponse();
        default:
          return next.handle(request);
      }
    }

    function ok<T>(responseBody?: T): Observable<HttpEvent<T>> {
      return of(new HttpResponse({ status: 200, body: responseBody }));
    }

    function handleAuth(): Observable<HttpEvent<UserDTO>> {
      const { login } = body as AuthDTO;
      const responseBody: UserDTO = {
        id: 1,
        username: login,
      };

      return of(new HttpResponse({ status: 200, body: responseBody }));
    }

    function getCamerasResponse(): Observable<HttpEvent<CamerasResponse>> {
      const count: number = parseInt(params.get('count'), 10);
      const cameras: CameraItem[] = [];
      const response: CamerasResponse = {
        cameras,
        count
      }
      for (let index = 0; index < count; index++) {
        const item: CameraItem = {
          id: index,
          imageUrl: `${imagesUrl}?random=${index}`,
          passed: Math.random() < 0.6
        };
        cameras.push(item);
      }
      return of(new HttpResponse({ status: 200, body: response }));
    }
  }
}

export const fakeBackendProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
