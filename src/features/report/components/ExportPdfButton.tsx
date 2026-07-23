"use client";

import { Download } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export function ExportPdfButton() {
  function handleExport() {
    window.print();
  }

  return (
    <Button
      onClick={handleExport}
      className="rounded-xl"
    >
      <Download className="mr-2 h-4 w-4" />
      Export PDF
    </Button>
  );
}