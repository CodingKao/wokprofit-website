import React from "react";
import { Card, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { KpiCard } from "../components/cards/KpiCards";
import { TrendAreaChart, TrendLineChart } from "../components/charts/Charts";
import { inventoryTrend } from "../data/mock";
import type { KpiMetric } from "../types";

const inventoryKpis: KpiMetric[] = [
  { id: "1", label: "Inventory Value", value: "$8,100", delta: -2.1, deltaLabel: "vs last week", tone: "info" },
  { id: "2", label: "Food Cost", value: "31.2%", delta: 1.4, deltaLabel: "vs target", tone: "warning" },
  { id: "3", label: "Inventory Turnover", value: "4.8x", delta: 0.3, deltaLabel: "vs last month", tone: "success" },
  { id: "4", label: "Waste", value: "$420", delta: 8.0, deltaLabel: "vs last month", tone: "danger" },
  { id: "5", label: "Variance", value: "2.1%", delta: -0.4, deltaLabel: "vs last month", tone: "success" },
];

const lowStock = [
  { item: "Jumbo Shrimp", level: "Critical", qty: "4 lbs" },
  { item: "Thai Basil", level: "Low", qty: "1.2 lbs" },
  { item: "Rice Noodles", level: "Low", qty: "6 packs" },
];

const topCost = [
  { item: "Chicken Thigh", spend: 2100 },
  { item: "Beef Brisket", spend: 1840 },
  { item: "Shrimp", spend: 1620 },
  { item: "Cooking Oil", spend: 780 },
];

export function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Inventory</h1>
        <p className="mt-1 text-sm text-slate-500">Track value, waste, and purchasing pressure in one place.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {inventoryKpis.map((m) => (
          <KpiCard key={m.id} metric={m} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Trend</CardTitle>
          </CardHeader>
          <TrendAreaChart data={inventoryTrend} color="#0ea5e9" />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Waste Trend</CardTitle>
          </CardHeader>
          <TrendLineChart
            data={[
              { label: "W1", value: 310 },
              { label: "W2", value: 360 },
              { label: "W3", value: 290 },
              { label: "W4", value: 420 },
            ]}
            color="#c8102e"
            suffix=""
          />
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top Cost Items</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {topCost.map((item) => (
              <div key={item.item} className="flex justify-between text-sm">
                <span className="font-medium">{item.item}</span>
                <span className="text-slate-500">${item.spend.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Low Inventory Alerts</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {lowStock.map((item) => (
              <div key={item.item} className="flex items-center justify-between rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                <div>
                  <p className="font-semibold">{item.item}</p>
                  <p className="text-sm text-slate-500">{item.qty} remaining</p>
                </div>
                <Badge tone={item.level === "Critical" ? "danger" : "warning"}>{item.level}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
