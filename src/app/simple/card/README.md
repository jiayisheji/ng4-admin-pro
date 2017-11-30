# card 【卡】

## Component 【组件】

### CardComponent 【卡容器组件】

#### Selector(选择器)：sim-card,[sim-card]

#### Attributes(css属性选择器): 
- [sim-card-bordered],[card-bordered] 加这属性就会带上边框
- [sim-card-hovering],[card-hovering] 加这属性就会没有阴影效果，hover时候才有。默认是有阴影效果的
- [sim-card-paddings],[card-paddings] 加这属性就会有padding效果，子级无padding。默认是无padding，子级带padding

### CardHeaderComponent 【卡容器头部组件】

#### Selector(选择器)：sim-card-header,[sim-card-header]

### CardContentComponent 【对话框尾部】

#### Selector(选择器)：sim-card-content,[sim-card-content]

#### Bindings(属性绑定):
 
##### Inputs(输入属性绑定):
- loading 参数：布尔值，默认false。 说明：如果有这属性就会有占位加载loading效果


### DividerComponent 【分割线组件】

#### Selector(选择器)：sim-divider,[sim-divider]

## Examples 【示例】


```html
<sim-card sim-card-paddings>
    <sim-card-header>sim-card-header-1</sim-card-header>
    <sim-divider></sim-divider>
    <sim-card-content [loading]="_loading">sim-card-content-1</sim-card-content>
</sim-card>
<button (click)="_loading = false">打开弹窗</button>

<div sim-card sim-card-hovering>
    <div sim-card-header>sim-card-header-2</div>
    <div sim-divider></div>
    <div sim-card-content [loading]="_loading">sim-card-content-2</div>
</div>
```