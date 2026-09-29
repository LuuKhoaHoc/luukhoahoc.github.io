import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical CV | Luu Khoa Hoc",
  description:
    "Frontend and software engineering CV: React, Next.js, TypeScript, micro-frontends and product integrations.",
};

const pdfUrl = "/cv.pdf";

export default function TechnicalCVPage() {
  return (
    <main className="space-y-6 pb-8">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Engineering CV
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frontend / Software Engineer
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            React, Next.js and TypeScript across ERP, DeFi and e-commerce. Read
            the CV below or open the PDF directly.
          </p>
        </div>
        <a
          href={pdfUrl}
          download="LuuKhoaHoc_Technical_CV.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Download className="h-4 w-4" />
          Download technical CV
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <FileText className="h-4 w-4" />
          Open PDF
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link
          href="/cv/"
          className="text-muted-foreground hover:text-foreground hover:underline"
        >
          Looking for the project-delivery CV?
        </Link>
      </div>

      <div className="hidden h-[min(80vh,1000px)] overflow-hidden rounded-xl border border-border bg-muted shadow-sm md:block">
        <object
          data={pdfUrl}
          type="application/pdf"
          className="h-full w-full"
          title="Technical CV PDF preview"
        >
          <div className="flex h-full items-center justify-center p-8 text-center text-muted-foreground">
            PDF preview is unavailable in this browser. Use the Open PDF link
            above.
          </div>
        </object>
      </div>

      <div className="rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground md:hidden">
        PDF previews may not work on mobile. Use Open PDF or Download technical
        CV.
      </div>
    </main>
  );
}
