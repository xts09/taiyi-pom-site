import { permanentRedirect } from "next/navigation";

export default function ModifiedPomCompoundsPage() {
  permanentRedirect("/products/categories/pom#material-families");
}
