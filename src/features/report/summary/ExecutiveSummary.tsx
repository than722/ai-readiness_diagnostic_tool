import { Card } from "@/src/components/ui/card";

interface Props {
  summary: string;
}

export function ExecutiveSummary({
  summary,
}: Props) {
  return (
    <Card className="rounded-2xl border shadow-sm p-8">
        <p className="leading-8 text-muted-foreground">
            {summary}
        </p>
    </Card>
  );
}