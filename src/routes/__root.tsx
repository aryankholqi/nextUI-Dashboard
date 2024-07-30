import { createRootRoute, Outlet } from "@tanstack/react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";

const authRoutes: string[] = ["/login"];

export const Route = createRootRoute({
    component: () => {
        const { pathname } = window.location;
        const Layout = authRoutes.includes(pathname) ? AuthLayout : DashboardLayout;
        return (
            <Layout>
                <Outlet />
            </Layout>
        );
    },
});