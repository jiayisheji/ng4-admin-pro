import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@app/cdk/portal';
import { ListItemActionComponent } from '../list-item-action/list-item-action.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  private _contentPortal: TemplatePortal<any> | null = null;
  @ViewChild(TemplateRef) _content: TemplateRef<any>;
  constructor(private listItemAction: ListItemActionComponent, private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    this.listItemAction.addAction(this);
  }
}
