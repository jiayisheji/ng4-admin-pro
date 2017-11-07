import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/result/success',
    pathMatch: 'full'
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'fail',
    component: FailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
