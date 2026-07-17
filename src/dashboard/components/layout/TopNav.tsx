import React, { useState } from "react";
import { Bell, ChevronDown, LogOut, Menu, Moon, Search, Sun } from "lucide-react";
import { useHistory } from "react-router-dom";
import { RESTAURANT } from "../../data/mock";
import { useTheme } from "../../hooks/useTheme";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { clearDemoSession } from "../../../auth/demoAuth";

export function TopNav({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const history = useHistory();
  const [profileOpen, setProfileOpen] = useState(false);

  const signOut = () => {
    clearDemoSession();
    setProfileOpen(false);
    history.replace("/signin");
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 lg:px-6">
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenuClick} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{RESTAURANT.name}</p>
        <p className="truncate text-xs text-slate-400">{RESTAURANT.location}</p>
      </div>

      <div className="mx-auto hidden w-full max-w-md md:block">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input className="pl-9" placeholder="Search reports, menu items, vendors..." />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand" />
        </Button>
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-1 rounded-xl p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setProfileOpen((open) => !open)}
            aria-label="Open profile menu"
            aria-expanded={profileOpen}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
              TG
            </span>
            <ChevronDown className="hidden h-3.5 w-3.5 text-slate-400 sm:block" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-12 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-card dark:border-slate-800 dark:bg-slate-900">
              <div className="border-b border-slate-100 px-3 py-2 dark:border-slate-800">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Demo Owner
                </p>
                <p className="text-xs text-slate-500">demo@wokprofit.com</p>
              </div>
              <button
                type="button"
                onClick={signOut}
                className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
