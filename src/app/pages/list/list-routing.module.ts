import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableListComponent } from './table-list/table-list.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { CoverCardListComponent } from './cover-card-list/cover-card-list.component';
import { FilterCardListComponent } from './filter-card-list/filter-card-list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list/table-list',
    pathMatch: 'full'
  },
  {
    path: 'table-list',
    component: TableListComponent
  },
  {
    path: 'basic-list',
    component: BasicListComponent
  },
  {
    path: 'card-list',
    component: CardListComponent
  },
  {
    path: 'cover-card-list',
    component: CoverCardListComponent
  },
  {
    path: 'filter-card-list',
    component: FilterCardListComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
