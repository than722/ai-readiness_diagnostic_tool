"use client";

import { createContext, useContext, useState } from "react";
import { ReportResult } from "@/src/features/report/types";

interface ReportContextValue {
  report: ReportResult | null;
  setReport: (report: ReportResult) => void;
}

const ReportContext = createContext<ReportContextValue | null>(null);

export function ReportProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [report, setReport] = useState<ReportResult | null>(null);

  return (
    <ReportContext.Provider value={{ report, setReport }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  const context = useContext(ReportContext);

  if (!context) {
    throw new Error("useReport must be used inside ReportProvider");
  }

  return context;
}