import { createRootRoute, Outlet } from "@tanstack/react-router";
import AuthLayout from "../layouts/AuthLayout";
import { authorizedBeforeLoad } from "../configs/beforeLoad";

export const Route = createRootRoute({
  ...authorizedBeforeLoad,
  component: () => {
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );
  },
});
