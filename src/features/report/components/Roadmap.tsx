import { Card } from "@/src/components/ui/card";

interface Props {
  roadmap?: {
    days30?: string[];
    days60?: string[];
    days90?: string[];
  };
}

export function Roadmap({
  roadmap,
}: Props) {
  return (
    <section className="space-y-6">

      <div className="grid gap-6 md:grid-cols-3">

        <Card className="p-6">
          <h3 className="mb-4 font-semibold">
            📅 Days 1–30
          </h3>

          <ul className="space-y-2">
            {(roadmap?.days30 ?? []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-semibold">
            📅 Days 31–60
          </h3>

          <ul className="space-y-2">
            {(roadmap?.days60 ?? []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 font-semibold">
            📅 Days 61–90
          </h3>

          <ul className="space-y-2">
            {(roadmap?.days90 ?? []).map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>

      </div>
    </section>
  );
}