"use client";

import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

import { LeadForm } from "../../features/assessment/schemas/lead";

interface LeadCaptureProps {
  value: LeadForm;
  onChange: (value: LeadForm) => void;
}

export function LeadCapture({
  value,
  onChange,
}: LeadCaptureProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Almost Done!</CardTitle>

        <CardDescription>
          Tell us a little about your business so we can
          personalize your AI Readiness Report.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>

          <Input
            id="fullName"
            value={value.fullName}
            onChange={(e) =>
              onChange({
                ...value,
                fullName: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>

          <Input
            id="email"
            type="email"
            value={value.email}
            onChange={(e) =>
              onChange({
                ...value,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>

          <Input
            id="company"
            value={value.companyName}
            onChange={(e) =>
              onChange({
                ...value,
                companyName: e.target.value,
              })
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Industry</Label>

          <Input
            value={value.industry}
            onChange={(e) =>
              onChange({
                ...value,
                industry: e.target.value,
              })
            }
            placeholder="Marketing Agency"
          />
        </div>

        <div className="space-y-2">
          <Label>Team Size</Label>

          <Select
            value={value.teamSize}
            onValueChange={(teamSize) =>{
              if (!teamSize) return;
            
              onChange({
                ...value,
                teamSize,
              })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your team size" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="1-5">1–5</SelectItem>
              <SelectItem value="6-20">6–20</SelectItem>
              <SelectItem value="21-50">21–50</SelectItem>
              <SelectItem value="51-100">51–100</SelectItem>
              <SelectItem value="100+">100+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}