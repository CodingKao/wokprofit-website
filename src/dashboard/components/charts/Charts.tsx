import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { ChartPoint } from "../../types";

const tooltipStyle = {
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
};

export function TrendAreaChart({
  data,
  color = "#c8102e",
  valuePrefix = "$",
}: {
  data: ChartPoint[];
  color?: string;
  valuePrefix?: string;
}) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`grad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} width={48} />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value: number) => [`${valuePrefix}${Number(value).toLocaleString()}`, "Value"]}
          />
          <Area type="monotone" dataKey="value" stroke={color} fill={`url(#grad-${color.replace("#", "")})`} strokeWidth={2.5} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TrendLineChart({
  data,
  color = "#0ea5e9",
  suffix = "%",
}: {
  data: ChartPoint[];
  color?: string;
  suffix?: string;
}) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} width={40} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value}${suffix}`, "Value"]} />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DualBarChart({ data }: { data: ChartPoint[] }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} width={48} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="secondary" name="Sales" fill="#94a3b8" radius={[6, 6, 0, 0]} />
          <Bar dataKey="value" name="Labor $" fill="#c8102e" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ExpensePieChart({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  const colors = ["#c8102e", "#e63946", "#ffb703", "#0ea5e9", "#10b981", "#64748b"];
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={80} paddingAngle={3}>
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`$${Number(value).toLocaleString()}`, "Amount"]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
