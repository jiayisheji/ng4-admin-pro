import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/exception/404',
  pathMatch: 'full'
},
{
  path: '403',
  component: ForbiddenComponent
},
{
  path: '404',
  component: NotFoundComponent
},
{
  path: '500',
  component: InternalServerErrorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExceptionRoutingModule { }
