import { ThemeProvider } from "@/components/theme-provider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
    </div>
  );
};

export default RootLayout;
