import { ReactNode } from "react";
import { sectionWrapClass, gridClass, gridItemClass } from "./recoUtils";

interface Props {
  heading: string;
  subtitle: string;
  children: ReactNode[];
}

/** Shared section shell: heading + subtitle + 4-up responsive grid (mobile = horizontal scroll). */
const RecoSection = ({ heading, subtitle, children }: Props) => {
  if (!children || children.length === 0) return null;
  return (
    <section className={sectionWrapClass}>
      <header className="mb-5 max-w-3xl">
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">{heading}</h2>
        <p className="mt-1.5 text-sm text-muted-foreground md:text-base">{subtitle}</p>
      </header>
      <div className={gridClass}>
        {children.map((child, i) => (
          <div key={i} className={gridItemClass}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecoSection;
