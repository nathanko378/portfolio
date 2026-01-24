import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-haze">About</p>
          <a
            href="/resume.pdf"
            className="text-xs uppercase tracking-[0.3em] text-accent hover:text-mist"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
        <h1 className="font-display text-4xl text-mist">Intro</h1>
        <p className="text-base leading-relaxed text-haze">
          Hi, I’m Nathan. I’ve always been drawn to{" "}
          <span className="font-semibold text-mist">crunching numbers</span>,
          whether that meant problem-solving, spotting patterns, or finding better ways to 
          approach a challenge. That curiosity first turned into action in
          Grade 12, when I
          co-founded a tutoring business
          with a partner as a way <span className="font-semibold text-mist">to share my love for{" "}
          math</span> with younger
          students. Over nine months, we grew it to{" "}
          17 students, and I
          found myself enjoying not just the teaching, but the process of{" "}
          <span className="font-semibold text-mist">building something from the ground up</span>.
        </p>
        <p className="text-base leading-relaxed text-haze">
          Around the same time, that interest in building began to shift toward{" "}
          <span className="font-semibold text-mist">programming</span>. I started
          exploring how software could be used to create
          useful tools online,
          which eventually led to a summer internship at{" "}
          <span className="font-semibold text-mist">CYC Motor</span>, an
          engineering startup. There, I helped build and train a{" "}
          retrieval-augmented customer service chatbot
          for their company, giving me my first real exposure to {" "}
          <span className="font-semibold text-mist">applying technical skills in a real-world setting</span>.
          I’m now a <span className="font-semibold text-mist">1B Honours Mathematics</span>{" "}
          student, strengthening my{" "}
          computer science fundamentals
          and continuing to build projects that sit at the intersection of{" "}
          <span className="font-semibold text-accent">finance, data, and software</span>.
        </p>
        <Link href="/" className="text-xs uppercase tracking-[0.3em] text-mist">
          Back Home
        </Link>
      </header>

      <section className="space-y-4 border-t border-mist/10 pt-8">
        <h2 className="font-display text-2xl text-mist">
          Technical Experiences and Projects
        </h2>
        <div className="space-y-10 text-sm text-haze">
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Engineering Intern
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-haze">
                  CYC Motor Ltd · Hong Kong
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-haze">
                Jul 2025 – Aug 2025
              </span>
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Built and deployed an AI-powered customer support chatbot using a
                retrieval-augmented generation (RAG) pipeline over internal product
                manuals, FAQs, and support documentation.
              </li>
              <li>
                Designed prompt and persona engineering logic to control response
                tone, reduce hallucinations, and ensure grounded answers from LLMs.
              </li>
              <li>
                Integrated the chatbot into the company website, serving 2,000+
                monthly user interactions and deflecting a significant portion of
                human support tickets.
              </li>
              <li>
                Built a B2B sales analytics dashboard in Excel to analyze revenue
                by region, reseller, and time period for management reporting.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Varsity Squash Training Scheduler
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-haze">
                  Next.js · React · Supabase · OpenAI API
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-haze">
                Oct 2025 – Present
              </span>
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Collaborated in a team to build a full-stack scheduling platform,
                matching varsity squash players into training sessions based on
                availability and skill ratings.
              </li>
              <li>
                Designed and implemented the PostgreSQL data model and AI-driven
                scheduling pipeline using Supabase and the OpenAI API to generate
                and manage optimized training sessions.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Tech Layoffs vs Stock Impact Analysis
                </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Python · Pandas · Streamlit · Altair
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-haze">
              Aug 2025 – Nov 2025
            </span>
          </div>
          <a
            href="https://tech-layoffs-stock-impact.streamlit.app/"
            className="inline-flex text-xs uppercase tracking-[0.25em] text-accent hover:text-mist"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Developed a Streamlit dashboard, analyzing and visualizing the
              correlation between tech layoffs and stock impact.
            </li>
              <li>
                Cleaned and merged 4,000+ global layoff records with Yahoo Finance
                market data using Pandas, performing correlation analysis and
                linear regression.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 border-t border-mist/10 pt-8">
        <h2 className="font-display text-2xl text-mist">Skills</h2>
        <div className="space-y-3 text-sm text-haze">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-haze">
              Languages
            </span>
            <p className="mt-2 text-mist">
              Python, C/C++, SQL, JavaScript/TypeScript, HTML, CSS, Racket
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-haze">
              Frameworks &amp; Tools
            </span>
            <p className="mt-2 text-mist">
              Pandas, NumPy, Flask, React, Node.js, Git, VS Code, Pycharm, Excel
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-haze">
              Spoken Languages
            </span>
            <p className="mt-2 text-mist">English, Cantonese, Mandarin</p>
          </div>
        </div>
      </section>
    </div>
  );
}
