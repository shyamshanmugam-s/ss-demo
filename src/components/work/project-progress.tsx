import { type FC } from "react";

interface ProjectProgressProps {
  currentIndex: number;
  total: number;
}

export const ProjectProgress: FC<ProjectProgressProps> = ({
  currentIndex,
  total,
}) => {
  return (
    <div
      className="flex items-center gap-3 font-mono text-xs text-muted-foreground select-none"
      aria-live="polite"
      aria-label={`Viewing project ${currentIndex + 1} of ${total}`}
    >
      <span className="text-foreground font-bold text-sm tracking-wider">
        {String(currentIndex + 1).padStart(2, "0")}
      </span>
      <span className="text-white/20">&mdash;</span>
      <span className="text-muted-foreground/60 tracking-wider">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
};
