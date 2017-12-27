import { Component, OnInit, Inject, OnDestroy, Input, OnChanges } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, UrlSegment } from '@angular/router';
import { INav } from '@app/config/nav';
import { Subscription } from 'rxjs/Subscription';
import { BreadcrumbService } from './breadcrumb.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, OnChanges, OnDestroy {
  @Input('prefix') prefix = '';
  _breadcrumbs: Array<INav> = [];

  urls: string[];
  private _routerSubscription: Subscription;
  constructor(
    private router: Router,
    @Inject('BREADCRUMB_CONFIG') private _nav,
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.urls = [];

    if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }

    this._routerSubscription = this.router.events.subscribe((data: any) => {
      this.urls.length = 0; // Fastest way to clear out array
      console.log('ngOnInit', data);
      /* console.log('ngOnInit', navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
      this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url); */
    });

  }
  ngOnChanges(): void {
    /* if (!this.urls) {
      return;
    }

    this.urls.length = 0;
    this.generateBreadcrumbTrail(this.router.url); */
  }

  generateBreadcrumbTrail(url: string): void {
    console.log(this.urls);
    console.log('generateBreadcrumbTrail', url);
    if (!this.breadcrumbService.isRouteHidden(url)) {
      // Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
      this.urls.unshift(url);
    }

    if (typeof url === 'string' && url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); // Find last '/' and add everything before it as a parent route
    } else if (this.prefix.length > 0) {
      this.urls.unshift(this.prefix);
    }
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  friendlyName(url: string): string {
    return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
  }

  ngOnDestroy(): void {
    if (this._routerSubscription) {
      this._routerSubscription.unsubscribe();
    }
  }
}
