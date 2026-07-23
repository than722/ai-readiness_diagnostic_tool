import { cn } from "@/src/utils/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({
  children,
  className,
  id,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}