import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-dialog-body],[appDialogBody]',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {
  /**
   * 绑定类
   */
  @HostBinding('class.dialog-body')
  get _setDialogBodyClass() {
    return true;
  }
  constructor() { }

  ngOnInit() {
  }

}
