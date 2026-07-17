import React from "react";
import { Download, Eye, FileSpreadsheet } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { reports } from "../data/mock";

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Reports</h1>
        <p className="mt-1 text-sm text-slate-500">Download-ready profit intelligence for owners and advisors.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reports.map((report) => (
          <Card key={report.id} className="flex flex-col">
            <CardHeader>
              <div>
                <CardTitle>{report.title}</CardTitle>
                <CardDescription className="mt-1">{report.description}</CardDescription>
              </div>
            </CardHeader>
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-slate-400">{report.period}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-3.5 w-3.5" /> View
              </Button>
              <Button variant="secondary" size="sm">
                <Download className="h-3.5 w-3.5" /> PDF
              </Button>
              <Button variant="ghost" size="sm">
                <FileSpreadsheet className="h-3.5 w-3.5" /> Excel
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
