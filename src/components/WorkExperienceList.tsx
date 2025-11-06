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
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.company}-${id}`}
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.company}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              {/* Company logo */}
              <motion.div layoutId={`image-${active.company}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.logoUrl}
                  alt={active.company}
                  className="h-72 w-full object-contain sm:rounded-tl-lg sm:rounded-tr-lg"
                />
              </motion.div>

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
                <div className="relative px-4 pt-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-sm text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] dark:text-neutral-400 md:h-fit"
                  >
                    <div>
                      <h4 className="mb-2 font-semibold text-neutral-700 dark:text-neutral-200">
                        Key Responsibilities & Achievements:
                      </h4>
                      <p className="leading-relaxed">{active.description}</p>
                    </div>

                    {active.badges && active.badges.length > 0 && (
                      <div className="mt-2">
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
            className="flex cursor-pointer flex-col items-center gap-4 rounded-xl border border-transparent p-4 hover:border-neutral-200 hover:bg-neutral-50 dark:hover:border-neutral-800 dark:hover:bg-neutral-800/50 md:flex-row"
          >
            {/* Company logo */}
            <motion.div layoutId={`image-${work.company}-${id}`}>
              <Image
                width={48}
                height={48}
                src={work.logoUrl}
                alt={work.company}
                className="h-12 w-12 rounded-md object-contain"
              />
            </motion.div>

            {/* Work info */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
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
                  className="ml-auto text-right text-xs tabular-nums text-muted-foreground"
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
