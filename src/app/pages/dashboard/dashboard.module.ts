import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [AnalysisComponent, MonitorComponent, WorkplaceComponent]
})
export class DashboardModule { }
