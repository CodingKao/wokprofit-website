import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import { menuItems } from "../data/mock";
import { formatCurrency, formatPercent } from "../lib/utils";

const matrixTone = {
  Star: "success" as const,
  "Plow Horse": "info" as const,
  Puzzle: "warning" as const,
  Dog: "danger" as const,
};

export function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(menuItems.map((m) => m.category)))];

  const filtered = useMemo(
    () =>
      menuItems.filter((item) => {
        const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        return matchesQuery && matchesCategory;
      }),
    [query, category]
  );

  const matrix = {
    Star: menuItems.filter((m) => m.profitability === "Star"),
    "Plow Horse": menuItems.filter((m) => m.profitability === "Plow Horse"),
    Puzzle: menuItems.filter((m) => m.profitability === "Puzzle"),
    Dog: menuItems.filter((m) => m.profitability === "Dog"),
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Menu Performance</h1>
        <p className="mt-1 text-sm text-slate-500">See which items drive profit — and which drain margin.</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input className="pl-9" placeholder="Search menu items..." value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
        <select
          className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm dark:border-slate-700 dark:bg-slate-900"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <Input type="month" defaultValue="2026-06" className="sm:w-44" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(matrix).map(([key, items]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{key}s</CardTitle>
              <Badge tone={matrixTone[key as keyof typeof matrixTone]}>{items.length}</Badge>
            </CardHeader>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-medium">{formatPercent(item.marginPercent)}</span>
                </li>
              ))}
              {items.length === 0 && <li className="text-slate-400">None this period</li>}
            </ul>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Menu Engineering Table</CardTitle>
          <CardDescription>Contribution margin and popularity</CardDescription>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-800">
              <tr>
                {["Menu Item", "Sold", "Revenue", "Food Cost", "Contribution Margin", "Margin %", "Popularity", "Profitability"].map((h) => (
                  <th key={h} className="pb-3 pr-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                  <td className="py-3 pr-4 font-medium">{item.name}</td>
                  <td className="py-3 pr-4">{item.sold}</td>
                  <td className="py-3 pr-4">{formatCurrency(item.revenue)}</td>
                  <td className="py-3 pr-4">{formatCurrency(item.foodCost)}</td>
                  <td className="py-3 pr-4 text-emerald-600">{formatCurrency(item.contributionMargin)}</td>
                  <td className="py-3 pr-4">{formatPercent(item.marginPercent)}</td>
                  <td className="py-3 pr-4">{item.popularity}</td>
                  <td className="py-3 pr-4">
                    <Badge tone={matrixTone[item.profitability]}>{item.profitability}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
