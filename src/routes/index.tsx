import { createFileRoute } from "@tanstack/react-router";
import { unAuthorizedBeforeLoad } from "../configs/beforeLoad";
import Home from "../pages/home";
import { Helmet } from "react-helmet";

export const Route = createFileRoute("/")({
  ...unAuthorizedBeforeLoad,
  component: () =>
    <>
      <Home />
      <Helmet>
      <title>Home</title>
      </Helmet>
    </>
});
