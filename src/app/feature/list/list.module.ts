import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { ListRoutingModule } from './list-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { BasicListComponent } from './basic-list/basic-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { CoverCardListComponent } from './cover-card-list/cover-card-list.component';
import { FilterCardListComponent } from './filter-card-list/filter-card-list.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    SharedModule,
    ListRoutingModule
  ],
  declarations: [
    TableListComponent,
    BasicListComponent,
    CardListComponent,
    CoverCardListComponent,
    FilterCardListComponent,
    SearchComponent
  ]
})
export class ListModule { }
