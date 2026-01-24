"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BIRTHDATE_ISO = "2008-03-07T08:00:00+08:00";
const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000;

export default function HomePage() {
  const [liveAge, setLiveAge] = useState("0.000000000");
  const [tsLines, setTsLines] = useState<number | null>(null);

  useEffect(() => {
    const birth = new Date(BIRTHDATE_ISO).getTime();
    let frameId = 0;

    const update = () => {
      const now = Date.now();
      const age = (now - birth) / YEAR_MS;
      setLiveAge(age.toFixed(9));
      frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    let active = true;

    const loadLines = async () => {
      try {
        const response = await fetch("/api/lines");
        if (!response.ok) return;
        const data = (await response.json()) as { lines: number };
        if (active) setTsLines(data.lines);
      } catch {
        // Ignore fetch failures.
      }
    };

    loadLines();
    const interval = setInterval(loadLines, 5000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="space-y-6">
          <h1 className="font-display text-5xl tracking-[0.02em] text-mist sm:text-6xl">
            Nathan Ko
          </h1>
          <div className="h-px w-12 bg-mist/40" />
          <p className="text-lg text-haze">
            Mathematics student &amp; varsity athlete at the {""}
            <span className="font-semibold text-accent">University of Waterloo</span>,
            interested in the intersection of finance, data, and software.
          </p>
          <p className="text-sm uppercase tracking-[0.3em] text-haze">
            Seeking: Summer 2026 roles
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-mist px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-navy transition hover:bg-accent hover:text-navyDeep"
            >
              About Me
            </Link>
            <a
              href="/resume.pdf"
              className="rounded-full border border-mist/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-mist transition hover:border-mist"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
          <div className="flex items-center gap-4 text-haze">
            <a
              href="mailto:n22ko@uwaterloo.ca"
              className="transition hover:text-mist"
              aria-label="Email"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
            <a
              href="https://github.com/nathanko378"
              className="transition hover:text-mist"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.05 1.53 1.05.9 1.53 2.35 1.09 2.92.84.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.38.21 2.4.11 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-ko-439569279/"
              className="transition hover:text-mist"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.78V21H9z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-start md:justify-end">
          <div className="relative h-36 w-40 overflow-hidden rounded-2xl sm:h-44 sm:w-48 md:h-52 md:w-56">
            <Image
              src="/headshot.PNG"
              alt="Nathan Ko headshot"
              fill
              className="object-cover object-top"
              sizes="(min-width: 768px) 224px, 192px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="space-y-5 border-t border-mist/10 pt-8">
        <h2 className="text-xs uppercase tracking-[0.3em] text-haze">Stats</h2>
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Current Age
              </p>
              <p className="font-display text-2xl text-mist">{liveAge}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Countries Visited
              </p>
              <p className="font-display text-2xl text-mist">16</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Current City
              </p>
              <p className="font-display text-2xl text-mist">Waterloo, ON</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Lines of TypeScript Powering This Website
              </p>
              <p className="font-display text-2xl text-accent">
                {tsLines ?? "—"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
