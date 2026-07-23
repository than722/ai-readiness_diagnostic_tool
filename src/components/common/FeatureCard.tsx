import { Card } from "@/src/components/ui/card";

import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <Card className="p-8 transition hover:shadow-lg">

      <Icon className="mb-6 h-8 w-8 text-primary" />

      <h3 className="font-semibold">

        {title}

      </h3>

      <p className="mt-3 text-sm text-muted-foreground">

        {description}

      </p>

    </Card>
  );
}