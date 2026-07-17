import React from "react";
import { cn } from "../../lib/utils";

const tones = {
  default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
  danger: "bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300",
  info: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
  brand: "bg-brand/10 text-brand dark:bg-brand/20",
};

export function Badge({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: keyof typeof tones;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
