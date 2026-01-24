import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nathan Ko",
  description: "Minimal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body`}>
        <div className="mx-auto min-h-screen w-full max-w-3xl px-6 py-10 sm:px-8">
          <header className="mb-12 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-haze">
            <Link href="/" className="text-mist">
              Nathan Ko
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="transition hover:text-mist">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-mist">
                About
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-16 border-t border-mist/10 pt-6 text-xs uppercase tracking-[0.3em] text-haze">
            © 2026 Nathan Ko · Built with Next.js &amp; Tailwind
          </footer>
        </div>
      </body>
    </html>
  );
}
