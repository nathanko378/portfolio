import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-haze">About</p>
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
        <p className="text-sm text-haze">I’ll list these here soon.</p>
      </section>
    </div>
  );
}
