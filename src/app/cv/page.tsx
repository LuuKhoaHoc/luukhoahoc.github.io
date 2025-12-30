import React from "react";

import Link from "next/link";

import { Download, ExternalLink, FileText } from "lucide-react";
import { Metadata } from "next";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "My CV | Portfolio",
  description: "View and download my Curriculum Vitae.",
};

export default function CVPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full flex-col bg-background p-4 md:p-8">
      <main className="flex h-full flex-1 flex-col overflow-hidden rounded-xl border bg-muted shadow-sm">
        {/* Desktop View: Native PDF Embed */}
        <div className="hidden h-full w-full md:block">
          <object
            data="/cv.pdf"
            type="application/pdf"
            className="h-full w-full"
            title="CV Preview"
            style={{ border: "none" }}
          >
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-muted-foreground">
              <p>Your browser does not support viewing PDF directly.</p>
              <Link href="/cv.pdf" download="LuuKhoaHoc_CV.pdf">
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
          </object>
        </div>

        {/* Mobile View: Optimized Card */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-background p-6 md:hidden">
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-primary/10 shadow-inner">
            <FileText className="h-16 w-16 text-primary" />
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Curriculum Vitae
            </h2>
            <p className="max-w-xs text-sm text-muted-foreground">
              View my full professional experience, skills, and education
              detail.
            </p>
          </div>

          <div className="flex w-full max-w-xs flex-col gap-3">
            <Link href="/cv.pdf" target="_blank" className="w-full">
              <Button className="w-full" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                View PDF
              </Button>
            </Link>

            <Link
              href="/cv.pdf"
              download="LuuKhoaHoc_CV.pdf"
              className="w-full"
            >
              <Button variant="outline" className="w-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
