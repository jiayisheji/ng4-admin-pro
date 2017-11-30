import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('currentUser', JSON.stringify({ username: 'admin' }));
    this._router.navigate(['/dashboard/analysis']);
  }
}
