import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { lazyImport } from "../../../shared/utils/lazy";
import { ErrorElement } from "../../../shared/components/ui/error/error-element";
import { FallbackLoading } from "../../../shared/components/ui/loading/fallback-loading";
import MainLayout from "../../../shared/components/layout/main-layout";
import ProtectedRoute from "../../shared/pages/protected-route/protected-route";

const AuthenticationView = lazyImport(
  () => import("./auth"),
  "AuthenticationView",
);
const LandingPageHome = lazyImport(
  () => import("./landing-page/home"),
  "HomeView",
);
const HomeProtected = lazyImport(
  () => import("./protected/home"),
  "HomeViewProtected",
);
const DashboardProtected = lazyImport(
  () => import("./protected/dashbaord/index"),
  "DashboardView",
);
const ProfileProtected = lazyImport(
  () => import("./protected/profile"),
  "ProfileView",
);
const NotFound = lazyImport(
  () => import("../../shared/pages/not-found"),
  "default",
);

const PaymentSuccess = lazyImport(
  () => import("./payment/success"),
  "PaymentSuccessView",
);

const ProductsProtected = lazyImport(
  () => import("./protected/products/products.view"),
  "ProductsView",
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<FallbackLoading />}>
    <Component />
  </Suspense>
);

const protect = (Component: React.ComponentType) => () => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

// Rotas
export const routes: RouteObject[] = [
  {
    path: "/login",
    element: withSuspense(AuthenticationView),
    errorElement: <ErrorElement />,
  },
  {
    path: "/",
    element: withSuspense(LandingPageHome),
    errorElement: <ErrorElement />,
  },
  {
    path: "/payment/success",
    element: withSuspense(PaymentSuccess),
    errorElement: <ErrorElement />,
  },
  {
    path: "*",
    element: withSuspense(NotFound),
    errorElement: <ErrorElement />,
  },
  {
    path: "/app",
    element: withSuspense(protect(MainLayout)),
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: withSuspense(HomeProtected),
      },
      {
        path: "dashboard",
        element: withSuspense(DashboardProtected),
      },
      {
        path: "products",
        element: withSuspense(ProductsProtected),
      },
      {
        path: "profile",
        element: withSuspense(ProfileProtected),
      },
      {
        path: "payment/success",
        element: withSuspense(PaymentSuccess),
      },
    ],
  },
];

export default routes;
