"use client";

import { ReactNode } from "react";

import { Card } from "@/src/components/ui/card";
import { RadioGroupItem } from "@/src/components/ui/radio-group";
import { cn } from "@/src/utils/cn";

interface OptionCardProps {
  id: string;
  value: string;
  label: ReactNode;
  checked: boolean;
}

export function OptionCard({
  id,
  value,
  label,
  checked,
}: OptionCardProps) {
  return (
    <label
      htmlFor={id}
      className="block cursor-pointer"
    >
      <Card
        className={cn(
          "flex items-start gap-4 rounded-xl p-5 transition-all duration-200",
          checked
            ? "border-primary ring-2 ring-primary bg-primary/5"
            : "hover:border-primary/50 hover:bg-muted/40"
        )}
      >
        <RadioGroupItem
          id={id}
          value={value}
          className="mt-1"
        />

        <div className="flex-1 text-sm leading-6">
          {label}
        </div>
      </Card>
    </label>
  );
}