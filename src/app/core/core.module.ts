import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    // 全局配置
    {
      provide: 'APP_CONFIG', useValue: {
        // api请求根地址
        api: 'http://localhost:3000/api/v1'
      }
    }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
