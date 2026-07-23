import { Card } from "@/src/components/ui/card";

interface Props {
  wins: string[];
}

export function QuickWins({ wins }: Props) {
  if (!wins.length) return null;

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {wins.map((win, index) => (
          <Card
            key={index}
            className="p-6 transition hover:shadow-lg"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚡</span>

              <p className="leading-7">
                {win}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}