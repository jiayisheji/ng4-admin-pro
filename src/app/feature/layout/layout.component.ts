import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  _fold: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleSider(event) {
    console.log(event);
    this._fold = event;
  }

}
