import React, { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Tabs } from "../components/ui/Tabs";
import { KpiCard } from "../components/cards/KpiCards";
import { ExpensePieChart, TrendAreaChart } from "../components/charts/Charts";
import { expenseBreakdown, profitTrend, revenueTrend } from "../data/mock";
import type { KpiMetric } from "../types";

const financialKpis: KpiMetric[] = [
  { id: "1", label: "Revenue", value: "$48,240", delta: 8.2, deltaLabel: "MoM", tone: "success" },
  { id: "2", label: "COGS", value: "$15,050", delta: 3.1, deltaLabel: "MoM", tone: "warning" },
  { id: "3", label: "Gross Profit", value: "$33,190", delta: 6.4, deltaLabel: "MoM", tone: "success" },
  { id: "4", label: "Operating Expenses", value: "$27,210", delta: 1.2, deltaLabel: "MoM", tone: "info" },
  { id: "5", label: "Net Profit", value: "$5,980", delta: 9.0, deltaLabel: "MoM", tone: "success" },
];

const budgetVsActual = [
  { label: "Jan", value: 4200, secondary: 4000 },
  { label: "Feb", value: 5100, secondary: 4500 },
  { label: "Mar", value: 4600, secondary: 4500 },
  { label: "Apr", value: 5400, secondary: 5000 },
  { label: "May", value: 5800, secondary: 5200 },
  { label: "Jun", value: 5980, secondary: 5500 },
];

export function FinancialsPage() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Financials</h1>
          <p className="mt-1 text-sm text-slate-500">Clear visibility into P&L, cash, and budget performance.</p>
        </div>
        <Tabs
          tabs={[
            { value: "overview", label: "Overview" },
            { value: "pl", label: "Profit & Loss" },
            { value: "bs", label: "Balance Sheet" },
            { value: "cf", label: "Cash Flow" },
            { value: "budget", label: "Budget" },
          ]}
          defaultValue="overview"
          onChange={setTab}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {financialKpis.map((m) => (
          <KpiCard key={m.id} metric={m} />
        ))}
      </div>

      {tab === "overview" && (
        <div className="grid gap-4 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <TrendAreaChart data={revenueTrend} />
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Profit</CardTitle>
            </CardHeader>
            <TrendAreaChart data={profitTrend} color="#10b981" />
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Budget vs Actual</CardTitle>
              <CardDescription>Profit target tracking</CardDescription>
            </CardHeader>
            <TrendAreaChart data={budgetVsActual.map((d) => ({ label: d.label, value: d.value }))} color="#0ea5e9" />
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <ExpensePieChart data={expenseBreakdown} />
          </Card>
        </div>
      )}

      {tab !== "overview" && (
        <Card>
          <CardTitle className="capitalize">{tab === "pl" ? "Profit & Loss" : tab === "bs" ? "Balance Sheet" : tab === "cf" ? "Cash Flow" : "Budget"} Statement</CardTitle>
          <CardDescription className="mt-2">
            Detailed {tab === "pl" ? "P&L" : tab} view with restaurant-optimized chart of accounts. Connect your books to unlock live statements.
          </CardDescription>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-800">
                <tr>
                  <th className="pb-3 font-medium">Line Item</th>
                  <th className="pb-3 font-medium">Actual</th>
                  <th className="pb-3 font-medium">Budget</th>
                  <th className="pb-3 font-medium">Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  ["Food Revenue", "$42,100", "$40,000", "+$2,100"],
                  ["Beverage Revenue", "$6,140", "$5,800", "+$340"],
                  ["Food Cost", "$15,050", "$14,400", "-$650"],
                  ["Labor Cost", "$13,800", "$13,500", "-$300"],
                  ["Net Operating Profit", "$5,980", "$5,500", "+$480"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="py-3 font-medium">{row[0]}</td>
                    <td className="py-3">{row[1]}</td>
                    <td className="py-3 text-slate-500">{row[2]}</td>
                    <td className="py-3 text-emerald-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
