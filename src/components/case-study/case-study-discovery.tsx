import { type FC } from "react";
import { type Project } from "@/types";
import { Search, AlertCircle, ArrowRight } from "lucide-react";

interface CaseStudyDiscoveryProps {
  project: Project;
}

export const CaseStudyDiscovery: FC<CaseStudyDiscoveryProps> = ({ project }) => {
  const discovery = project.caseStudy?.productDiscovery;
  if (!discovery) return null;

  return (
    <section
      id="discovery"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Product Discovery and Selection Engine"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <Search className="w-4 h-4 text-accent-cyan" />
            <span>07 &middot; {discovery.sequenceTitle || "PRODUCT DISCOVERY & GUIDED MATCHING"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {discovery.title || "EXPLORE & DISCOVER"}
          </h2>
          {discovery.subtitle && (
            <p className="font-mono text-xs sm:text-sm text-accent-cyan">
              {discovery.subtitle}
            </p>
          )}
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {discovery.description}
          </p>
        </div>

        {/* Discovery Flow 4-Step Diagram */}
        {discovery.discoveryFlow && discovery.discoveryFlow.length > 0 && (
          <div className="space-y-4">
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              {discovery.sequenceTitle ? `${discovery.sequenceTitle.toUpperCase()} FLOW` : "DISCOVERY TO CONVERSION SEQUENCE"}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {discovery.discoveryFlow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#080b10] border border-white/[0.08] space-y-2.5 relative flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-accent-cyan">
                      {step.step}
                    </span>
                    {idx < discovery.discoveryFlow!.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground/40 hidden lg:block" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-sm text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Product Categories Catalog Showcase */}
        {discovery.productCategories && discovery.productCategories.length > 0 && (
          <div className="space-y-4 pt-4">
            <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              {discovery.categoriesTitle || "FEATURED CATEGORIES & SECTORS"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {discovery.productCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden border border-white/[0.08] bg-[#080a0f] p-3 space-y-3 hover:border-white/20 transition-all"
                >
                  {cat.image && (
                    <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#050608]">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-1 space-y-1">
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {cat.name}
                    </h4>
                    <p className="text-xs font-mono text-muted-foreground">
                      {cat.application}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Engineering Disclaimer */}
        {discovery.disclaimer && (
          <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs font-mono text-muted-foreground leading-relaxed">
              {discovery.disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
