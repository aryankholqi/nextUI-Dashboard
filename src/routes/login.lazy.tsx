import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/Index";

export const Route = createLazyFileRoute("/login")({
  component: () => (
    <Login />
  ),
});
