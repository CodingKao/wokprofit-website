import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { KpiCard } from "../components/cards/KpiCards";
import { DualBarChart } from "../components/charts/Charts";
import { laborByDay } from "../data/mock";
import type { KpiMetric } from "../types";

const laborKpis: KpiMetric[] = [
  { id: "1", label: "Labor %", value: "28.6%", delta: -0.8, deltaLabel: "vs last month", tone: "success" },
  { id: "2", label: "Labor $", value: "$13,800", delta: 1.2, deltaLabel: "vs last month", tone: "info" },
  { id: "3", label: "Sales per Labor Hour", value: "$48.20", delta: 4.1, deltaLabel: "vs target", tone: "success" },
  { id: "4", label: "Average Wage", value: "$18.40", delta: 0.5, deltaLabel: "vs last month", tone: "info" },
  { id: "5", label: "Overtime Hours", value: "42", delta: 12, deltaLabel: "vs last month", tone: "warning" },
  { id: "6", label: "Hours Scheduled", value: "748", delta: -3.2, deltaLabel: "vs last month", tone: "success" },
];

const recommendations = [
  { day: "Tuesday Lunch", status: "Overstaffed", savings: 240 },
  { day: "Wednesday Lunch", status: "Overstaffed", savings: 180 },
  { day: "Thursday Close", status: "Slight overtime", savings: 95 },
];

export function LaborPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Labor</h1>
        <p className="mt-1 text-sm text-slate-500">Schedule smarter. Protect margins without hurting service.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {laborKpis.map((m) => (
          <KpiCard key={m.id} metric={m} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Labor by Day</CardTitle>
            <CardDescription>Sales vs labor spend</CardDescription>
          </CardHeader>
          <DualBarChart data={laborByDay} />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hourly Staffing Recommendations</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {recommendations.map((r) => (
              <div key={r.day} className="flex items-center justify-between rounded-xl border border-slate-100 p-4 dark:border-slate-800">
                <div>
                  <p className="font-semibold">{r.day}</p>
                  <Badge tone="warning" className="mt-1">{r.status}</Badge>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Estimated Savings</p>
                  <p className="font-bold text-emerald-600">${r.savings}/week</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
