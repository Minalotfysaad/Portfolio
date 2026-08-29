"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectScreenshot } from "@/types";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Image as ImageIcon, ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  screenshots: ProjectScreenshot[];
  initialIndex?: number;
}

export const ProjectGalleryModal: React.FC<ProjectGalleryModalProps> = ({
  isOpen,
  onClose,
  title,
  screenshots,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, screenshots.length]);

  if (!isOpen || screenshots.length === 0) return null;

  const currentScreenshot = screenshots[currentIndex];

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.5 : 1));
  };

  const isError = imageErrorMap[currentScreenshot.src];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Container Frame */}
      <div className="relative w-full max-w-5xl bg-[#0F0F12] border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Window Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-[#131317]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-[1px] bg-border mx-1" />
            <div>
              <span className="font-mono text-xs font-bold text-foreground">
                {title}
              </span>
              <span className="font-mono text-[10px] text-muted ml-2">
                [{currentIndex + 1} / {screenshots.length}]
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleZoom}
              className="p-1.5 rounded-lg text-secondary hover:text-foreground hover:bg-surface border border-border transition-colors text-xs flex items-center gap-1 font-mono"
              title={zoomLevel === 1 ? "Zoom in" : "Reset zoom"}
            >
              {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-secondary hover:text-white hover:bg-red-500/20 border border-transparent hover:border-red-500/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Media Preview Area */}
        <div className="relative flex-1 bg-[#09090B] flex items-center justify-center p-4 min-h-[340px] sm:min-h-[460px] overflow-hidden">
          {/* Navigation Prev Button */}
          {screenshots.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 z-20 p-2.5 rounded-full bg-[#151518]/90 hover:bg-accent text-foreground hover:text-white border border-border shadow-lg transition-all"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Navigation Next Button */}
          {screenshots.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 z-20 p-2.5 rounded-full bg-[#151518]/90 hover:bg-accent text-foreground hover:text-white border border-border shadow-lg transition-all"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Screenshot Display */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-200"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {!isError ? (
              <div className="relative w-full max-w-4xl aspect-[16/10] rounded-lg overflow-hidden border border-border/80 bg-surface">
                <Image
                  src={currentScreenshot.src}
                  alt={currentScreenshot.alt}
                  fill
                  className="object-contain"
                  onError={() =>
                    setImageErrorMap((prev) => ({
                      ...prev,
                      [currentScreenshot.src]: true,
                    }))
                  }
                />
              </div>
            ) : (
              /* High-Tech Technical Screenshot Placeholder */
              <div className="w-full max-w-3xl aspect-[16/10] rounded-xl border border-dashed border-accent/40 bg-gradient-to-br from-[#121216] to-[#0A0A0D] p-8 flex flex-col items-center justify-center text-center shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-surface border border-accent/30 flex items-center justify-center text-accent-light mb-4 shadow-glow-accent">
                  <Code className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/30 bg-accent/10 text-accent-light mb-2">
                  PROJECT SCREENSHOT PLACEHOLDER
                </div>
                <h4 className="font-mono text-base font-bold text-foreground mb-1">
                  {currentScreenshot.alt}
                </h4>
                <p className="text-xs font-mono text-muted max-w-md mb-4">
                  Asset path: {currentScreenshot.src}
                </p>
                <div className="text-[11px] font-mono text-secondary bg-surface/70 border border-border px-3 py-1.5 rounded-lg">
                  Place high-resolution screenshot at this path to render directly.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Caption & Thumbnail Strip */}
        <div className="p-4 sm:p-5 border-t border-border bg-[#111114] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            {currentScreenshot.category && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent-light bg-accent/10 px-2 py-0.5 rounded border border-accent/30 mr-2">
                {currentScreenshot.category}
              </span>
            )}
            <p className="text-xs sm:text-sm text-secondary font-sans mt-1">
              {currentScreenshot.caption}
            </p>
          </div>

          {/* Thumbnails */}
          {screenshots.length > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              {screenshots.map((s, idx) => (
                <button
                  key={s.src}
                  onClick={() => {
                    setZoomLevel(1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-12 h-8 rounded border overflow-hidden transition-all relative ${
                    currentIndex === idx
                      ? "border-accent ring-2 ring-accent/30 scale-105"
                      : "border-border/80 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full bg-[#18181C] flex items-center justify-center text-[9px] font-mono text-muted">
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
