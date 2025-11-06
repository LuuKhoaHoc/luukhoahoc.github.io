import ProjectsWithHoverEffect from "@/components/ProjectsWithHoverEffect";
import { DATA } from "@/data/resume";

export default function WorkPage() {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Some of my recent featured projects.
              </p>
            </div>
          </div>
          <ProjectsWithHoverEffect projects={DATA.projects} />
        </div>
      </section>
    </main>
  );
}
