import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/index";
import { authorizedBeforeLoad } from "../configs/beforeLoad";

export const Route = createFileRoute("/login")({
  ...authorizedBeforeLoad,
  component: () => <Login />,
});
