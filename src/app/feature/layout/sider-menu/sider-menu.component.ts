import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SiderMenuComponent implements OnInit {
  _collapsed: boolean;
  @Input() items: Array<any> = [];
  @Input()
  set collapsed(value: boolean) {
    if (value) {
      console.log(this.items);
      this.items.forEach(item => {
        if (item.children) {
          item.children.forEach(m => m._fold = false);
        }
        item._fold = false;
      });
      setTimeout(() => {
        this._collapsed = value;
      }, 1);
    } else {
      this._collapsed = value;
    }
  }
  constructor() { }

  ngOnInit() {
  }
  openChange(event, item, items) {
    if (item.children) {
      item.children.forEach(m => m._fold = false);
    }
    items.forEach(m => m._fold = false);
    item._fold = event;
  }
}
