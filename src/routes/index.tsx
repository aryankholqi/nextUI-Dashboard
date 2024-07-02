import { createFileRoute } from "@tanstack/react-router";
import { unAuthorizedBeforeLoad } from "../configs/beforeLoad";

export const Route = createFileRoute("/")({
  ...unAuthorizedBeforeLoad,
  component: () => <div></div>,
});
