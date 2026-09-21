import { useState, type FC, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, CheckCircle2 } from "lucide-react";

interface CommissionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommissionModal: FC<CommissionModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Manufacturing",
    projectType: "Custom Corporate Website",
    budget: "$2,500 - $5,000",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Frontend demo submission state (ready to connect to a production endpoint)
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "Manufacturing",
      projectType: "Custom Corporate Website",
      budget: "$2,500 - $5,000",
      message: "",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto border-white/[0.09] bg-[#090b0f]/95 backdrop-blur-2xl text-foreground p-6 sm:p-8">
        <DialogHeader className="space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-surface-elevated border border-white/[0.08] text-[10px] font-mono text-primary w-fit">
            <Sparkles className="w-3 h-3" />
            <span>PROJECT INQUIRY</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] font-display">
            Start a Project with SS
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Tell us about your business, website objectives, timeline, and design aspirations.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in-0 duration-300">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display">Demo Submission Complete</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
              This enquiry interface is currently running as a frontend demo.
              A production form endpoint can be connected for real submissions.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} variant="outline" size="sm" className="font-mono text-xs">
                Close Window
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  YOUR NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  WORK EMAIL *
                </label>
                <input
                  required
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  COMPANY / BUSINESS NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corp / Studio"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  INDUSTRY
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                >
                  <option value="Manufacturing">Manufacturing &amp; Industrial</option>
                  <option value="Interior & Architecture">Interior &amp; Architecture</option>
                  <option value="Café & Hospitality">Café &amp; Coffee Roasters</option>
                  <option value="Restaurant & Dining">Restaurant &amp; Fine Dining</option>
                  <option value="Construction">Construction &amp; Engineering</option>
                  <option value="Real Estate">Real Estate &amp; Property</option>
                  <option value="Gym & Fitness">Gym &amp; Fitness</option>
                  <option value="Technology & SaaS">Technology &amp; SaaS</option>
                  <option value="Other Industry">Other Business Type</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  PROJECT SCOPE
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                >
                  <option value="Custom Corporate Website">Custom Corporate Website</option>
                  <option value="Website Redesign">Complete Website Redesign</option>
                  <option value="Landing Page">High-Impact Landing Page</option>
                  <option value="Interactive 3D / Experience">Interactive 3D / Experience</option>
                  <option value="Design System & Frontend">Design System &amp; Frontend</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground block">
                  TARGET BUDGET
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full h-11 px-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all"
                >
                  <option value="$1,000 - $2,500">$1,000 &ndash; $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 &ndash; $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 &ndash; $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                  <option value="Flexible / To Discuss">Flexible / To Discuss</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-muted-foreground block">
                PROJECT BRIEF / OBJECTIVES
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your business goals, target timeline, key deliverables, or inspiration..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full p-3.5 rounded-lg bg-[#06080c] border border-white/[0.08] text-sm text-foreground placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary transition-all resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">
              <div className="text-[11px] font-mono text-muted-foreground">
                Availability: <span className="text-emerald-400">Accepting Select Projects</span>
              </div>
              <Button
                type="submit"
                variant="default"
                size="default"
                className="w-full sm:w-auto font-mono text-xs tracking-wider gap-2 px-6"
              >
                <span>SEND PROJECT INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
