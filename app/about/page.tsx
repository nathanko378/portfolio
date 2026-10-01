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
          useful tools and automate tedious tasks,
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
                  Technology Analyst
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-haze">
                  Government of Ontario · Toronto, ON
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-haze">
                May 2026 - Aug 2026
              </span>
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Designed and implemented AI-driven automation workflows and a
                reusable prompt library to streamline software testing
                processes, improving efficiency and consistency.
              </li>
              <li>
                Analyzed business requirements and executed 100+ functional and
                regression tests, identifying implementation issues and
                supporting solution delivery in an Agile environment.
              </li>
              <li>
                Bridged software and business teams to clarify requirements,
                resolve implementation issues, and deliver reliable enterprise
                software.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Software Engineer
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
                Integrated the chatbot into the company website, serving 2,000+
                monthly user interactions, deflecting a significant portion of
                human support tickets.
              </li>
              <li>
                Engineered the chatbot's retrieval pipeline and prompt
                architecture to reduce hallucinations while delivering
                context-aware answers across the company's product catalog.
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Co-Founder / Lead Software Engineer
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-haze">
                  Aim High Tutoring · West Vancouver, BC
                </p>
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-haze">
                Sept 2024 - June 2025
              </span>
            </div>
            <a
              href="https://www.aimhightutoring.ca/"
              className="inline-flex text-xs uppercase tracking-[0.25em] text-accent hover:text-mist"
              target="_blank"
              rel="noreferrer"
            >
              View Site
            </a>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Founded and scaled a peer-to-peer math tutoring business from 0
                to 18 clients in 9 months, generating $15K+ CAD in revenue with
                zero external funding.
              </li>
              <li>
                Developed a client acquisition platform using
                Javascript/PostgreSQL (Supabase) for lead capture and
                testimonial management, improving conversion rates by 150%.
              </li>
              <li>
                Managed operations for a team of 4 tutors, overseeing hiring,
                scheduling, client onboarding, and finances.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold text-mist">
                  Tech Layoff Stock Impact Predictor
                </h3>
              <p className="text-xs uppercase tracking-[0.25em] text-haze">
                Python, Pandas, Streamlit, scikit-learn, XGBoost
              </p>
            </div>
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
               Built an end-to-end ML pipeline predicting stock drawdowns from tech layoff events using 4,000+ records
              merged with Yahoo Finance data via Pandas.
            </li>
              <li>
                Deployed an interactive Streamlit dashboard visualizing model predictions, SHAP feature importance, and
performance metrics (AUC-ROC, precision/recall).
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
              Python, SQL, TypeScript, C, HTML/CSS
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-haze">
              Frameworks &amp; Tools
            </span>
            <p className="mt-2 text-mist">
              Pandas, NumPy, scikit-learn, PostgreSQL, React, Git, Azure DevOps
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
