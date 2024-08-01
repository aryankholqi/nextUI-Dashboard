import { createLazyFileRoute } from "@tanstack/react-router";
import Login from "../pages/login/index";
import { Helmet } from "react-helmet";
import { t } from "i18next";

export const Route = createLazyFileRoute("/_unAuth/login")({
  component: () => (
    <>
      <Login />
      <Helmet>
        <title>{t("login")}</title>
      </Helmet>
    </>
  ),
});
