export function AssessmentLegend() {
  const levels = [
    {
      value: 0,
      title: "Manual",
      description: "Little or no documented process.",
      color: "bg-slate-500",
    },
    {
      value: 1,
      title: "Basic",
      description: "Basic process with limited consistency.",
      color: "bg-blue-500",
    },
    {
      value: 2,
      title: "Standardized",
      description: "Documented and consistently followed.",
      color: "bg-amber-500",
    },
    {
      value: 3,
      title: "AI-Driven",
      description: "Automated, data-driven and AI-supported.",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="mb-8 rounded-2xl border bg-muted/30 p-5">
      <p className="mb-4 text-sm font-semibold">
        Assessment Scale
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {levels.map((level) => (
          <div
            key={level.value}
            className="
              rounded-xl
              border
              bg-background
              p-4
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-bold text-white ${level.color}`}
              >
                {level.value}
              </div>

              <div>
                <p className="font-semibold">
                  {level.title}
                </p>

                <p className="text-xs text-muted-foreground">
                  Level {level.value}
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-muted-foreground">
              {level.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}