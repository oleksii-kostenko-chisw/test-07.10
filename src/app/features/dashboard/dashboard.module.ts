import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CamerasComponent } from './pages/cameras/cameras.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TranslocoRootModule } from "src/app/transloco/transloco-root.module";
import { camerasComponents } from "./pages/cameras/components";

@NgModule({
  declarations: [
    DashboardComponent,
    CamerasComponent,
    ReportingComponent,
    SettingsComponent,
    ...camerasComponents,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    TranslocoRootModule
  ],
})
export class DashboardModule {}
