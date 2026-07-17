import React from "react";
import { cn } from "../../lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition",
        "placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20",
        "dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
        className
      )}
      {...props}
    />
  );
}
