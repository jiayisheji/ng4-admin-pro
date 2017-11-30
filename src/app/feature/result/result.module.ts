import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ResultRoutingModule } from './result-routing.module';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';

@NgModule({
  imports: [
    SharedModule,
    ResultRoutingModule
  ],
  declarations: [SuccessComponent, FailComponent]
})
export class ResultModule { }
