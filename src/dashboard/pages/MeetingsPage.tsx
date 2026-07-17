import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { meetings } from "../data/mock";

export function MeetingsPage() {
  const upcoming = meetings.filter((m) => m.status === "upcoming");
  const past = meetings.filter((m) => m.status === "past");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Meetings</h1>
        <p className="mt-1 text-sm text-slate-500">Keep reviews, notes, and action items in one operating rhythm.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {upcoming.map((m) => (
              <div key={m.id} className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{m.title}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {m.date} · {m.time}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{m.attendees.join(", ")}</p>
                  </div>
                  <Badge tone="info">Upcoming</Badge>
                </div>
                {m.actionItems && (
                  <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                    {m.actionItems.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>July 2026</CardDescription>
          </CardHeader>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <div key={d} className="py-1 font-semibold text-slate-400">
                {d}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <div
                key={day}
                className={`rounded-lg py-2 ${[18, 22].includes(day) ? "bg-brand text-white font-semibold" : "text-slate-600 dark:text-slate-300"}`}
              >
                {day}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Past Meetings</CardTitle>
        </CardHeader>
        <div className="space-y-3">
          {past.map((m) => (
            <div key={m.id} className="rounded-xl border border-slate-100 p-4 dark:border-slate-800">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold">{m.title}</p>
                  <p className="text-sm text-slate-500">
                    {m.date} · {m.time}
                  </p>
                </div>
                <Badge>Past</Badge>
              </div>
              {m.notes && <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{m.notes}</p>}
              {m.actionItems && (
                <div className="mt-3">
                  <p className="text-xs font-semibold uppercase text-slate-400">Action Items</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    {m.actionItems.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
