import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
