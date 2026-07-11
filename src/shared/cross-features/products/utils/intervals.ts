export const INTERVAL_SINGULAR: Record<string, string> = {
  month: "mês",
  year: "ano",
  week: "semana",
  day: "dia",
};

export const INTERVAL_PLURAL: Record<string, string> = {
  month: "meses",
  year: "anos",
  week: "semanas",
  day: "dias",
};

export const getIntervalSingular = (interval: string) => INTERVAL_SINGULAR[interval] ?? interval;
export const getIntervalPlural = (interval: string) => INTERVAL_PLURAL[interval] ?? `${getIntervalSingular(interval)}s`;
