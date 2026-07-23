import { Hero } from "@/src/components/landing/Hero";
import { Stats } from "@/src/components/landing/Stats";
import { Features } from "@/src/components/landing/Features";
import { HowItWorks } from "@/src/components/landing/HowItWorks";
import { FAQ } from "@/src/components/landing/FAQ";
import { CTA } from "@/src/components/landing/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}