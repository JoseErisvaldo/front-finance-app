import { lazy } from "react";

export const lazyImport = <T extends Record<string, any>>(
  factory: () => Promise<T>,
  name: keyof T,
) =>
  lazy(() =>
    factory().then((module) => ({
      default: (module[name] as any) ?? module.default,
    })),
  );
