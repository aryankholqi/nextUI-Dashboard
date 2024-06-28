import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/index";

export const Route = createLazyFileRoute("/login")({
    component: () => (
        <Login />
    ),
});