import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Toaster } from "react-hot-toast";

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
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className: "font-poppinsRegular !bg-primaryBg dark:!bg-darkPrimaryBg !text-black dark:!text-white"
        }}
        reverseOrder={true} />
    </>
  );
}
