"use client";

import { RadioGroup } from "@/src/components/ui/radio-group";
import { AssessmentQuestion } from "../../types";
import { OptionCard } from "./OptionCard";

interface QuestionCardProps {
  question: AssessmentQuestion;
  value?: string;
  onChange: (value: string) => void;
}

export function QuestionCard({
  question,
  value,
  onChange,
}: QuestionCardProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-primary">
          {question.section}
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {question.title}
        </h2>

        <p className="mt-4 text-muted-foreground">
          {question.description}
        </p>
      </div>

      <RadioGroup
        value={value ?? ""}
        onValueChange={onChange}
      >
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <OptionCard
              key={option.id}
              id={option.id}
              value={option.id}
              checked={value === option.id}
              label={
                <div className="flex items-start gap-4">
                  <span
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full text-sm font-bold text-white
                      ${
                        index === 0
                          ? "bg-slate-500"
                          : index === 1
                          ? "bg-blue-500"
                          : index === 2
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                      }
                    `}
                  >
                    {index}
                  </span>

                  <span className="leading-7">
                    {option.label}
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}