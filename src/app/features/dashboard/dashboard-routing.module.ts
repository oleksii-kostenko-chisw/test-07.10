import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CamerasComponent } from "./pages/cameras/cameras.component";
import { ReportingComponent } from "./pages/reporting/reporting.component";
import { SettingsComponent } from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cameras',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cameras',
        component: CamerasComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'reporting',
        component: ReportingComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
