import type { ReactNode } from "react";
import "../styles/products.css";

export default function ProductsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
