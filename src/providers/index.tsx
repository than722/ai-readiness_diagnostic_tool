"use client";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

export function Providers({
  children,
}: React.PropsWithChildren) {
  return (
    <ThemeProvider>
      {children}
      <Toaster richColors />
    </ThemeProvider>
  );
}