import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { TrendLineChart } from "../components/charts/Charts";
import { vendors } from "../data/mock";
import { formatCurrency } from "../lib/utils";

export function VendorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const vendor = vendors.find((v) => v.id === id) || vendors[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link to="/app/vendors">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{vendor.name}</h1>
          <p className="text-sm text-slate-500">{vendor.category} · {formatCurrency(vendor.monthlySpend)}/mo</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
            <CardDescription>Recent invoices</CardDescription>
          </CardHeader>
          <div className="space-y-3 text-sm">
            {[
              ["Jun 28", "Seafood & produce", 2140],
              ["Jun 21", "Proteins & dry goods", 1860],
              ["Jun 14", "Weekly restock", 1725],
              ["Jun 7", "Seafood drop", 1980],
            ].map(([date, desc, amount]) => (
              <div key={String(date)} className="flex justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
                <div>
                  <p className="font-medium">{date}</p>
                  <p className="text-slate-500">{desc}</p>
                </div>
                <p className="font-semibold">{formatCurrency(Number(amount))}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Price History</CardTitle>
            <CardDescription>Jumbo shrimp / lb</CardDescription>
          </CardHeader>
          <TrendLineChart
            data={[
              { label: "Jan", value: 8.2 },
              { label: "Feb", value: 8.4 },
              { label: "Mar", value: 8.5 },
              { label: "Apr", value: 8.9 },
              { label: "May", value: 9.1 },
              { label: "Jun", value: 10.1 },
            ]}
            color="#c8102e"
            suffix=""
          />
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Suggested Alternatives</CardTitle>
          </CardHeader>
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <p className="font-semibold">Restaurant Depot — Chicken Thigh</p>
              <p className="mt-1 text-slate-500">8% lower than current quote · consistent availability</p>
            </div>
            <div className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <p className="font-semibold">Local seafood wholesaler — Shrimp</p>
              <p className="mt-1 text-slate-500">Competitive on jumbo size · negotiate weekly</p>
            </div>
          </div>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20">
          <CardHeader>
            <CardTitle>Potential Savings</CardTitle>
          </CardHeader>
          <p className="text-3xl font-bold text-emerald-600">{formatCurrency(vendor.savingsOpportunity)}/mo</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Based on switching two high-cost SKUs and renegotiating seafood pricing.
          </p>
        </Card>
      </div>
    </div>
  );
}
