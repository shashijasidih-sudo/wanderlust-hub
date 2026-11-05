import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import fallbackMeta from "@/data/seoFallbackMeta.json";

const META = fallbackMeta as Record<string, { title: string; description: string }>;

/**
 * Head tags for indexable pages that don't render their own <Seo>. Uses the
 * same data as the prerendered HTML so the hydrated head matches it.
 */
const RouteSeoFallback = () => {
  const { pathname } = useLocation();
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const meta = META[path];
  if (!meta) return null;
  return <Seo title={meta.title} description={meta.description} path={path} />;
};

export default RouteSeoFallback;
