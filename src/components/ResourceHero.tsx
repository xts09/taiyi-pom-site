type ResourceHeroProps = {
  context: string;
  title: string;
  description: string;
  className?: string;
};

export function ResourceHero({
  context,
  title,
  description,
  className = "",
}: ResourceHeroProps) {
  return (
    <header className={`resource-hero stagger-list ${className}`.trim()}>
      <p className="resource-hero-context">{context}</p>
      <h1>{title}</h1>
      <p className="resource-hero-description">{description}</p>
    </header>
  );
}
