/**
 * dialog 配置参数
 */
export class DialogConfig<D = any> {
  /** 传递给组件的数据 */
  resolve?: D | null = null; // 给组件传入数据
  zIndex?: number;   // 层级
  height?: string;   // 高度
  width?: string;    // 宽度
  hasBackdrop?: boolean; // 是否有遮罩背景
  customClass?: string; // 自定义样式 dialog-backdrop-customClass dialog-customClass
}
