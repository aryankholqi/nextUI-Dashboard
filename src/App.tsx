import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const { i18n } = useTranslation();

  return (
    <div dir={`${i18n.language === "fa" ? "rtl" : null}`}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className:
            "ltr:font-poppinsRegular !bg-primaryBg dark:!bg-darkPrimaryBg !text-black dark:!text-white",
        }}
        reverseOrder={true}
      />
    </div>
  );
}
