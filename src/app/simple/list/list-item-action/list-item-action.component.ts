import { Component, OnInit, HostBinding, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

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
  _Actions: Array<IActions> = [];
  _ActionsShow: Array<IActions> = [];
  _ActionsHide: Array<IActions> = [];
  @Input()
  get actions(): Array<IActions> {
    return this._Actions;
  }
  set actions(value: Array<IActions>) {
    if (!value) {
      this._Actions = [];
    } else {
      this._Actions = value;
    }
    if (this._Actions.length) {
      this._ActionsShow = this._filterActions(this._Actions).filter((item: IActions) => item.show);
      this._ActionsHide = this._filterActions(this._Actions).filter((item: IActions) => !item.show);
    }
  }
  @Output() onChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  buttonEvent(type: string) {
    this.onChange.emit(type);
    return false;
  }

  /**
   * 过滤动作数据
   * @param actions
   */
  private _filterActions(actions: Array<IActions>): Array<IActions> {
    return actions;
  }
}
