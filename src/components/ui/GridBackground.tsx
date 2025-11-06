import React from "react";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Grid size in pixels
   * @default 20
   */
  gridSize?: number;
  /**
   * Whether to show the radial gradient fade effect
   * @default true
   */
  showFade?: boolean;
}

/**
 * GridBackground component
 * Creates a subtle grid pattern background for dark theme
 */
export const GridBackground = ({
  children,
  className,
  gridSize = 20,
  showFade = true,
}: GridBackgroundProps) => {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      {/* Grid pattern layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)`,
        }}
      />

      {/* Optional radial gradient fade effect */}
      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
