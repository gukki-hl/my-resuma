import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// 定义变体
const buttonVariants = cva(
  // 基础样式（始终生效）
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // 主色背景 + 主色前景文字，hover 略透明
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        //红色危险背景，用于删除/警告操作
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        //透明背景 + 边框，hover 变浅色背景
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        //次要色背景，hover 略透明
        secondary:
          "bg-secondary text-secondary=foreground hover:bg-secondary/80",
        //完全透明，hover 才显示背景色（最低调）
        ghost: "hover:bg-accent hover:text-accent-foreground",
        //无背景，文字带下划线，像超链接
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        //高 40px，左右 padding 16px
        default: "h-10 px-4 py-2",
        //高 36px，左右 padding 12px，偏小
        sm: "h-9 rounded-md px-3",
        //高 44px，左右 padding 32px，偏大
        lg: "h-11 rounded-md px-8",
        //正方形 40×40px，专门放图标用
        icon: "h-10 w-10",
      },
    },
    // 默认变体
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// 推导出 Props 类型
//React.ButtonHTMLAttributes<HTMLButtonElement>
// 继承 React 中 <button> 元素的所有原生 HTML 属性，例如 onClick、disabled、type、className 等。
//VariantProps<typeof buttonVariants>
//这是 cva（class-variance-authority）库提供的工具类型，用于从 buttonVariants 配置中自动推导出变体属性的类型。
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 在组件中使用
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
