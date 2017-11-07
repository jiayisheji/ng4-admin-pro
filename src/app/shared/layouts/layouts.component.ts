import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  _fold: boolean;
  constructor() { }

  ngOnInit() {
  }

  toggleSider(event) {
    console.log(event);
    this._fold = event;
  }

}
