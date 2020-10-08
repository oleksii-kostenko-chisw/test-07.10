import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from "src/app/shared/shared.module";
import { CamerasComponent } from './pages/cameras/cameras.component';
import { ReportingComponent } from './pages/reporting/reporting.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [DashboardComponent, CamerasComponent, ReportingComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
