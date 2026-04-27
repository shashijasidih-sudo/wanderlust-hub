import { Navigate, useParams } from "react-router-dom";

interface Props {
  city: string;
}

/**
 * Redirects legacy /<city>/* URLs to /thailand/<city>/* preserving the rest of the path.
 */
const LegacyCityRedirect = ({ city }: Props) => {
  const params = useParams();
  const splat = params["*"] || "";
  const target = splat ? `/thailand/${city}/${splat}` : `/thailand/${city}`;
  return <Navigate to={target} replace />;
};

export default LegacyCityRedirect;
