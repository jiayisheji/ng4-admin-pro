import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ActionComponent } from '../action/action.component';

interface IActions {
  name: string;
  show?: boolean;
  disabled?: boolean;
  type: string;
  behavior: 'button' | 'link' | 'router';
  router?: Array<string>;
  queryParams?: object;
  target?: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sim-list-item-action',
  templateUrl: './list-item-action.component.html',
  styleUrls: ['./list-item-action.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListItemActionComponent implements OnInit {
  @HostBinding('class.sim-list-item-action') true;
  _Actions: Array<ActionComponent> = [];
  _ActionsShow: Array<ActionComponent> = [];
  _ActionsHide: Array<ActionComponent> = [];
  @Input() split: boolean;
  constructor() { }

  ngOnInit() {
  }

  addAction(action: ActionComponent) {
    this._Actions.push(action);
    console.log(this._Actions);
  }

  removeAction(action: ActionComponent) {

  }

  /**
   * 过滤动作数据
   * @param actions
   */
  private _filterActions(actions: Array<IActions>): Array<IActions> {
    return actions;
  }
}
