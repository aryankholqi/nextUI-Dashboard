import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/index";
import { authorizedBeforeLoad } from "../configs/beforeLoad";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/login")({
  ...authorizedBeforeLoad,
  component: () =>
    <>
      <Login />
      <Helmet>
        <title>login</title>
      </Helmet>
    </>,
});
