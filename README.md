# Ng4 Admin Pro

开箱即用的中台前端/设计解决方案。

- 预览：[http://preview.pro.ant.design](http://preview.pro.ant.design)
- 参考：[http://pro.ant.design](http://pro.ant.design)

喜欢的话请点star，想订阅点watch，欢迎fork！

## 快速开始

### 安装必须依赖环境：

- 安装[nodejs](https://nodejs.org/en/) >= 8.x

- 安装[Angular-cli](https://github.com/angular/angular-cli) >= 1.4.7
```
npm install -g @angular/cli
```

### 安装可选依赖环境：

- 安装[vscode](https://code.visualstudio.com/)

常用插件推荐：
```
Visual Studio Code Commitizen Support: git commit message书写规范提示模板

Angular5 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout：ng4/5非常不错简写提示插件
```

命令行运行下列命令，快速启动开发服务：

```
git clone https://github.com/jiayisheji/ng4-admin-pro.git
cd ng4-admin-pro
npm install
npm start // 默认浏览器自动访问 http://localhost:9090
```
需要帮助？请先阅读 [开发文档](/docs/getting-started.md) 和 [常见问题](/docs/faq.md)， 如果未能解决，可以到 GitHub 上 [进行提问](https://github.com/jiayisheji/ng4-admin-pro/issues)。


## 兼容性

现代浏览器及 IE11。

## 技术栈

- [Angular-cli](https://github.com/angular/angular-cli) 脚手架
- [Angular4.4+](https://github.com/angular/angular) 核心框架 (方便以后迁移5x)
  1. @angular/core 核心包
  2. @angular/common 共享包
  3. @angular/compiler 编译包
  4. @angular/forms 表单包
  5. @angular/http http包
  6. @angular/router 路由包
  7. @angular/animations 动画包
- [flex-layout](https://github.com/angular/flex-layout) flex布局包
- [ngrx4x](https://github.com/ngrx/store) ngrx状态管理
  1. @ngrx/core ngrx核心包
  2. @ngrx/store ngrx数据包
  3. @ngrx/router-store 路由状态
  4. @ngrx/effects 数据锁包
  5. @ngrx/store-devtools 调试器依赖
- [zone.js](https://github.com/angular/zone.js) 依赖库
- [rxjs](https://github.com/ReactiveX/rxjs) 依赖库
- [typescript](https://github.com/angular/angular) 默认语言
- [karma](https://github.com/angular/angular) 单元测试框架
- [jasmine](https://github.com/angular/angular) 单元测试框架指定测试套件
- [protractor](https://github.com/angular/angular) 集成测试
- [Echarts3](http://echarts.baidu.com/) 图表依赖库
- [scss](http://echarts.baidu.com/) css预处理（本来打算postcss Angular-cli一直不支持自定义，每次去改配置麻烦）

应用架构图
![应用架构图](http://on-img.com/chart_image/5a166576e4b04f355d2fdf26.png)
## 参与贡献

我非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :smiley:：

- 在你的公司或个人项目中使用 Ng4 Admin Pro。
- 通过 [Issue](https://github.com/jiayisheji/ng4-admin-pro/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/jiayisheji/ng4-admin-pro/pulls) 改进 Pro 的代码
