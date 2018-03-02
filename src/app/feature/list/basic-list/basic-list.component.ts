import { Component, OnInit } from '@angular/core';
const basicList = [
  {
    id: 1,
    owner: 'jiayi',
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    status: 'active',
    percent: 80,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    href: 'https://ant.design',
    updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
    description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    activeUser: Math.ceil(Math.random() * 100000) + 100000,
    newUser: Math.ceil(Math.random() * 1000) + 1000,
    star: Math.ceil(Math.random() * 100) + 100,
    like: Math.ceil(Math.random() * 100) + 100,
    message: Math.ceil(Math.random() * 10) + 10,
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    members: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: '曲丽丽',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: '王昭君',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: '董娜娜',
      },
    ]
  },
  {
    id: 2,
    owner: 'jiayi',
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    status: 'active',
    percent: 80,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    href: 'https://ant.design',
    updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
    description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    activeUser: Math.ceil(Math.random() * 100000) + 100000,
    newUser: Math.ceil(Math.random() * 1000) + 1000,
    star: Math.ceil(Math.random() * 100) + 100,
    like: Math.ceil(Math.random() * 100) + 100,
    message: Math.ceil(Math.random() * 10) + 10,
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    members: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: '曲丽丽',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: '王昭君',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: '董娜娜',
      },
    ]
  },
  {
    id: 3,
    owner: 'jiayi',
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    status: 'active',
    percent: 80,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    href: 'https://ant.design',
    updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
    description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    activeUser: Math.ceil(Math.random() * 100000) + 100000,
    newUser: Math.ceil(Math.random() * 1000) + 1000,
    star: Math.ceil(Math.random() * 100) + 100,
    like: Math.ceil(Math.random() * 100) + 100,
    message: Math.ceil(Math.random() * 10) + 10,
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    members: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: '曲丽丽',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: '王昭君',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: '董娜娜',
      },
    ]
  },
  {
    id: 4,
    owner: 'jiayi',
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    status: 'active',
    percent: 80,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    href: 'https://ant.design',
    updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
    description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    activeUser: Math.ceil(Math.random() * 100000) + 100000,
    newUser: Math.ceil(Math.random() * 1000) + 1000,
    star: Math.ceil(Math.random() * 100) + 100,
    like: Math.ceil(Math.random() * 100) + 100,
    message: Math.ceil(Math.random() * 10) + 10,
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    members: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: '曲丽丽',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: '王昭君',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: '董娜娜',
      },
    ]
  },
  {
    id: 5,
    owner: 'jiayi',
    title: 'Angular',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    status: 'active',
    percent: 80,
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    href: 'https://ant.design',
    updatedAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    createdAt: new Date(new Date().getTime() - (1000 * 60 * 60 * 2)),
    subDescription: '那是一种内在的东西， 他们到达不了，也无法触及的',
    description: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
    activeUser: Math.ceil(Math.random() * 100000) + 100000,
    newUser: Math.ceil(Math.random() * 1000) + 1000,
    star: Math.ceil(Math.random() * 100) + 100,
    like: Math.ceil(Math.random() * 100) + 100,
    message: Math.ceil(Math.random() * 10) + 10,
    content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
    members: [
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
        name: '曲丽丽',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
        name: '王昭君',
      },
      {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
        name: '董娜娜',
      },
    ]
  }
];
@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {
  _list = [];
  _loading: boolean;
  constructor() {
    this._loading = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this._list = basicList;
      this._loading = false;
    }, 1000);
  }

  itemAction(type, item) {
    console.log('itemAction', type, item);
  }


  test(item) {
    console.log('wosho ', item);
  }
}
