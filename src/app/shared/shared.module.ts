import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from "@angular/router";
import { TranslocoRootModule } from "../transloco/transloco-root.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, TranslocoRootModule],
  exports: [HeaderComponent, RouterModule],
})
export class SharedModule {}
