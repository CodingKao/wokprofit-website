import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "../../lib/utils";
import type { KpiMetric } from "../../types";

export function KpiCard({ metric }: { metric: KpiMetric }) {
  const positive = metric.delta >= 0;
  const good =
    metric.tone === "success" ||
    (metric.tone !== "warning" && metric.tone !== "danger" && positive);

  return (
    <Card className="hover:-translate-y-0.5">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{metric.label}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {metric.value}
      </p>
      <div
        className={cn(
          "mt-3 inline-flex items-center gap-1 text-xs font-semibold",
          good ? "text-emerald-600" : "text-amber-600"
        )}
      >
        {positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
        {positive ? "+" : ""}
        {metric.delta}% {metric.deltaLabel}
      </div>
    </Card>
  );
}

export function ProfitScoreCard({
  score,
  max,
  grade,
  delta,
}: {
  score: number;
  max: number;
  grade: string;
  delta: number;
}) {
  const pct = (score / max) * 100;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <Card className="flex flex-col items-center justify-center py-8">
      <p className="text-sm font-medium text-slate-500">Profit Score</p>
      <div className="relative my-4 h-36 w-36">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-100 dark:text-slate-800" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#c8102e"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tracking-tight">{score}</span>
          <span className="text-xs text-slate-400">/ {max}</span>
        </div>
      </div>
      <p className="text-lg font-semibold">Grade {grade}</p>
      <p className="mt-1 text-sm font-medium text-emerald-600">+{delta} this month</p>
    </Card>
  );
}
