import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  useEffect(() => {
    // Smooth for user-initiated navigation (PUSH/POP), instant for REPLACE (redirects)
    const behavior: ScrollBehavior =
      navigationType === "REPLACE" ? "auto" : "smooth";
    window.scrollTo({ top: 0, left: 0, behavior });
  }, [pathname, search, navigationType]);

  return null;
};

export default ScrollToTop;
