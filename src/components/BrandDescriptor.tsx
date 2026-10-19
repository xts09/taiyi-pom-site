export function BrandDescriptor({ inline = false }: { inline?: boolean }) {
  if (inline) return <span className="brand-descriptor brand-descriptor--inline"><span>HIGH-PERFORMANCE</span><span>ENGINEERING PLASTICS</span></span>;
  return <span className="brand-descriptor">ENGINEERED POLYMERS</span>;
}
