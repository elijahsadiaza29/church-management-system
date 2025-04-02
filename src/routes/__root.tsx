import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/layout/root-layout";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RootLayout />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
