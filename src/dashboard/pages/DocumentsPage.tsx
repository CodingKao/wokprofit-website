import React from "react";
import { FolderOpen, Search, Upload } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { documentFolders } from "../data/mock";

export function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">Documents</h1>
          <p className="mt-1 text-sm text-slate-500">Invoices, payroll, statements, and contracts — organized.</p>
        </div>
        <Button>
          <Upload className="h-4 w-4" /> Upload
        </Button>
      </div>

      <div className="relative max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input className="pl-9" placeholder="Search documents..." />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {documentFolders.map((folder) => (
          <Card key={folder.id} className="hover:-translate-y-0.5 cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <FolderOpen className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>{folder.name}</CardTitle>
                  <CardDescription>
                    {folder.count} files · Updated {folder.updatedAt}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="border-dashed">
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <Upload className="h-8 w-8 text-slate-300" />
          <p className="mt-3 font-semibold">Drag & drop files here</p>
          <p className="mt-1 text-sm text-slate-500">PDF, Excel, images up to 25MB</p>
          <Button variant="outline" className="mt-4">
            Browse files
          </Button>
        </div>
      </Card>
    </div>
  );
}
