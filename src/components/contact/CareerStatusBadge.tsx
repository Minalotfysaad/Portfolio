import React from "react";

export const CareerStatusBadge: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-3 p-3.5 sm:p-4 rounded-xl bg-surface/50 border border-border/80 text-center">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <span className="font-mono text-xs sm:text-sm text-foreground font-medium">
        Open to Junior .NET Backend Developer opportunities
      </span>
    </div>
  );
};
