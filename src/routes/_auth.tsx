import { createRootRoute, Outlet } from "@tanstack/react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import { unAuthorizedBeforeLoad } from "../configs/beforeLoad";

export const Route = createRootRoute({
  ...unAuthorizedBeforeLoad,
  component: () => {
    return (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    );
  },
});
