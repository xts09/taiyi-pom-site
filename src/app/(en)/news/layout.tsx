import type { ReactNode } from "react";
import "../styles/resources.css";

export default function NewsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
