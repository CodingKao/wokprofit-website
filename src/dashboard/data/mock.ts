import type {
  ActionTask,
  AlertItem,
  ChartPoint,
  DocumentFolder,
  KpiMetric,
  Meeting,
  MenuItemRow,
  Opportunity,
  ProfitLeak,
  ReportCard,
  Vendor,
} from "../types";

export const RESTAURANT = {
  name: "Thai Garden Kitchen",
  location: "Bellevue, WA",
  owner: "Kao Saelor",
};

export const dashboardKpis: KpiMetric[] = [
  { id: "revenue", label: "Revenue", value: "$48,240", delta: 8.2, deltaLabel: "vs last month", tone: "success" },
  { id: "food", label: "Food Cost %", value: "31.2%", delta: 1.4, deltaLabel: "vs target 30%", tone: "warning" },
  { id: "labor", label: "Labor %", value: "28.6%", delta: -0.8, deltaLabel: "vs last month", tone: "success" },
  { id: "prime", label: "Prime Cost %", value: "59.8%", delta: 0.6, deltaLabel: "vs target 60%", tone: "info" },
  { id: "net", label: "Net Profit %", value: "12.4%", delta: 1.9, deltaLabel: "vs last month", tone: "success" },
  { id: "cash", label: "Cash Flow", value: "$9,840", delta: 12.0, deltaLabel: "vs last month", tone: "success" },
];

export const profitScore = {
  score: 84,
  max: 100,
  grade: "A-",
  delta: 6,
};

export const revenueTrend: ChartPoint[] = [
  { label: "Jan", value: 41200 },
  { label: "Feb", value: 43800 },
  { label: "Mar", value: 42100 },
  { label: "Apr", value: 45600 },
  { label: "May", value: 47200 },
  { label: "Jun", value: 48240 },
];

export const profitTrend: ChartPoint[] = [
  { label: "Jan", value: 4200 },
  { label: "Feb", value: 5100 },
  { label: "Mar", value: 4600 },
  { label: "Apr", value: 5400 },
  { label: "May", value: 5800 },
  { label: "Jun", value: 5980 },
];

export const primeCostTrend: ChartPoint[] = [
  { label: "Jan", value: 62.1 },
  { label: "Feb", value: 61.4 },
  { label: "Mar", value: 60.8 },
  { label: "Apr", value: 60.2 },
  { label: "May", value: 59.9 },
  { label: "Jun", value: 59.8 },
];

export const foodCostTrend: ChartPoint[] = [
  { label: "Jan", value: 30.1 },
  { label: "Feb", value: 29.8 },
  { label: "Mar", value: 30.4 },
  { label: "Apr", value: 30.8 },
  { label: "May", value: 29.8 },
  { label: "Jun", value: 31.2 },
];

export const alerts: AlertItem[] = [
  { id: "1", title: "Food Cost increased 2.4%", detail: "Moved from 29.8% to 31.2% week over week.", tone: "warning", time: "2h ago" },
  { id: "2", title: "Labor exceeded target Tuesday", detail: "Lunch shift ran $280 over target.", tone: "danger", time: "Yesterday" },
  { id: "3", title: "Shrimp costs increased 11%", detail: "US Foods invoice shows price spike on jumbo shrimp.", tone: "danger", time: "2d ago" },
  { id: "4", title: "Net Profit improved 9%", detail: "Menu pricing changes are working.", tone: "success", time: "3d ago" },
];

export const opportunities: Opportunity[] = [
  { id: "1", title: "Reduce overtime", description: "Tighten Tuesday–Thursday close schedules.", savings: 820, priority: "high" },
  { id: "2", title: "Increase Pho price $1", description: "Beef Pho has strong demand and room for margin.", savings: 1140, priority: "critical" },
  { id: "3", title: "Switch chicken vendor", description: "Restaurant Depot quote is 8% lower.", savings: 640, priority: "medium" },
  { id: "4", title: "Reduce waste", description: "Track prep waste on herbs and produce daily.", savings: 390, priority: "medium" },
];

export const aiCoach = {
  greeting: "Good morning.",
  bullets: [
    "Revenue is up 8% this week.",
    "Food cost increased from 29.8% to 31.2%.",
    "Tuesday lunch labor exceeded target by $280.",
    "Increasing Beef Pho by $1 could increase monthly profit by approximately $1,200.",
  ],
  priority: "Review seafood purchasing.",
};

export const menuItems: MenuItemRow[] = [
  { id: "1", name: "Pad Thai", category: "Noodles", sold: 642, revenue: 9630, foodCost: 2780, contributionMargin: 6850, marginPercent: 71.1, popularity: "High", profitability: "Star" },
  { id: "2", name: "Drunken Noodles", category: "Noodles", sold: 518, revenue: 8288, foodCost: 2650, contributionMargin: 5638, marginPercent: 68.0, popularity: "High", profitability: "Star" },
  { id: "3", name: "Beef Pho", category: "Soup", sold: 486, revenue: 8262, foodCost: 2890, contributionMargin: 5372, marginPercent: 65.0, popularity: "High", profitability: "Plow Horse" },
  { id: "4", name: "Orange Chicken", category: "Entrees", sold: 390, revenue: 6630, foodCost: 2310, contributionMargin: 4320, marginPercent: 65.2, popularity: "Medium", profitability: "Plow Horse" },
  { id: "5", name: "Mongolian Beef", category: "Entrees", sold: 210, revenue: 4200, foodCost: 1680, contributionMargin: 2520, marginPercent: 60.0, popularity: "Medium", profitability: "Puzzle" },
  { id: "6", name: "Fried Rice", category: "Rice", sold: 720, revenue: 7920, foodCost: 1980, contributionMargin: 5940, marginPercent: 75.0, popularity: "High", profitability: "Star" },
  { id: "7", name: "Boba Tea", category: "Drinks", sold: 880, revenue: 5280, foodCost: 1056, contributionMargin: 4224, marginPercent: 80.0, popularity: "High", profitability: "Star" },
  { id: "8", name: "Spring Rolls", category: "Appetizers", sold: 310, revenue: 2790, foodCost: 930, contributionMargin: 1860, marginPercent: 66.7, popularity: "Low", profitability: "Dog" },
];

export const vendors: Vendor[] = [
  { id: "us-foods", name: "US Foods", category: "Broadline", monthlySpend: 12400, priceChange: 4.2, invoices: 18, savingsOpportunity: 740 },
  { id: "sysco", name: "Sysco", category: "Broadline", monthlySpend: 8600, priceChange: 1.1, invoices: 12, savingsOpportunity: 320 },
  { id: "restaurant-depot", name: "Restaurant Depot", category: "Cash & Carry", monthlySpend: 5200, priceChange: -2.4, invoices: 9, savingsOpportunity: 640 },
];

export const profitLeaks: ProfitLeak[] = [
  { id: "1", title: "Food Waste", amount: -420, rootCause: "Over-prepping herbs and produce on weekdays.", evidence: "Waste log shows 18 lbs produce discarded last week.", recommendation: "Cut prep by 15% Tue–Thu and track daily.", priority: "high", expectedSavings: 420 },
  { id: "2", title: "Labor Scheduling", amount: -860, rootCause: "Overstaffed lunch shifts midweek.", evidence: "Sales per labor hour dropped 12% Tue–Wed.", recommendation: "Remove one FOI from 11am–2pm Tue–Thu.", priority: "critical", expectedSavings: 860 },
  { id: "3", title: "Menu Pricing", amount: -1250, rootCause: "High-volume items underpriced vs contribution.", evidence: "Beef Pho margin below category average.", recommendation: "Raise Beef Pho by $1 and test for 30 days.", priority: "critical", expectedSavings: 1250 },
  { id: "4", title: "Vendor Pricing", amount: -740, rootCause: "Seafood and chicken price drift.", evidence: "Shrimp +11%, chicken +6% MoM.", recommendation: "Renegotiate or switch two SKUs.", priority: "high", expectedSavings: 740 },
  { id: "5", title: "Delivery Fees", amount: -980, rootCause: "Third-party commission erosion.", evidence: "DoorDash/UberEats fees averaged 28% of delivery sales.", recommendation: "Push QR ordering and loyalty discounts.", priority: "high", expectedSavings: 980 },
  { id: "6", title: "Inventory Shrinkage", amount: -330, rootCause: "Untracked beverage and protein variance.", evidence: "Physical count variance on shrimp and soft drinks.", recommendation: "Weekly spot counts on top 10 SKUs.", priority: "medium", expectedSavings: 330 },
];

export const actionTasks: ActionTask[] = [
  { id: "1", task: "Raise Beef Pho price $1", priority: "critical", owner: "Kao", status: "in_progress", dueDate: "Jul 20", expectedSavings: 1140 },
  { id: "2", task: "Cut Tuesday lunch overtime", priority: "high", owner: "Manager", status: "todo", dueDate: "Jul 18", expectedSavings: 820 },
  { id: "3", task: "Renegotiate shrimp pricing", priority: "high", owner: "Kao", status: "todo", dueDate: "Jul 25", expectedSavings: 480 },
  { id: "4", task: "Implement waste logging", priority: "medium", owner: "Kitchen Lead", status: "done", dueDate: "Jul 10", expectedSavings: 390 },
  { id: "5", task: "Switch chicken vendor trial", priority: "medium", owner: "Manager", status: "in_progress", dueDate: "Jul 28", expectedSavings: 640 },
  { id: "6", task: "Promote QR ordering for delivery", priority: "high", owner: "Marketing", status: "todo", dueDate: "Aug 1", expectedSavings: 980 },
];

export const reports: ReportCard[] = [
  { id: "1", title: "Monthly Report", description: "Full P&L, KPIs, and profit opportunities.", period: "June 2026" },
  { id: "2", title: "Quarterly Report", description: "Trend analysis and strategic recommendations.", period: "Q2 2026" },
  { id: "3", title: "Profit Audit", description: "Leak map with prioritized fixes.", period: "Latest" },
  { id: "4", title: "Budget", description: "Budget vs actual with variance notes.", period: "2026" },
  { id: "5", title: "Forecast", description: "90-day revenue and profit forecast.", period: "Jul–Sep" },
  { id: "6", title: "Prime Cost Report", description: "Food + labor performance deep dive.", period: "June 2026" },
  { id: "7", title: "Food Cost Report", description: "Category and vendor cost breakdown.", period: "June 2026" },
  { id: "8", title: "Labor Report", description: "Scheduling efficiency and SPLH.", period: "June 2026" },
];

export const meetings: Meeting[] = [
  { id: "1", title: "Weekly Profit Review", date: "Jul 18, 2026", time: "10:00 AM", attendees: ["Kao", "Manager", "Advisor"], status: "upcoming", actionItems: ["Confirm Pho price change", "Review shrimp quotes"] },
  { id: "2", title: "Vendor Negotiation Prep", date: "Jul 22, 2026", time: "2:00 PM", attendees: ["Kao", "Advisor"], status: "upcoming" },
  { id: "3", title: "June Close Review", date: "Jul 5, 2026", time: "11:00 AM", attendees: ["Kao", "Advisor"], status: "past", notes: "Prime cost improved to 59.8%. Focus next on seafood and overtime.", actionItems: ["Ship action plan to manager"] },
];

export const documentFolders: DocumentFolder[] = [
  { id: "1", name: "Invoices", count: 124, updatedAt: "Jul 16" },
  { id: "2", name: "Payroll", count: 26, updatedAt: "Jul 14" },
  { id: "3", name: "Tax Returns", count: 8, updatedAt: "Apr 12" },
  { id: "4", name: "Financial Statements", count: 36, updatedAt: "Jul 8" },
  { id: "5", name: "Vendor Contracts", count: 14, updatedAt: "Jun 30" },
];

export const laborByDay: ChartPoint[] = [
  { label: "Mon", value: 2100, secondary: 6200 },
  { label: "Tue", value: 2480, secondary: 5800 },
  { label: "Wed", value: 2320, secondary: 6100 },
  { label: "Thu", value: 2400, secondary: 6400 },
  { label: "Fri", value: 2800, secondary: 8200 },
  { label: "Sat", value: 3100, secondary: 9100 },
  { label: "Sun", value: 2600, secondary: 7600 },
];

export const inventoryTrend: ChartPoint[] = [
  { label: "W1", value: 8200 },
  { label: "W2", value: 7900 },
  { label: "W3", value: 8450 },
  { label: "W4", value: 8100 },
];

export const expenseBreakdown = [
  { name: "Food", value: 15050 },
  { name: "Labor", value: 13800 },
  { name: "Rent", value: 4500 },
  { name: "Utilities", value: 1800 },
  { name: "Marketing", value: 900 },
  { name: "Other", value: 2210 },
];
