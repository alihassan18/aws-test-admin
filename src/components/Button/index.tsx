import clsx from "clsx";
import { ImSpinner9 } from "react-icons/im";
import { BsProps, IButtonProps, SsProps, VsProps } from "./button.interface";
import React from "react";

const baseStyles: BsProps = {
  solid:
    "inline-flex justify-center items-center font-display font-semibold rounded-md shadow-sm disabled:cursor-not-allowed",
  outline:
    "inline-flex justify-center items-center font-display font-semibold border rounded-md disabled:cursor-not-allowed",
};

const variantStyles: VsProps = {
  solid: {
    primary:
      "text-black border border-primary bg-primary hover:bg-primary/80 active:bg-primary/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-primary",
    secondary:
      "text-[#6B7280] border border-lightBorder dark:border-borderColor bg-lightHover dark:bg-gray17 hover:bg-lightHover/80 dark:hover:bg-gray17/80  active:bg-lightHover/90 dark:active:bg-gray17/90 active:text-[#6B7280]/80 disabled:opacity-30 disabled:hover:bg-lightHover dark:disabled:hover:bg-gray17",
    danger:
      "text-black border border-danger bg-danger hover:bg-danger/80 active:bg-danger/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-danger",
    orange:
      "text-black border border-orange bg-orange hover:bg-orange/80 active:bg-orange/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-orange",
    success:
      "text-black border border-success bg-success hover:bg-success/80 active:bg-success/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-success",
    info: "text-black border border-info bg-info hover:bg-info/80 active:bg-info/90 active:text-black/80 disabled:opacity-30 disabled:hover:bg-info",
  },
  outline: {
    primary:
      "border-primary text-primary hover:border-primary/70 hover:bg-primary/10 active:border-primary/20 active:bg-primary/10 active:text-primary/70 disabled:opacity-40 disabled:hover:border-primary disabled:hover:bg-transparent",
    secondary:
      "border-borderColor text-secondary hover:border-borderColor/70 hover:bg-secondary/10 active:border-borderColor/20 active:bg-secondary/10 active:text-secondary/70 disabled:opacity-40 disabled:hover:border-borderColor disabled:hover:bg-transparent",
    danger:
      "border-danger text-danger hover:border-danger/70 hover:bg-danger/10 active:border-danger/20 active:bg-danger/10 active:text-danger/70 disabled:opacity-40 disabled:hover:border-danger disabled:hover:bg-transparent",
    orange:
      "border-orange text-orange hover:border-orange/70 hover:bg-orange/10 active:border-orange/20 active:bg-orange/10 active:text-orange/70 disabled:opacity-40 disabled:hover:border-orange disabled:hover:bg-transparent",
    success:
      "border-success text-success hover:border-success/70 hover:bg-success/10 active:border-success/20 active:bg-success/10 active:text-success/70 disabled:opacity-40 disabled:hover:border-success disabled:hover:bg-transparent",
    info: "border-info text-info hover:border-info/70 hover:bg-info/10 active:border-info/20 active:bg-info/10 active:text-info/70 disabled:opacity-40 disabled:hover:border-info disabled:hover:bg-transparent",
  },
};

const sizeStyles: SsProps = {
  xs: "px-2 py-1 text-sm font-display !font-bold flex-shrink-0",
  sm: "px-2.5 py-1 text-xs font-display",
  md: "px-4 py-2 text-sm font-display",
  lg: "px-7 py-2 text-base font-display",
};
export function Button({
  variant = "solid",
  color = "primary",
  size = "md",
  className,
  type,
  disabled,
  isLoading,
  children,
  loaderClass,
  ...props
}: IButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        sizeStyles[size],
        className,
        isLoading &&
          "relative !cursor-wait !text-transparent hover:!text-transparent"
      )}
      type={type ? type : "button"}
      disabled={disabled ? true : false}
      {...props}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-black ">
          <ImSpinner9 className={clsx("animate-spin text-sm ", loaderClass)} />
        </div>
      )}
      {children}
    </button>
  );
}
