import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { profitLeaks } from "../data/mock";
import { formatCurrency } from "../lib/utils";
import type { ProfitLeak } from "../types";

const priorityTone = {
  critical: "danger" as const,
  high: "warning" as const,
  medium: "info" as const,
  low: "default" as const,
};

export function ProfitLeaksPage() {
  const [selected, setSelected] = useState<ProfitLeak | null>(null);
  const total = profitLeaks.reduce((sum, l) => sum + l.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Profit Leaks</h1>
          <p className="mt-1 text-sm text-slate-500">The signature view — where money is escaping every month.</p>
        </div>
        <Card className="border-brand/30 bg-brand/5 px-6 py-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">Total Profit Leak</p>
          <p className="text-3xl font-bold text-brand">{formatCurrency(total)}/month</p>
        </Card>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {profitLeaks.map((leak) => (
          <button key={leak.id} type="button" onClick={() => setSelected(leak)} className="text-left">
            <Card className="h-full border-red-100 hover:-translate-y-0.5 hover:border-brand/40 dark:border-red-950">
              <p className="text-sm font-medium text-slate-500">{leak.title}</p>
              <p className="mt-3 text-3xl font-bold tracking-tight text-brand">{formatCurrency(leak.amount)}</p>
              <p className="mt-2 text-xs text-slate-400">Tap for root cause & recommendation</p>
            </Card>
          </button>
        ))}
      </div>

      {selected && (
        <Card className="border-brand/20">
          <CardHeader>
            <div>
              <CardTitle>{selected.title}</CardTitle>
              <CardDescription>{formatCurrency(selected.amount)} monthly impact</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Badge tone={priorityTone[selected.priority]}>{selected.priority}</Badge>
              <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>
                Close
              </Button>
            </div>
          </CardHeader>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">Root Cause</p>
              <p className="mt-1 text-sm">{selected.rootCause}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">Evidence</p>
              <p className="mt-1 text-sm">{selected.evidence}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">Recommendation</p>
              <p className="mt-1 text-sm">{selected.recommendation}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">Expected Savings</p>
              <p className="mt-1 text-lg font-bold text-emerald-600">{formatCurrency(selected.expectedSavings)}/mo</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
