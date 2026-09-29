"use client";

import React, { useEffect, useId, useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "motion/react";

import { DATA } from "@/data/resume";
import { useOutsideClick } from "@/hooks/useOutsideClick";

// Type definition for work experience
type WorkExperience = (typeof DATA.work)[number];

export default function WorkExperienceList() {
  const [active, setActive] = useState<WorkExperience | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Backdrop overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>

      {/* Expanded card modal */}
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[100] grid place-items-center p-4">
            <motion.div
              layoutId={`card-${active.company}-${id}`}
              ref={ref}
              role="dialog"
              aria-modal="true"
              aria-label={`${active.company} work details`}
              className="relative w-full max-w-[500px] overflow-y-auto rounded-2xl bg-white [max-height:calc(100dvh-32px)] dark:bg-neutral-900 sm:rounded-3xl"
            >
              <button
                type="button"
                aria-label="Close work details"
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </button>
              {/* Company logo */}
              <div
                className={`flex h-24 w-full items-center justify-center rounded-xl border border-primary/20 text-xl font-semibold tracking-tight text-primary sm:h-32 ${active.company === "Hilo Group" ? "bg-white" : "bg-primary/10"}`}
              >
                <Image
                  width={active.company === "Hilo Group" ? 280 : 200}
                  height={active.company === "Hilo Group" ? 80 : 200}
                  src={active.logoUrl}
                  alt={`${active.company} logo`}
                  className={`h-full w-full object-contain ${active.company === "Hilo Group" ? "px-12 py-5 sm:px-16 sm:py-6" : "p-4"}`}
                />
              </div>

              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.company}-${id}`}
                      className="text-xl font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.company}
                    </motion.h3>
                    <motion.p
                      layoutId={`subtitle-${active.company}-${id}`}
                      className="text-sm font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      {active.title}
                    </motion.p>
                    <motion.p
                      layoutId={`period-${active.company}-${id}`}
                      className="mt-1 text-xs text-neutral-500 dark:text-neutral-500"
                    >
                      {active.start} - {active.end}
                    </motion.p>
                    <motion.p className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                      📍 {active.location}
                    </motion.p>
                  </div>

                  {active.href && (
                    <motion.a
                      layoutId={`button-${active.company}-${id}`}
                      href={active.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600"
                    >
                      Visit
                    </motion.a>
                  )}
                </div>

                {/* Description content */}
                <div className="relative px-4 pb-6 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <div>
                      <h4 className="mb-2 font-semibold text-neutral-700 dark:text-neutral-200">
                        Key Responsibilities & Achievements:
                      </h4>
                      <div className="space-y-2 leading-relaxed">
                        {active.description
                          .split("\n")
                          .filter(Boolean)
                          .map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                      </div>
                    </div>

                    {active.badges && active.badges.length > 0 && (
                      <div className="mt-4">
                        <h4 className="mb-2 font-semibold text-neutral-700 dark:text-neutral-200">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {active.badges.map((badge, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* List of work experiences */}
      <div className="flex min-h-0 flex-col gap-y-3">
        {DATA.work.map((work) => (
          <motion.div
            layoutId={`card-${work.company}-${id}`}
            key={`card-${work.company}-${id}`}
            onClick={() => setActive(work)}
            className="flex cursor-pointer flex-col items-start gap-4 rounded-xl border border-transparent p-4 hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-800/50 md:flex-row"
          >
            {/* Company logo */}
            <div
              className={`flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md text-sm font-semibold text-primary ${work.company === "Hilo Group" ? "bg-white" : "bg-primary/10"}`}
            >
              <Image
                width={work.company === "Hilo Group" ? 280 : 48}
                height={work.company === "Hilo Group" ? 80 : 48}
                src={work.logoUrl}
                alt={`${work.company} logo`}
                className={`h-full w-full object-contain ${work.company === "Hilo Group" ? "p-1" : ""}`}
              />
            </div>

            {/* Work info */}
            <div className="w-full min-w-0 flex-1">
              <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0 flex-1">
                  <motion.h3
                    layoutId={`title-${work.company}-${id}`}
                    className="font-semibold leading-none"
                  >
                    {work.company}
                  </motion.h3>
                  <motion.p
                    layoutId={`subtitle-${work.company}-${id}`}
                    className="text-sm text-muted-foreground"
                  >
                    {work.title}
                  </motion.p>
                </div>
                <motion.div
                  layoutId={`period-${work.company}-${id}`}
                  className="shrink-0 text-left text-xs tabular-nums text-muted-foreground sm:text-right"
                >
                  <div>
                    {work.start} - {work.end}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

// Close icon component
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
