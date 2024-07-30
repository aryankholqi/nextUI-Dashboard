import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Toaster } from "react-hot-toast";
import i18next from "i18next";
import { useEffect, useState } from "react";
import getDirectionByLanguage from "./utils/getDirectionByLanguage";

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
  const [dir, setDir] = useState(getDirectionByLanguage(i18next.language))

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setDir(getDirectionByLanguage(lng));
    };

    i18next.on("languageChanged", handleLanguageChange);

    // Cleanup the event listener on unmount
    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);
  return (
    <div dir={dir}>
      <RouterProvider router={router} />
      <Toaster
        toastOptions={{
          className: "font-poppinsRegular !bg-primaryBg dark:!bg-darkPrimaryBg !text-black dark:!text-white"
        }}
        reverseOrder={true} />
    </div>
  );
}
