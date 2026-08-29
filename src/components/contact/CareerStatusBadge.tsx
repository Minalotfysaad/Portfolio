import React from "react";
import { personalInfo } from "@/data/personal";
import { Radio } from "lucide-react";

export const CareerStatusBadge: React.FC = () => {
  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#121217] to-[#0D0D11] border border-accent/30 shadow-xl relative overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="relative mt-1">
          <span className="flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
          </span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            CURRENT STATUS
          </span>
          <h4 className="font-mono text-base font-bold text-foreground">
            {personalInfo.availability}
          </h4>
          <p className="text-xs sm:text-sm text-secondary font-sans">
            Ready to integrate into dynamic engineering teams as a .NET Backend Developer. {personalInfo.relocation}.
          </p>
        </div>
      </div>
    </div>
  );
};
