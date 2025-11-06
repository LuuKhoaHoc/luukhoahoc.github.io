"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "motion/react";

import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

interface ProjectsWithHoverEffectProps {
  projects: readonly Project[];
  className?: string;
}

export default function ProjectsWithHoverEffect({
  projects,
  className,
}: ProjectsWithHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2", className)}
    >
      {projects.map((project, idx) => (
        <div
          key={project.title}
          className="group relative block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-xl bg-neutral-600/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* ProjectCard with relative z-index */}
          <div className="relative z-20 h-full p-1.5">
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
