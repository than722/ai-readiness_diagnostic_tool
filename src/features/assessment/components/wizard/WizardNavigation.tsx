import { Button } from "@/src/components/ui/button";

interface WizardNavigationProps {
  current: number;
  total: number;
  next: () => void;
  previous: () => void;
  disableNext: boolean;
  nextLabel?: string;
}

export function WizardNavigation({
  current,
  total,
  next,
  previous,
  disableNext,
  nextLabel,
}: WizardNavigationProps) {
  return (
    <div className="flex justify-between pt-8">
      <Button
        variant="outline"
        onClick={previous}
        disabled={current === 1}
      >
        Previous
      </Button>

      <Button
        onClick={next}
        disabled={disableNext}
      >
        {nextLabel ??
            (current === total ? "Finish" : "Next")}
      </Button>
    </div>
  );
}