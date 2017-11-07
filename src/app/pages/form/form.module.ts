import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';

import { FormRoutingModule } from './form-routing.module';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { StepFormComponent } from './step-form/step-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';

@NgModule({
  imports: [
    SharedModule,
    FormRoutingModule
  ],
  declarations: [BasicFormComponent, StepFormComponent, AdvancedFormComponent]
})
export class FormModule { }
