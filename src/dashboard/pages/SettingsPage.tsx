import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { RESTAURANT } from "../data/mock";

export function SettingsPage() {
  const sections = [
    "Restaurant Information",
    "Users",
    "Permissions",
    "Notifications",
    "Billing",
    "Integrations",
    "Password",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Manage restaurant profile, access, billing, and integrations.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <Card className="h-fit p-3">
          <nav className="space-y-1">
            {sections.map((s, i) => (
              <button
                key={s}
                type="button"
                className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                  i === 0 ? "bg-brand/10 text-brand" : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {s}
              </button>
            ))}
          </nav>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Information</CardTitle>
              <CardDescription>Primary profile for Thai Garden Kitchen</CardDescription>
            </CardHeader>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Restaurant Name</label>
                <Input defaultValue={RESTAURANT.name} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Location</label>
                <Input defaultValue={RESTAURANT.location} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Owner</label>
                <Input defaultValue={RESTAURANT.owner} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Cuisine</label>
                <Input defaultValue="Thai / Asian Fusion" />
              </div>
            </div>
            <Button className="mt-6">Save changes</Button>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing</CardTitle>
              <CardDescription>Current plan</CardDescription>
            </CardHeader>
            <p className="text-lg font-semibold">Profit Optimization · $1,500/mo</p>
            <p className="mt-1 text-sm text-slate-500">Next invoice on August 1, 2026</p>
            <Button variant="outline" className="mt-4">
              Manage billing
            </Button>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>POS and accounting connections</CardDescription>
            </CardHeader>
            <div className="space-y-3 text-sm">
              {["Square POS", "Clover POS", "QuickBooks Online", "Toast (coming soon)"].map((name) => (
                <div key={name} className="flex items-center justify-between rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                  <span className="font-medium">{name}</span>
                  <Button variant="secondary" size="sm">
                    {name.includes("coming") ? "Notify me" : "Connected"}
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
