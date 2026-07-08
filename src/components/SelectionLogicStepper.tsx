type SelectionStep = {
  title: string;
  description: string;
};

type SelectionLogicStepperProps = {
  steps: SelectionStep[];
};

export function SelectionLogicStepper({ steps }: SelectionLogicStepperProps) {
  return (
    <div className="selection-stepper" aria-label="Material recommendation review steps">
      {steps.map((item, index) => (
        <article key={item.title} className="selection-stepper-card">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
