import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { INav } from '../nav';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'sim-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  _breadcrumbs: Array<INav> = [];
  private _routerSubscription: Subscription;
  constructor(private _router: Router, @Inject('BREADCRUMB_CONFIG') private _nav) { }

  ngOnInit() {
    // console.log(this.getFriendlyNameForRoute(this._router.url), this._nav[0].children)
    this._breadcrumbs.push(this._nav[0]);
    this._routerSubscription = this._router.events.subscribe((navigationEnd: NavigationEnd) => {
      console.log('navigationEnd.urlAfterRedirects', navigationEnd.urlAfterRedirects, navigationEnd.url)
      /*  this.urls.length = 0; //Fastest way to clear out array
       this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url); */
    });
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }


  getFriendlyNameForRoute(route: string): string[] {
    return route.split('/');
  }

  /*   getFriendlyPath(nav: INav): INav {
      if (!nav.children) {
        return;
      }
      return this.getFriendlyPath(nav: INav);
    } */

}
