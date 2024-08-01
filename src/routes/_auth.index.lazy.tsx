import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../pages/home";
import { Helmet } from "react-helmet";
import { t } from "i18next";

export const Route = createLazyFileRoute("/_auth/")({
  component: () => (
    <>
      <Home />
      <Helmet>
        <title>{t("dashboard")}</title>
      </Helmet>
    </>
  ),
});
