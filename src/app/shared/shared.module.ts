import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "../transloco/transloco-root.module";
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';

@NgModule({
  declarations: [HeaderComponent, LangSelectorComponent],
  imports: [CommonModule, RouterModule, TranslocoRootModule],
  exports: [HeaderComponent, RouterModule, LangSelectorComponent],
})
export class SharedModule {}
