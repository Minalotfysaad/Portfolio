"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentProgress / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-accent via-indigo-500 to-accent-light transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
