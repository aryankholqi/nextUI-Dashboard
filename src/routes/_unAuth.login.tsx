import { createFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/index";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/_unAuth/login")({
  component: () =>
    <>
      <Login />
      <Helmet>
        <title>login</title>
      </Helmet>
    </>,
});
