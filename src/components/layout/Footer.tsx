import { Container } from "@/src/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <h3 className="font-bold">
              AI Readiness Diagnostic
            </h3>

            <p className="text-sm text-muted-foreground">
              AI-powered business readiness assessment.
            </p>

          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 AI Readiness Diagnostic Tool
          </p>

        </div>

      </Container>
    </footer>
  );
}