import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard/analysis',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/feature/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'form',
                loadChildren: 'app/feature/form/form.module#FormModule'
            },
            {
                path: 'list',
                loadChildren: 'app/feature/list/list.module#ListModule'
            },
            {
                path: 'profile',
                loadChildren: 'app/feature/profile/profile.module#ProfileModule'
            },
            {
                path: 'result',
                loadChildren: 'app/feature/result/result.module#ResultModule'
            },
            {
                path: 'exception',
                loadChildren: 'app/feature/exception/exception.module#ExceptionModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
