import type { ReactNode } from "react";
import "../styles/applications.css";

export default function ApplicationsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
