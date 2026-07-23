interface Props {
  title: string;
  subtitle: string;
}

export function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <h2 className="text-4xl font-bold">

        {title}

      </h2>

      <p className="mt-4 text-muted-foreground">

        {subtitle}

      </p>

    </div>
  );
}