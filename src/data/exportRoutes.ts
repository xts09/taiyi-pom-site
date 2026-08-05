export type ExportRoute = {
  id: "central-asia" | "europe" | "east-asia" | "americas";
  region: string;
  coverage: string;
};

export const exportRoutes = [
  {
    id: "central-asia",
    region: "Central Asia",
    coverage: "Uzbekistan and Kazakhstan",
  },
  {
    id: "europe",
    region: "Europe",
    coverage: "Poland and Turkey",
  },
  {
    id: "east-asia",
    region: "East Asia",
    coverage: "South Korea and Japan",
  },
  {
    id: "americas",
    region: "Americas",
    coverage: "Mexico, Brazil, and Argentina",
  },
] as const satisfies ReadonlyArray<ExportRoute>;
