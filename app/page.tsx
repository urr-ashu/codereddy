import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  Github,
  GraduationCap,
  MessageCircle,
  Mic,
  Phone,
  Route,
  Sparkles,
  Target,
  Trophy,
  UsersRound
} from "lucide-react";

const whatsappNumber = "910000000000";
const whatsappText = encodeURIComponent(
  "Hi CodeReddy, I want to know about the Software Interview Cracking Program."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Interview diagnosis",
    text: "We check coding level, resume, project explanation, communication, and fundamentals before creating a preparation path."
  },
  {
    icon: Code2,
    title: "DSA and fundamentals",
    text: "Focused practice on common fresher interview patterns, JavaScript or stack basics, DBMS, APIs, Git, and system basics."
  },
  {
    icon: BriefcaseBusiness,
    title: "Project readiness",
    text: "Improve one or two resume-ready projects, clean up GitHub, prepare architecture explanation, and handle project questions."
  },
  {
    icon: Mic,
    title: "Mock interviews",
    text: "Weekly technical, coding, HR, and project-round simulations with feedback that students can act on immediately."
  }
];

const outcomes = [
  "Know exactly why interviews are not converting",
  "Explain projects with confidence and structure",
  "Practice DSA questions that freshers actually face",
  "Rewrite resume, LinkedIn, and GitHub for job applications",
  "Handle HR, technical, coding, and project rounds"
];

const tracks = [
  {
    name: "4-Week Interview Prep",
    tag: "Focused",
    price: "Best for students with projects",
    points: [
      "Initial interview diagnosis",
      "DSA and fundamentals practice",
      "Resume and LinkedIn cleanup",
      "Weekly mock interviews"
    ]
  },
  {
    name: "8-Week Placement Readiness",
    tag: "Recommended",
    price: "Best for weak project confidence",
    points: [
      "Everything in 4-week prep",
      "Project improvement plan",
      "GitHub README and deployment cleanup",
      "Application and referral strategy"
    ]
  },
  {
    name: "Diagnosis Session",
    tag: "Start here",
    price: "For clarity before joining",
    points: [
      "Coding and resume review",
      "Project explanation check",
      "Interview weakness report",
      "Suggested preparation roadmap"
    ]
  }
];

const timeline = [
  {
    week: "Week 1",
    title: "Assess and plan",
    text: "Coding test, resume review, communication check, technical fundamentals, and project explanation review."
  },
  {
    week: "Week 2",
    title: "Build interview base",
    text: "DSA patterns, core programming concepts, DBMS, APIs, Git, and answers for common fresher questions."
  },
  {
    week: "Week 3",
    title: "Project and mock rounds",
    text: "Project story, architecture explanation, GitHub cleanup, technical mocks, and coding round simulations."
  },
  {
    week: "Week 4",
    title: "Apply with confidence",
    text: "HR preparation, final mock feedback, resume polishing, LinkedIn cleanup, and job application strategy."
  }
];

const faqs = [
  {
    q: "Is CodeReddy a normal coding institute?",
    a: "No. CodeReddy is for students who already learned coding somewhere but are not clearing interviews. The focus is interview readiness."
  },
  {
    q: "Can beginners join?",
    a: "Beginners can take a diagnosis session first. If fundamentals are too weak, we suggest a longer readiness path before mock interviews."
  },
  {
    q: "Do you guarantee placement?",
    a: "No responsible program should promise a guaranteed job. The goal is to improve interview performance, projects, resume quality, and application strategy."
  },
  {
    q: "Which stack do you support?",
    a: "The first launch focuses on web development students, especially JavaScript, React, Node, MERN, HTML, CSS, APIs, DBMS, Git, and fresher-level DSA."
  }
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "CodeReddy",
    url: "https://codereddy.in",
    description:
      "Software interview readiness program for trained coding students and freshers.",
    areaServed: "India",
    offers: {
      "@type": "Offer",
      name: "Software Interview Cracking Program",
      category: "Software interview preparation"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/55 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3" aria-label="CodeReddy home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-forest text-lg font-black text-white">
              CR
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-black tracking-normal text-ink">CodeReddy</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                Interview Ready
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-ink/75 md:flex">
            <a href="#program">Program</a>
            <a href="#tracks">Tracks</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </div>
          <a
            href={whatsappUrl}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-forest px-4 text-sm font-bold text-white shadow-soft transition hover:bg-ink"
          >
            <MessageCircle size={18} />
            Join Now
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[760px] overflow-hidden pt-16 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/codereddy-hero.png"
            alt="Mentor helping software job aspirants prepare for interviews"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-forest/82 to-ink/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-ink/15" />
        </div>

        <div className="section-shell relative z-10 flex min-h-[calc(100vh-64px)] items-center py-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-black uppercase tracking-[0.14em] text-amber backdrop-blur-md">
              <Sparkles size={16} />
              Land your first software job
            </div>
            <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl">
              Completed your software development course but still struggling to
              crack interviews?
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/84">
              CodeReddy helps trained students become interview-ready with DSA
              practice, project explanation, resume cleanup, and 1:1 mock
              interviews.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-amber px-6 text-base font-black text-ink shadow-soft transition hover:bg-white"
              >
                <MessageCircle size={20} />
                Get Free Interview Diagnosis
              </a>
              <a
                href="#program"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-white/24 bg-white/10 px-6 text-base font-black text-white backdrop-blur-md transition hover:bg-white hover:text-ink"
              >
                View Program
                <ArrowRight size={19} />
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["4-8 weeks", "Focused prep"],
                ["1:1 review", "Clear feedback"],
                ["MERN-ready", "Fresher focus"]
              ].map(([value, label]) => (
                <div key={value} className="border-l-4 border-amber bg-white/12 p-4 backdrop-blur-md">
                  <p className="text-xl font-black text-white">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/68">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-ink py-4 text-white">
        <div className="section-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-bold">
          {["DSA", "Projects", "Resume", "GitHub", "Mock Interviews", "HR Round"].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="program" className="py-20">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">The core offer</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Software Interview Cracking Program
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink/72">
                The program starts by finding exactly where a student is stuck,
                then fixes the interview skills that matter: coding, fundamentals,
                project confidence, resume quality, and communication.
              </p>
              <ul className="mt-8 space-y-4">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-base font-semibold text-ink/78">
                    <BadgeCheck className="mt-0.5 flex-none text-forest" size={21} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="rounded-md border border-forest/12 bg-white p-6 shadow-sm">
                    <Icon className="text-forest" size={30} />
                    <h3 className="mt-5 text-xl font-black text-ink">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-ink/68">{pillar.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Who this is for</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
              Not for everyone. Built for students stuck after training.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [GraduationCap, "College students", "You learned web development or coding but do not know how to face real interviews."],
              [BookOpenCheck, "Bootcamp learners", "You completed a course, but your resume, projects, and answers still feel weak."],
              [Target, "Freshers applying now", "You are sending applications but not getting selected after screening or interview rounds."]
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof GraduationCap;
              return (
                <article key={title as string} className="rounded-md border border-ink/10 bg-[#fbf8f1] p-7">
                  <TypedIcon size={32} className="text-coral" />
                  <h3 className="mt-5 text-2xl font-black text-ink">{title as string}</h3>
                  <p className="mt-3 leading-7 text-ink/68">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="tracks" className="py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">Program tracks</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
                Start with clarity, then choose the right intensity.
              </h2>
            </div>
            <a
              href={whatsappUrl}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amber px-5 text-sm font-black text-ink transition hover:bg-coral hover:text-white"
            >
              <Phone size={18} />
              Ask for pricing
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {tracks.map((track) => (
              <article key={track.name} className="rounded-md border border-forest/12 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black text-ink">{track.name}</h3>
                  <span className="rounded-md bg-mint px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-forest">
                    {track.tag}
                  </span>
                </div>
                <p className="mt-3 font-semibold text-coral">{track.price}</p>
                <ul className="mt-6 space-y-3">
                  {track.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-ink/72">
                      <CheckCircle2 size={18} className="mt-0.5 flex-none text-forest" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-forest py-20 text-white">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber">The process</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Four weeks to expose weak points and build interview confidence.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/76">
                The structure stays practical. Every week produces something
                visible: test results, improved answers, project polish, mock
                feedback, and a clearer job search plan.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {timeline.map((item) => (
                <article key={item.week} className="rounded-md border border-white/14 bg-white/8 p-6">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={22} className="text-amber" />
                    <span className="text-sm font-black uppercase tracking-[0.16em] text-amber">
                      {item.week}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="grid gap-8 rounded-md bg-ink p-8 text-white shadow-soft md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <Route className="text-amber" size={36} />
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
                First launch goal: 10 serious students.
              </h2>
              <p className="mt-4 leading-7 text-white/72">
                CodeReddy is built to validate outcomes before scaling. The first
                batch should be small, feedback-heavy, and focused on real student
                improvement.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [UsersRound, "Small batch mentoring"],
                [FileText, "Resume review checklist"],
                [Github, "GitHub cleanup"],
                [Trophy, "Before-after case studies"]
              ].map(([Icon, label]) => {
                const TypedIcon = Icon as typeof UsersRound;
                return (
                  <div key={label as string} className="flex items-center gap-3 rounded-md bg-white/8 p-4">
                    <TypedIcon size={22} className="text-amber" />
                    <span className="font-bold">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20">
        <div className="section-shell">
          <div className="max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-coral">FAQ</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl lg:whitespace-nowrap">
              Common questions before you join.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-md border border-ink/10 bg-[#fbf8f1] p-6">
                <h3 className="text-lg font-black text-ink">{faq.q}</h3>
                <p className="mt-3 leading-7 text-ink/68">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            Already learned coding? Get ready for the interview room.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/72">
            Send a WhatsApp message and start with a diagnosis of your current
            resume, projects, coding level, and interview gaps.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappUrl}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-forest px-7 text-base font-black text-white shadow-soft transition hover:bg-ink"
            >
              <MessageCircle size={20} />
              Message CodeReddy
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white py-8">
        <div className="section-shell flex flex-col justify-between gap-4 text-sm font-semibold text-ink/64 md:flex-row md:items-center">
          <p>© 2026 CodeReddy. Software interview readiness for freshers.</p>
          <div className="flex gap-5">
            <a href="mailto:hello@codereddy.in">hello@codereddy.in</a>
            <a href={whatsappUrl}>WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
