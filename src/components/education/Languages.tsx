import React from "react";
import { languagesData } from "@/data/personal";
import { Globe } from "lucide-react";

export const Languages: React.FC = () => {
  return (
    <div className="mt-16 pt-12 border-t border-border/70">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-light">
          <Globe className="w-4 h-4" />
        </div>
        <div>
          <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">
            COMMUNICATION
          </span>
          <h3 className="font-mono text-base font-bold text-foreground">
            LANGUAGES
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languagesData.map((lang) => (
          <div
            key={lang.language}
            className="p-5 rounded-xl bg-surface/50 border border-border hover:border-border-light transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono text-base font-bold text-foreground">
                  {lang.language}
                </h4>
                {lang.nativeName && (
                  <span className="font-mono text-xs text-muted">
                    {lang.nativeName}
                  </span>
                )}
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-accent/10 border border-accent/20 text-accent-light mb-3">
                {lang.proficiency}
              </span>
            </div>
            <p className="text-xs text-secondary font-sans leading-relaxed">
              {lang.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
