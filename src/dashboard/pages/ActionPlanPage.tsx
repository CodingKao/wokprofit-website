import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { actionTasks } from "../data/mock";
import { formatCurrency } from "../lib/utils";

const statusTone = {
  todo: "default" as const,
  in_progress: "info" as const,
  done: "success" as const,
  blocked: "danger" as const,
};

const priorityTone = {
  critical: "danger" as const,
  high: "warning" as const,
  medium: "info" as const,
  low: "default" as const,
};

export function ActionPlanPage() {
  const done = actionTasks.filter((t) => t.status === "done");
  const remaining = actionTasks.filter((t) => t.status !== "done");
  const completion = Math.round((done.length / actionTasks.length) * 100);
  const completedSavings = done.reduce((s, t) => s + t.expectedSavings, 0);
  const remainingOpportunity = remaining.reduce((s, t) => s + t.expectedSavings, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Action Plan</h1>
        <p className="mt-1 text-sm text-slate-500">Turn insights into owned tasks with clear savings targets.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Overall Completion</p>
          <p className="mt-2 text-3xl font-bold">{completion}%</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${completion}%` }} />
          </div>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Completed Savings</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">{formatCurrency(completedSavings)}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Remaining Opportunity</p>
          <p className="mt-2 text-3xl font-bold text-brand">{formatCurrency(remainingOpportunity)}</p>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Task Board</CardTitle>
          <CardDescription>Priority work for Thai Garden Kitchen</CardDescription>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-800">
              <tr>
                {["Task", "Priority", "Owner", "Status", "Due Date", "Expected Savings"].map((h) => (
                  <th key={h} className="pb-3 pr-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {actionTasks.map((task) => (
                <tr key={task.id}>
                  <td className="py-3 pr-4 font-medium">{task.task}</td>
                  <td className="py-3 pr-4">
                    <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
                  </td>
                  <td className="py-3 pr-4">{task.owner}</td>
                  <td className="py-3 pr-4">
                    <Badge tone={statusTone[task.status]}>{task.status.replace("_", " ")}</Badge>
                  </td>
                  <td className="py-3 pr-4">{task.dueDate}</td>
                  <td className="py-3 pr-4 font-semibold text-emerald-600">{formatCurrency(task.expectedSavings)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
