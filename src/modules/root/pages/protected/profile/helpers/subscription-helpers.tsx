export type Subscription = {
  id: string;
  status: "active" | "trialing" | "canceled" | "past_due" | string;
  plan_name?: string;
  price_id?: string;
  amount?: number;
  currency?: string;
  interval?: "month" | "year" | "week" | "day" | string;
  quantity?: number | null;
  created?: number | string;
  current_period_start?: number | string;
  current_period_end?: number | string;
  cancel_at_period_end?: boolean;
};

export function getPlanName(sub: Subscription): string {
  return sub.plan_name || sub.price_id || "Plano";
}

export function getPriceId(sub: Subscription): string {
  return sub.price_id || getPlanName(sub);
}

const intervalMap: Record<string, string> = {
  day: "por dia",
  week: "por semana",
  month: "por mês",
  year: "por ano",
};

export function getIntervalText(sub: Subscription): string {
  if (!sub.interval) return "";
  return intervalMap[sub.interval] ?? sub.interval;
}

export function formatDateLocal(value?: number | string): string {
  if (value === undefined || value === null || value === "") return "-";
  const date =
    typeof value === "number" ? new Date(value * 1000) : new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatCurrency(sub: Subscription): string | null {
  if (sub.amount === undefined || sub.amount === null) return null;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: sub.currency?.toUpperCase() || "BRL",
  }).format(sub.amount);
}

type ChipColor = "success" | "info" | "warning" | "default";

type StatusEntry = {
  label: string;
  chipColor: ChipColor;
};

export const statusConfig: Record<string, StatusEntry> = {
  active: { label: "Ativa", chipColor: "success" },
  trialing: { label: "Período de teste", chipColor: "info" },
  past_due: { label: "Pagamento pendente", chipColor: "warning" },
  canceled: { label: "Cancelada", chipColor: "default" },
};

export function getStatusConfig(status: string): StatusEntry {
  return (
    statusConfig[status] ?? {
      label: status,
      chipColor: "default",
    }
  );
}
