import React from "react";
import { cn } from "../../lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("dash-card p-5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex items-start justify-between gap-3", className)}>{children}</div>;
}

export function CardTitle({
  className,
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50", className)}>{children}</h3>;
}

export function CardDescription({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>{children}</p>;
}
