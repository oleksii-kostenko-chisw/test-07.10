import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AuthDTO } from "@auth/models/auth.dto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  constructor(private _http: HttpClient) {}

  public signIn(data: AuthDTO): Observable<any> {
    // sessionStorage.setItem('authenticated', '1');
    return this._http.post('/api/auth/sign-in', data);
  }
}
