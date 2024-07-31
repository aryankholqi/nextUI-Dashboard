import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/home";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/_auth/")({
  component: () =>
    <>
      <Helmet>
        <title>dashboard</title>
      </Helmet>
      <Home />
    </>
});
