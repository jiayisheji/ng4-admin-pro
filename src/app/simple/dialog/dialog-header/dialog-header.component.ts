import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-dialog-header],[appDialogHeader]',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogHeaderComponent implements OnInit {
  /**
   * 绑定类
   */
  @HostBinding('class.dialog-header')
  get _setDialogHeaderClass() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
