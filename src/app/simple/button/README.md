# Button 【按钮】

## Component 【组件】

## ButtonComponent 【按钮组件】

#### Selector(选择器)：[sim-button]、

#### Bindings(属性绑定):
 
##### Inputs(输入属性绑定):
- color 参数：字符串，默认default。颜色 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link' | 'info'
- size 参数：字符串，默认default。 尺寸 'default' | 'lg' | 'md' | 'sm' | 'xs'
- shape 参数：字符串，默认default。形状 'default' | 'outline' | 'dashed' | 'pill'

## Directives 【指令】
### ButtonBlockDirective 【块级按钮】

#### Selector(选择器)：[simButtonBlock],[sim-button-block]

### ButtonPillDirective 【胶囊按钮】

#### Selector(选择器)：[simButtonPill],[sim-button-pill]

```html
<h2>color</h2>
<div>
    <button sim-button>default</button>
    <button sim-button [color]="'primary'">primary</button>
    <button sim-button [color]="'secondary'">secondary</button>
    <button sim-button [color]="'success'">success</button>
    <button sim-button [color]="'danger'">danger</button>
    <button sim-button [color]="'warning'">warning</button>
    <button sim-button [color]="'info'">info</button>
    <button sim-button [color]="'link'">link</button>
</div>
<br />
<h2>size</h2>
<div>
    <button sim-button [color]="'primary'" [size]="'lg'">大按钮</button>
    <button sim-button [color]="'info'">default|中等按钮</button>
    <button sim-button [color]="'danger'" [size]="'sm'">小按钮</button>
    <button sim-button [color]="'warning'" [size]="'xs'">超小按钮</button>
</div>
<br />
<h2>shape</h2>
<h3>default</h3>
<div>
    <button sim-button>default</button>
    <button sim-button [color]="'primary'">primary</button>
    <button sim-button [color]="'secondary'">secondary</button>
    <button sim-button [color]="'success'">success</button>
    <button sim-button [color]="'danger'">danger</button>
    <button sim-button [color]="'warning'">warning</button>
    <button sim-button [color]="'info'">info</button>
</div>
<br />
<h3>outline</h3>
<div>
    <button sim-button [shape]="'outline'">default</button>
    <button sim-button [color]="'primary'" [shape]="'outline'">primary</button>
    <button sim-button [color]="'secondary'" [shape]="'outline'">secondary</button>
    <button sim-button [color]="'success'" [shape]="'outline'">success</button>
    <button sim-button [color]="'danger'" [shape]="'outline'">danger</button>
    <button sim-button [color]="'warning'" [shape]="'outline'">warning</button>
    <button sim-button [color]="'info'" [shape]="'outline'">info</button>
</div>
<br />
<h3>dashed</h3>
<div>
    <button sim-button [shape]="'dashed'">default</button>
    <button sim-button [color]="'primary'" [shape]="'dashed'">primary</button>
    <button sim-button [color]="'secondary'" [shape]="'dashed'">secondary</button>
    <button sim-button [color]="'success'" [shape]="'dashed'">success</button>
    <button sim-button [color]="'danger'" [shape]="'dashed'">danger</button>
    <button sim-button [color]="'warning'" [shape]="'dashed'">warning</button>
    <button sim-button [color]="'info'" [shape]="'dashed'">info</button>
</div>
<br />
<h2>pill</h2>
<div>
    <button sim-button sim-button-pill>default</button>
    <button sim-button [color]="'primary'" sim-button-pill [shape]="'outline'">primary</button>
    <button sim-button [color]="'secondary'" sim-button-pill [shape]="'dashed'">secondary</button>
    <button sim-button [color]="'success'" sim-button-pill>success</button>
    <button sim-button [color]="'danger'" sim-button-pill>danger</button>
    <button sim-button [color]="'warning'" sim-button-pill>warning</button>
    <button sim-button [color]="'info'" sim-button-pill>info</button>
</div>
<br />
<h2>block</h2>
<div>
    <button sim-button [color]="'primary'" sim-button-block>primary block</button>
</div>
<br />
```