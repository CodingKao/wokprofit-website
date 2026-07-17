import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider, useTheme } from "../../hooks/useTheme";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { cn } from "../../lib/utils";
import "../../dashboard.css";

import { OverviewPage } from "../../pages/OverviewPage";
import { FinancialsPage } from "../../pages/FinancialsPage";
import { MenuPage } from "../../pages/MenuPage";
import { LaborPage } from "../../pages/LaborPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { VendorsPage } from "../../pages/VendorsPage";
import { VendorDetailPage } from "../../pages/VendorDetailPage";
import { ProfitLeaksPage } from "../../pages/ProfitLeaksPage";
import { ActionPlanPage } from "../../pages/ActionPlanPage";
import { ReportsPage } from "../../pages/ReportsPage";
import { MeetingsPage } from "../../pages/MeetingsPage";
import { DocumentsPage } from "../../pages/DocumentsPage";
import { SettingsPage } from "../../pages/SettingsPage";

function DashboardShell() {
  const { theme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={cn("dashboard-root min-h-screen", theme === "dark" && "dark")}>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className={cn("min-h-screen transition-all duration-300", collapsed ? "lg:pl-[72px]" : "lg:pl-64")}>
        <TopNav onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto max-w-[1400px] space-y-6 p-4 lg:p-6">
          <Switch>
            <Route exact path="/app" component={OverviewPage} />
            <Route exact path="/app/financials" component={FinancialsPage} />
            <Route exact path="/app/menu" component={MenuPage} />
            <Route exact path="/app/labor" component={LaborPage} />
            <Route exact path="/app/inventory" component={InventoryPage} />
            <Route exact path="/app/vendors" component={VendorsPage} />
            <Route exact path="/app/vendors/:id" component={VendorDetailPage} />
            <Route exact path="/app/profit-leaks" component={ProfitLeaksPage} />
            <Route exact path="/app/action-plan" component={ActionPlanPage} />
            <Route exact path="/app/reports" component={ReportsPage} />
            <Route exact path="/app/meetings" component={MeetingsPage} />
            <Route exact path="/app/documents" component={DocumentsPage} />
            <Route exact path="/app/settings" component={SettingsPage} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default function DashboardApp() {
  return (
    <ThemeProvider>
      <DashboardShell />
    </ThemeProvider>
  );
}
