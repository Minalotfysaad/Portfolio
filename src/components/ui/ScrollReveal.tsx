"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  duration?: number; // Duration in ms
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number; // Initial distance offset in px
  threshold?: number; // Intersection threshold (0.0 to 1.0)
  once?: boolean; // Whether animation triggers only once
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 24,
  threshold = 0,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    // Check if IntersectionObserver is available
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    // Immediate check if element is already in or near the viewport
    const rect = ref.current.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 100) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  // Initial transform offset based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "none":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0) scale(1)" : getInitialTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
