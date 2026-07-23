"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Card } from "@/src/components/ui/card";

interface Props {
  scores: Record<string, number>;
}

export function BarChartCard({
  scores,
}: Props) {
  const data = Object.entries(scores).map(([pillar, score]) => ({
    pillar,
    score,
  }));

  return (
    <Card className="rounded-3xl border p-8 shadow-sm">

      <div className="mb-8">

        <h3 className="text-xl font-semibold">
          Pillar Comparison
        </h3>

        <p className="text-sm text-muted-foreground">
          Compare your AI maturity across all assessment pillars.
        </p>

      </div>

      <div className="h-[420px]">

        <ResponsiveContainer>

          <BarChart data={data}>

            <XAxis
              dataKey="pillar"
              tick={{
                fill: "#64748b",
              }}
            />

            <YAxis
              domain={[0, 100]}
              tick={{
                fill: "#64748b",
              }}
            />

            <Tooltip />

            <Bar
              dataKey="score"
              radius={[10, 10, 0, 0]}
              fill="#3b82f6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
}