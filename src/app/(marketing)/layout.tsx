import { Footer } from "@/src/components/layout/Footer";
import { Navbar } from "@/src/components/layout/Navbar";

export default function MarketingLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <Navbar variant="landing" />

      {children}

      <Footer />
    </>
  );
}