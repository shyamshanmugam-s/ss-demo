import { type FC } from "react";
import { type Project } from "@/types";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";

interface CaseStudyRfqProps {
  project: Project;
}

export const CaseStudyRfq: FC<CaseStudyRfqProps> = ({ project }) => {
  const enquiry = project.caseStudy?.enquiryExperience;
  if (!enquiry) return null;

  return (
    <section
      id="enquiry"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-void text-foreground border-b border-white/[0.06]"
      aria-label="Commercial RFQ and Enquiry Experience"
    >
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan tracking-widest uppercase">
            <FileText className="w-4 h-4 text-accent-cyan" />
            <span>08 &middot; {enquiry.eyebrow || "COMMERCIAL CONVERSION & ENQUIRY WORKFLOW"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display">
            {enquiry.title || "REQUEST FOR QUOTE WORKFLOW"}
          </h2>
          {enquiry.subtitle && (
            <p className="font-mono text-xs sm:text-sm text-accent-cyan">
              {enquiry.subtitle}
            </p>
          )}
          <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed">
            {enquiry.description}
          </p>
        </div>

        {/* Workflow Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Feature List */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-[#080b10] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-accent-cyan font-bold uppercase tracking-wider">
                  {enquiry.badge ? "SYSTEM CAPABILITIES" : "ENQUIRY CAPABILITIES"}
                </span>
                {enquiry.badge && (
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-950/40 border border-amber-500/30 text-amber-300">
                    {enquiry.badge}
                  </span>
                )}
              </div>

              <div className="space-y-3 pt-2">
                {enquiry.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-mono text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            {enquiry.disclaimer && (
              <div className="p-4 rounded-xl bg-[#0b0c10] border border-white/[0.08] flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                  {enquiry.disclaimer}
                </p>
              </div>
            )}
          </div>

          {/* Workflow Architecture Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#080a0f] border border-white/[0.08] space-y-4 font-mono text-xs">
            <div className="text-[10px] text-accent-cyan uppercase font-bold tracking-widest">
              ENQUIRY DATA FLOW
            </div>
            <div className="space-y-3 text-muted-foreground">
              {enquiry.workflowSteps && enquiry.workflowSteps.length > 0 ? (
                enquiry.workflowSteps.map((ws, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05]">
                    <span className="text-foreground font-semibold block">{ws.step}. {ws.title}:</span>
                    {ws.description}
                  </div>
                ))
              ) : (
                <>
                  <div className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05]">
                    <span className="text-foreground font-semibold block">1. Parameter Capture:</span>
                    Domain specifications &amp; project parameters.
                  </div>
                  <div className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05]">
                    <span className="text-foreground font-semibold block">2. Inquirer Profiling:</span>
                    Contact, timeline &amp; specific requirements.
                  </div>
                  <div className="p-3 rounded-lg bg-surface-elevated/40 border border-white/[0.05]">
                    <span className="text-foreground font-semibold block">3. Structured Dispatch:</span>
                    Validated submission payload routed to studio channels.
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
