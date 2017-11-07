import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from '../shared';
const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/analysis',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'form',
        loadChildren: 'app/pages/form/form.module#FormModule'
      },
      {
        path: 'list',
        loadChildren: 'app/pages/list/list.module#ListModule'
      },
      {
        path: 'profile',
        loadChildren: 'app/pages/profile/profile.module#ProfileModule'
      },
      {
        path: 'result',
        loadChildren: 'app/pages/result/result.module#ResultModule'
      },
      {
        path: 'exception',
        loadChildren: 'app/pages/exception/exception.module#ExceptionModule'
      },
    ]
  },
  {
    path: 'user',
    loadChildren: 'app/pages/user/user.module#UserModule'
  },
  {
    path: '**',
    redirectTo: '/exception/404',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
