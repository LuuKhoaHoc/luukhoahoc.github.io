import Link from "next/link";

import Markdown from "react-markdown";

import { ProjectCard } from "@/components/ProjectCard";
import ProjectsWithHoverEffect from "@/components/ProjectsWithHoverEffect";
import { ResumeCard } from "@/components/ResumeCard";
import SkillsWithGlowEffect from "@/components/SkillsWithGlowEffect";
import { ThemeAwareAvatarImage } from "@/components/ThemeAwareAvatar";
import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import WorkExperienceList from "@/components/WorkExperienceList";
import { DATA } from "@/data/resume";

export default function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="hero">
        <div className="w-full space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m {DATA.englishName} 👋
              </h1>
              <p className="max-w-[600px] md:text-xl">{DATA.description}</p>
            </div>
            <Avatar className="size-28 border">
              <ThemeAwareAvatarImage
                alt={DATA.name}
                lightSrc={DATA.avatarLightUrl}
                darkSrc={DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>
      <section id="about">
        <h2 className="text-xl font-bold">About</h2>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          <WorkExperienceList />
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          {DATA.education.map((education, id) => (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <SkillsWithGlowEffect skills={DATA.skills} />
        </div>
      </section>
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
            </div>
          </div>
          <ProjectsWithHoverEffect projects={DATA.projects} />
        </div>
      </section>
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                with a direct question on LinkedIn
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
