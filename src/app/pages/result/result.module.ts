import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';

@NgModule({
  imports: [
    CommonModule,
    ResultRoutingModule
  ],
  declarations: [SuccessComponent, FailComponent]
})
export class ResultModule { }
