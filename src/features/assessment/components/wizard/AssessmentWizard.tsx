"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { LeadCapture } from "@/src/components/lead/LeadCapture";

import { submitAssessment } from "../../actions/submitAssessment";
import { assessmentQuestions } from "../../data/questions";

import { LeadForm } from "../../schemas/lead";

import { ProgressIndicator } from "./ProgressIndicator";
import { WizardNavigation } from "./WizardNavigation";
import { QuestionCard } from "../question/QuestionCard";

import { AssessmentLegend } from "../question/AssessmentLegend";

export function AssessmentWizard() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showLeadForm, setShowLeadForm] =
   useState(false);

  const [isSubmitting, setIsSubmitting] =
   useState(false);

  const [answers, setAnswers] =
   useState<Record<string, string>>({});

  const [lead, setLead] =
    useState<LeadForm>({
        fullName: "",
        email: "",
        companyName: "",
        industry: "",
        teamSize: "",
    });

  const question = assessmentQuestions[currentQuestion];

  const handleAnswer = (optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: optionId,
    }));
  };

  const next = async () => {
  // Still answering questions
  if (currentQuestion < assessmentQuestions.length - 1) {
    setCurrentQuestion((prev) => prev + 1);
    return;
  }

  // Finished questions → show lead form
  if (!showLeadForm) {
    setShowLeadForm(true);
    return;
  }

  try {
    setIsSubmitting(true);

    const response = await submitAssessment({
      lead,
      answers,
    });

    toast.success("Assessment completed!");

    router.push(`/report/${response.reportId}`);
  } catch (error) {
    console.error(error);

    toast.error(
      "Unable to submit assessment."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const previous = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
  <div className="mx-auto max-w-4xl space-y-10">
    {!showLeadForm ? (
      <>
      
        <ProgressIndicator
          current={currentQuestion + 1}
          total={assessmentQuestions.length}
        />
        <AssessmentLegend />
        <QuestionCard
          question={question}
          value={answers[question.id]}
          onChange={handleAnswer}
        />

        <WizardNavigation
          current={currentQuestion + 1}
          total={assessmentQuestions.length}
          previous={previous}
          next={next}
          disableNext={!answers[question.id]}
        />
      </>
    ) : (
      <>
        <LeadCapture
          value={lead}
          onChange={setLead}
        />

        <WizardNavigation
            current={assessmentQuestions.length}
            total={assessmentQuestions.length}
            previous={() => setShowLeadForm(false)}
            next={next}
            nextLabel={
                isSubmitting
                ? "Submitting..."
                : "Generate Report"
            }
            disableNext={
                isSubmitting ||
                !lead.fullName ||
                !lead.email ||
                !lead.companyName ||
                !lead.industry ||
                !lead.teamSize
            }
        />
      </>
    )}
  </div>
);
}