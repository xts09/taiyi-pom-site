import Link from "next/link";
import { UnitText, ValueText } from "@/components/UnitText";

type PropertyRow = {
  label: string;
  value: string;
  unit: string;
  method: string;
};

type EngineeringPropertyTableProps = {
  heading: string;
  introduction?: string;
  kicker: string;
  labels: readonly [string, string, string, string];
  note: string;
  properties: readonly PropertyRow[];
  requestHref: string;
  requestLabel: string;
};

export function EngineeringPropertyTable({
  heading,
  introduction,
  kicker,
  labels,
  note,
  properties,
  requestHref,
  requestLabel,
}: EngineeringPropertyTableProps) {
  return (
    <section
      id="typical-properties"
      className="property-table-section product-detail-table-section"
    >
      <div className="property-table-head">
        <p className="section-kicker mb-2">{kicker}</p>
        <h2 className="text-xl font-black text-slate-950">{heading}</h2>
        {introduction ? <p>{introduction}</p> : null}
      </div>

      <div className="overflow-x-auto">
        <table className="product-detail-core-property-table w-full text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              {labels.map((label) => (
                <th key={label} className="px-5 py-3 font-black">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80">
            {properties.map((property) => (
              <tr key={property.label} className="hover:bg-cyan-50/60">
                <td className="px-5 py-3 font-bold text-slate-950" data-label={labels[0]}>
                  {property.label}
                </td>
                <td className="px-5 py-3 font-black text-blue-700" data-label={labels[1]}>
                  <ValueText value={property.value} />
                </td>
                <td className="px-5 py-3 text-slate-700" data-label={labels[2]}>
                  <UnitText unit={property.unit} />
                </td>
                <td className="px-5 py-3 text-slate-600" data-label={labels[3]}>
                  {property.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="product-detail-core-data-note">
        <p>{note}</p>
        <Link href={requestHref}>{requestLabel}</Link>
      </div>
    </section>
  );
}
