export type Priority = "critical" | "high" | "medium" | "low";
export type TaskStatus = "todo" | "in_progress" | "done" | "blocked";
export type AlertTone = "danger" | "warning" | "success" | "info";

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  tone?: AlertTone;
}

export interface ChartPoint {
  label: string;
  value: number;
  secondary?: number;
}

export interface AlertItem {
  id: string;
  title: string;
  detail: string;
  tone: AlertTone;
  time: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  savings: number;
  priority: Priority;
}

export interface MenuItemRow {
  id: string;
  name: string;
  category: string;
  sold: number;
  revenue: number;
  foodCost: number;
  contributionMargin: number;
  marginPercent: number;
  popularity: "High" | "Medium" | "Low";
  profitability: "Star" | "Plow Horse" | "Puzzle" | "Dog";
}

export interface Vendor {
  id: string;
  name: string;
  category: string;
  monthlySpend: number;
  priceChange: number;
  invoices: number;
  savingsOpportunity: number;
}

export interface ProfitLeak {
  id: string;
  title: string;
  amount: number;
  rootCause: string;
  evidence: string;
  recommendation: string;
  priority: Priority;
  expectedSavings: number;
}

export interface ActionTask {
  id: string;
  task: string;
  priority: Priority;
  owner: string;
  status: TaskStatus;
  dueDate: string;
  expectedSavings: number;
}

export interface ReportCard {
  id: string;
  title: string;
  description: string;
  period: string;
}

export interface Meeting {
  id: string;
  title: string;
  date: string;
  time: string;
  attendees: string[];
  notes?: string;
  actionItems?: string[];
  status: "upcoming" | "past";
}

export interface DocumentFolder {
  id: string;
  name: string;
  count: number;
  updatedAt: string;
}
