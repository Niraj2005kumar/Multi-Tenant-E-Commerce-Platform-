interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <h2 className="section-heading">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export default SectionHeading;
