import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormItemDirective } from './form-item.directive';
import { FormItemComponent } from './form-item/form-item.component';
import { FormItemControlDirective } from './form-item-control.directive';
import { FormItemRequiredDirective } from './form-item-required.directive';
import { FormExplainComponent } from './form-explain.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [
    FormComponent,
    FormItemDirective,
    FormItemComponent,
    FormItemControlDirective,
    FormItemRequiredDirective,
    FormExplainComponent],
  exports: [
    FormComponent,
    FormItemDirective,
    FormItemComponent,
    FormItemControlDirective,
    FormItemRequiredDirective,
    FormExplainComponent]
})
export class FormModule { }
