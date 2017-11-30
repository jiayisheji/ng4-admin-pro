import { Component, OnInit, HostBinding, Input, ViewEncapsulation } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-dialog-footer],[appDialogFooter]',
  templateUrl: './dialog-footer.component.html',
  styleUrls: ['./dialog-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogFooterComponent implements OnInit {

  /**
   * 绑定类
   */
  @HostBinding('class.dialog-footer')
  get _setDialogFooterClass() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
