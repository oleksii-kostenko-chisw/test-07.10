import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public userName: string
  public showMenu: boolean;
  constructor(private _router: Router, private _user: UserService) {
    this.showMenu = false;
  }

  ngOnInit(): void {
    this.userName = this._user.getUserName();
  }

  public logoutHandler(): void {
    this._router.navigate(['/auth/sign-in']);
  }

  public toggleMenuHandler(): void {
    this.showMenu = !this.showMenu;
  }
}
