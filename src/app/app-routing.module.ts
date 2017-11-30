import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '@app/core';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: 'app/feature/layout/layout.module#LayoutModule'
    },
    {
        path: 'user',
        loadChildren: 'app/feature/user/user.module#UserModule'
    },
    {
        path: '**',
        redirectTo: '/exception/404',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
