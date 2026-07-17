import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { vendors } from "../data/mock";
import { formatCurrency, formatPercent } from "../lib/utils";

export function VendorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Vendors</h1>
        <p className="mt-1 text-sm text-slate-500">Spend, price drift, and savings opportunities by supplier.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {vendors.map((vendor) => (
          <Link key={vendor.id} to={`/app/vendors/${vendor.id}`} className="block">
            <Card className="h-full hover:-translate-y-0.5 hover:border-brand/30">
              <CardHeader>
                <div>
                  <CardTitle>{vendor.name}</CardTitle>
                  <CardDescription>{vendor.category}</CardDescription>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Monthly Spend</span>
                  <span className="font-semibold">{formatCurrency(vendor.monthlySpend)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Price Changes</span>
                  <Badge tone={vendor.priceChange > 0 ? "danger" : "success"}>
                    {vendor.priceChange > 0 ? "+" : ""}
                    {formatPercent(vendor.priceChange)}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Invoices</span>
                  <span className="font-semibold">{vendor.invoices}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-slate-500">Savings Opportunity</span>
                  <span className="font-bold text-emerald-600">{formatCurrency(vendor.savingsOpportunity)}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
