import clsx from "clsx";
import React from "react";

interface Iprops {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: Iprops) {
  return (
    <label className={clsx(className, "mb-2 inline-block leading-3")}>
      {children}
    </label>
  );
}
