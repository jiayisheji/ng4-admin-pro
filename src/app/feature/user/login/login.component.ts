import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  loginValidateForm: FormGroup;
  _target: Array<any>;
  messages: string;
  display: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this._target = this._parsingUrl(this.router.routerState.root.queryParams['value'].target);
    this.loginValidateForm = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(32)])]
    });
  }

  /**
   * 解析需要跳转的目标url地址
   * @private
   * @param {string} url
   * @returns {Array<any>}
   * @memberof LoginComponent
   */
  private _parsingUrl(url: string): Array<any> {
    if (!url) {
      return [];
    }
    if (url.indexOf('?') === -1) {
      return [[url], { queryParams: {} }];
    }
    const pattern = /(\w+)=(\w+)/ig;
    const parames: any = {};
    url.replace(pattern, (a, b, c) => {
      parames[b] = c;
      return '';
    });
    return [[url.split('?')[0]], { queryParams: parames }];
  }

  /** 登录 */
  save(event: Event, form) {
    event.preventDefault();
    for (const i of Object.keys(this.loginValidateForm.controls)) {
      this.loginValidateForm.controls[i].markAsDirty();
    }
    if (!form.valid) {
      return;
    }
    if (this.loading) {
      return;
    }
    this.loading = true;
    if (this.login(form.value)) {
      this.router.navigate(['/']);
    } else {
      alert('账号或密码不对');
      this.loading = false;
    }
  }

  /**
   * 模拟验证登录
   */
  private login(body) {
    if (body.username === 'admin') {
      return body.password === '888888';
    }
    if (body.username === 'user') {
      return body.password === '123456';
    }
    return false;
  }
}
