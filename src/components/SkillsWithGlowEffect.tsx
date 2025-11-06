"use client";

import { Badge } from "@/components/ui/Badge";
import { GlowingEffect } from "@/components/ui/GlowingEffect";

interface SkillsWithGlowEffectProps {
  skills: readonly string[];
}

export default function SkillsWithGlowEffect({
  skills,
}: SkillsWithGlowEffectProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <div key={skill} className="group">
          <div className="relative rounded-lg border border-transparent p-[2px]">
            <GlowingEffect
              blur={0}
              borderWidth={2}
              spread={80}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.01}
              movementDuration={0.3}
              variant="default"
            />

            <Badge
              variant="secondary"
              className="relative z-10 transition-all duration-300 hover:scale-105"
            >
              {skill}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}
