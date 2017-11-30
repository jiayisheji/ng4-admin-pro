import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('AuthGuard#canActivate called');
        if (localStorage.getItem('currentUser')) {
            // 登录成功
            return true;
        }
        // 没有登录，所以重定向到登录页面
        this.router.navigate(['/user/login']);
        return false;
    }
}
