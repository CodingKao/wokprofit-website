import React from "react";
import {
  LayoutDashboard,
  LineChart,
  UtensilsCrossed,
  Users,
  Package,
  Truck,
  AlertTriangle,
  ListChecks,
  FileText,
  Calendar,
  FolderOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

const nav = [
  { to: "/app", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/app/financials", label: "Financials", icon: LineChart },
  { to: "/app/menu", label: "Menu Performance", icon: UtensilsCrossed },
  { to: "/app/labor", label: "Labor", icon: Users },
  { to: "/app/inventory", label: "Inventory", icon: Package },
  { to: "/app/vendors", label: "Vendors", icon: Truck },
  { to: "/app/profit-leaks", label: "Profit Leaks", icon: AlertTriangle },
  { to: "/app/action-plan", label: "Action Plan", icon: ListChecks },
  { to: "/app/reports", label: "Reports", icon: FileText },
  { to: "/app/meetings", label: "Meetings", icon: Calendar },
  { to: "/app/documents", label: "Documents", icon: FolderOpen },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function Sidebar({
  collapsed,
  onToggle,
  mobileOpen,
  onCloseMobile,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 lg:hidden" onClick={onCloseMobile} />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200 bg-white transition-all duration-300 dark:border-slate-800 dark:bg-slate-950",
          collapsed ? "w-[72px]" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div
          className={cn(
            "flex h-16 items-center border-b border-slate-200 px-4 dark:border-slate-800",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          {!collapsed && (
            <div>
              <p className="text-sm font-bold tracking-tight text-brand">Wok Profit</p>
              <p className="text-[11px] text-slate-400">Profit OS</p>
            </div>
          )}
          <button
            type="button"
            onClick={onToggle}
            className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:inline-flex dark:hover:bg-slate-800"
            aria-label="Toggle sidebar"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                exact={item.exact}
                onClick={onCloseMobile}
                title={item.label}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-100",
                  collapsed && "justify-center px-0"
                )}
                activeClassName="!bg-brand/10 !text-brand"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
