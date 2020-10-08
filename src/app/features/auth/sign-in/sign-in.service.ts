import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '@auth/models/auth.dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserDTO } from "../models/user.dto";

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private _http: HttpClient) {}

  public signIn(data: AuthDTO): Observable<any> {
    return this._http.post('/api/auth/sign-in', data).pipe(
      tap((userData: UserDTO) => {
        sessionStorage.setItem('userData', JSON.stringify(userData));
      })
    );
  }
}
