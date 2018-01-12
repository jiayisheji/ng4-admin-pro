import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit {
  @HostBinding('class.g-page-header') true;
  // 标题
  @Input() heading: string;
  // 是否有内容
  @Input() content: boolean;
  // 是否有其他信息
  @Input() other: boolean;
  constructor() { }

  ngOnInit() {
  }

}
