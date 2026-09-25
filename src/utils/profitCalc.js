// Prime cost = food + labor. Industry rule of thumb: keep it at or under 65% of sales.
export const TARGET_PRIME_RATIO = 0.65;
export const HEALTHY_PRIME_RATIO = 0.55;
export const DANGER_PRIME_RATIO = 0.75;

function toAmount(value) {
  if (value === "" || value == null) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

export function calculateProfitLeak(inputs) {
  const revenue = toAmount(inputs.monthlyRevenue);
  const food = toAmount(inputs.foodCost);
  const labor = toAmount(inputs.laborCost);
  const rent = toAmount(inputs.rent) ?? 0;
  const other = toAmount(inputs.otherExpenses) ?? 0;

  if (revenue == null || Number.isNaN(revenue) || revenue <= 0) {
    return { error: "Enter your monthly revenue." };
  }

  if (food == null || labor == null || Number.isNaN(food) || Number.isNaN(labor)) {
    return { error: "Enter food cost and labor cost in dollars." };
  }

  if ([food, labor, rent, other].some((n) => n < 0 || Number.isNaN(n))) {
    return { error: "Costs can’t be negative." };
  }

  const prime = food + labor;
  const totalCosts = prime + rent + other;
  const targetPrime = revenue * TARGET_PRIME_RATIO;
  const leak = Math.max(0, prime - targetPrime);
  const primeRatio = prime / revenue;
  const foodPct = food / revenue;
  const laborPct = labor / revenue;
  const profit = revenue - totalCosts;
  const hasOverhead = toAmount(inputs.rent) != null || toAmount(inputs.otherExpenses) != null;

  const score = Math.min(
    100,
    Math.max(
      0,
      ((primeRatio - HEALTHY_PRIME_RATIO) /
        (DANGER_PRIME_RATIO - HEALTHY_PRIME_RATIO)) *
        100
    )
  );
  const level = Math.min(5, Math.max(1, Math.ceil(score / 20) || 1));

  let status = "healthy";
  if (level >= 5) status = "danger";
  else if (level >= 3) status = "warning";

  return {
    leak,
    adjustedLeak: leak,
    low: leak * 0.9,
    high: leak * 1.1,
    prime,
    primeRatio,
    foodPct,
    laborPct,
    totalCosts,
    profit,
    hasOverhead,
    score,
    level,
    status,
  };
}
