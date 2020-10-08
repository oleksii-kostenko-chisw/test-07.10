import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/features/auth/models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userData: UserDTO;

  constructor() {}

  private _getUserData(): void {
    this._userData = JSON.parse(sessionStorage.getItem('userData'));
  }

  public isAuthenticated(): boolean {
    this._getUserData();
    return !!this._userData;
  }

  public getUserName(): string {
    if (!this._userData) {
      this._getUserData();
    }

    return this._userData.username;
  }
}
