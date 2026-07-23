"use client";

import { Card } from "@/src/components/ui/card";
import { RadioGroupItem } from "@/src/components/ui/radio-group";
import { cn } from "@/src/utils/cn";
import { ReactNode } from "react";


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
    <label htmlFor={id} className="block cursor-pointer">
      <Card
        className={cn(
          "flex items-start gap-4 rounded-xl p-5 transition-all",
          checked
            ? "border-primary ring-2 ring-primary"
            : "hover:border-primary/50"
        )}
      >
        <RadioGroupItem id={id} value={value} className="mt-1" />
        <p className="text-sm leading-6">{label}</p>
      </Card>
    </label>
  );
}