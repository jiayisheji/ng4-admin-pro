import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@app/cdk/portal';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SpinnerModule } from '../spinner';
import { ListItemActionComponent } from './list-item-action/list-item-action.component';
import { RouterModule } from '@angular/router';
import { ListItemMetaComponent } from './list-item-meta/list-item-meta.component';
import { ListItemContentComponent } from './list-item-content/list-item-content.component';
import { ActionComponent } from './action/action.component';
@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    SpinnerModule
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    ListItemActionComponent,
    ListItemMetaComponent,
    ListItemContentComponent,
    ActionComponent
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    ListItemActionComponent,
    ListItemMetaComponent,
    ListItemContentComponent,
    ActionComponent
  ]
})
export class ListModule { }
