# Dialog

## Services

### open 打开方法
打开一个包含给定组件的模式对话框。

#### Parameters
componentRef

加载到对话框中的组件的类型，或作为对话框内容实例化的TemplateRef。

config

额外的配置选项。参考Config

#### Returns

DialogRef<T>

引用新打开的对话框。

## Directives

### appDialogHeader
对话框头部
Selector：[app-dialog-header],[appDialogHeader]

### appDialogBody
对话框内容
Selector：[app-dialog-body],[appDialogBody]

### appDialogFooter
对话框尾部
Selector：[app-dialog-footer],[appDialogFooter]

可选配置：
align 按钮对齐方式（默认左对齐） 
center 居中对齐
end 右对齐

### appDialogClose
关闭对话框
Selector：[appDialogClose],[app-dialog-close]

## Config

resolve?: {} | null = null; // 给组件传入数据 keys 会注入子组件的inputs里
zIndex?: number;   // 层级 默认Backdrop 1040 Dialog 1050 Dialog总是比Backdrop多10
height?: string;   // 高度 默认宽度600px
width?: string;    // 宽度 auto
hasBackdrop?: boolean; // 是否有遮罩背景
customClass?: string; // 自定义样式 dialog-backdrop-customClass dialog-customClass