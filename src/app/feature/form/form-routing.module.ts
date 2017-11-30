import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { StepFormComponent } from './step-form/step-form.component';
import { AdvancedFormComponent } from './advanced-form/advanced-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/form/basic-form',
    pathMatch: 'full'
  },
  {
    path: 'basic-form',
    component: BasicFormComponent
  },
  {
    path: 'step-form',
    component: StepFormComponent
  },
  {
    path: 'advanced-form',
    component: AdvancedFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
