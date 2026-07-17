import React from "react";
import { Sparkles } from "lucide-react";
import { KpiCard, ProfitScoreCard } from "../components/cards/KpiCards";
import { TrendAreaChart, TrendLineChart } from "../components/charts/Charts";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import {
  aiCoach,
  alerts,
  dashboardKpis,
  foodCostTrend,
  opportunities,
  primeCostTrend,
  profitScore,
  profitTrend,
  revenueTrend,
} from "../data/mock";
import { formatCurrency } from "../lib/utils";

const toneMap = {
  danger: "danger" as const,
  warning: "warning" as const,
  success: "success" as const,
  info: "info" as const,
};

export function OverviewPage() {
  const totalOpportunity = opportunities.reduce((sum, o) => sum + o.savings, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Am I making money? Where am I losing it? What should I fix first?
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {dashboardKpis.map((metric) => (
          <KpiCard key={metric.id} metric={metric} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <ProfitScoreCard {...profitScore} />
        <Card className="border-brand/20 bg-gradient-to-br from-white to-rose-50/60 lg:col-span-2 dark:from-slate-900 dark:to-rose-950/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" />
              <CardTitle>Today&apos;s AI Profit Coach</CardTitle>
            </div>
          </CardHeader>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{aiCoach.greeting}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {aiCoach.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-brand/10 px-4 py-3 text-sm font-semibold text-brand">
            Today&apos;s Priority: {aiCoach.priority}
          </p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trend</CardTitle>
            <CardDescription>Last 6 months</CardDescription>
          </CardHeader>
          <TrendAreaChart data={revenueTrend} />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profit Trend</CardTitle>
            <CardDescription>Net profit by month</CardDescription>
          </CardHeader>
          <TrendAreaChart data={profitTrend} color="#10b981" />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prime Cost Trend</CardTitle>
          </CardHeader>
          <TrendLineChart data={primeCostTrend} color="#0ea5e9" />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Food Cost Trend</CardTitle>
          </CardHeader>
          <TrendLineChart data={foodCostTrend} color="#e8a317" />
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Critical Alerts</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Badge tone={toneMap[alert.tone]}>{alert.tone}</Badge>
                    <p className="text-sm font-semibold">{alert.title}</p>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{alert.detail}</p>
                </div>
                <span className="shrink-0 text-xs text-slate-400">{alert.time}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Top Profit Opportunities</CardTitle>
              <CardDescription className="mt-1">
                Total Opportunity{" "}
                <span className="font-semibold text-emerald-600">{formatCurrency(totalOpportunity)}/month</span>
              </CardDescription>
            </div>
          </CardHeader>
          <div className="space-y-3">
            {opportunities.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:border-brand/30 dark:border-slate-800"
              >
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{item.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Potential Savings</p>
                  <p className="font-bold text-emerald-600">{formatCurrency(item.savings)}/mo</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
