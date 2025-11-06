"use client";

import React from "react";

import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const commonProps = {
    onClick: handleClick,
    className:
      "group flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-transparent p-4 transition-all hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-800/50 md:flex-row",
  };

  const content = (
    <>
      {/* Company/School logo */}
      <div className="flex-none">
        <Avatar className="size-12 rounded-md border-0">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold leading-none">{title}</h3>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className="ml-auto text-right text-xs tabular-nums text-muted-foreground">
            <div>{period}</div>
          </div>
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {badges.map((badge, index) => (
              <Badge variant="secondary" className="text-xs" key={index}>
                {badge}
              </Badge>
            ))}
          </div>
        )}

        {/* Expandable description */}
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-xs text-muted-foreground">{description}</p>
          </motion.div>
        )}
      </div>

      {/* Chevron indicator */}
      {description && (
        <ChevronRightIcon
          className={cn(
            "size-4 flex-none text-muted-foreground transition-transform duration-300",
            isExpanded ? "rotate-90" : "rotate-0"
          )}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a {...commonProps} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div {...commonProps}>{content}</div>;
};
