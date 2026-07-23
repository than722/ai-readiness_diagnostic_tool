import { AssessmentWizard } from "@/src/features/assessment/components/wizard/AssessmentWizard";
import { Navbar } from "@/src/components/layout/Navbar";

export default function AssessmentPage() {
  return (
    <>
      <Navbar variant="assessment" />

      <main className="py-20">
        <AssessmentWizard />
      </main>
    </>
  );
}