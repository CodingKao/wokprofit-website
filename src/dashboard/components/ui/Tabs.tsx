import React, { useState } from "react";
import { cn } from "../../lib/utils";

export function Tabs({
  tabs,
  defaultValue,
  onChange,
  className,
}: {
  tabs: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}) {
  const [active, setActive] = useState(defaultValue || tabs[0]?.value);

  const select = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className={cn("inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => select(tab.value)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-sm font-medium transition",
            active === tab.value
              ? "bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white"
              : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
