import type { ReactNode } from "react";
import "../styles/resources.css";

export default function ResourcesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
