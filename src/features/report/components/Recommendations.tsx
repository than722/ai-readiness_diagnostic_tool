import { Card } from "@/src/components/ui/card";

interface Props {
  recommendations: string[];
}

export function Recommendations({
  recommendations,
}: Props) {
  if (!recommendations.length) {
    return null;
  }

  return (
    <section className="space-y-6">

      <div className="space-y-4">
        {recommendations.map(
          (recommendation, index) => (
            <Card
              key={index}
              className="p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {index + 1}
                </div>

                <p className="leading-7">
                  {recommendation}
                </p>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
}