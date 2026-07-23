"use client";

import {
  RadarChart,
  Radar,
 PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import { Card } from "@/src/components/ui/card";

interface Props {
  scores: Record<string, number>;
}

export function RadarChartCard({ scores }: Props) {
  const data = Object.entries(scores).map(([name, value]) => ({
    subject: name,
    value,
  }));

  return (
    <Card className="rounded-3xl border p-8 shadow-sm">
      <div className="mb-8">
        <h3 className="text-xl font-semibold">
          AI Readiness Profile
        </h3>

        <p className="text-sm text-muted-foreground">
          Visual overview of your strongest and weakest pillars.
        </p>
      </div>

      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="rgba(100,116,139,.25)" />

            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <Radar
              dataKey="value"
              stroke="#2563eb"
              fill="#3b82f6"
              fillOpacity={0.45}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}