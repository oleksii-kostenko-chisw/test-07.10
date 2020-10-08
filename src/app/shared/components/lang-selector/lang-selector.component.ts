import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { take } from "rxjs/operators";


@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {
  public showLangMenu: boolean;

  constructor(private _translate: TranslocoService) {
    this.showLangMenu = false;
  }

  ngOnInit(): void {
  }

  public toggleLangMenu(): void {
    this.showLangMenu = !this.showLangMenu;
  }

  public setLang(lang: string): void {
    this._translate
      .load(lang)
      .pipe(take(1))
      .subscribe(() => {
        this._translate.setActiveLang(lang);
        this.showLangMenu = false;
      });
  }

}
