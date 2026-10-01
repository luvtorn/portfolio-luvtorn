import { projects } from "@/data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Footer from "../../components/Footer/Footer";
import CaseStudySystem from "../../components/Projects/CaseStudySystem";

type Props = { params: Promise<{ slug: string }> };

const caseProjects = projects.filter((project) => project.slug && project.caseStudy);

export function generateStaticParams() {
  return caseProjects.map((project) => ({ slug: project.slug! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseProjects.find((item) => item.slug === slug);
  if (!project) return { title: "Case study not found" };

  return {
    title: `${project.title} — Case Study`,
    description: `${project.description} Read about the product decisions, architecture, and quality behind it.`,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      url: `/projects/${slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = caseProjects.find((item) => item.slug === slug);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;

  return (
    <div className="site-shell">
      <header className="border-b border-white/10 bg-black/75">
        <div className="container-shell flex min-h-18 items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-primary"
          >
            <FaArrowLeft size={13} /> All projects
          </Link>
          <Link href="/" className="focus-ring text-sm font-bold tracking-[0.16em] text-white uppercase">
            MG<span className="text-primary">.</span>
          </Link>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="container-shell pb-12 pt-18 sm:pb-18 sm:pt-24">
          <p className="eyebrow">Case study / {project.category}</p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-[clamp(3.25rem,10vw,7rem)] leading-[0.95] font-bold tracking-[-0.065em] text-white">
                {project.title}<span className="text-primary">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                {project.description}
              </p>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-2 lg:grid-cols-1">
              <div><p className="case-meta-label">My role</p><p className="mt-1 font-semibold text-white">{study.role}</p></div>
              <div><p className="case-meta-label">Status</p><p className="mt-1 font-semibold text-white">{study.status}</p></div>
            </div>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-black transition hover:bg-yellow-300">
                Open live project <FaArrowUpRightFromSquare size={12} />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-primary hover:text-primary">
                <FaGithub size={15} /> View source code
              </a>
            )}
          </div>
        </section>

        {project.image && (
          <div className="container-shell">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#f4f5ee] sm:rounded-[2rem]">
              <Image
                src={project.image}
                alt={`Screenshot of the ${project.title} application`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain p-2 sm:p-5"
              />
            </div>
          </div>
        )}

        <section className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">01 / Context</p>
              <h2 className="section-title">The problem</h2>
              <p className="section-copy mt-6">{study.challenge}</p>
            </div>
            <div>
              <p className="eyebrow">02 / Product approach</p>
              <h2 className="section-title">The solution</h2>
              <p className="section-copy mt-6">{study.approach}</p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">03 / System map</p>
              <h2 className="section-title">How it fits together</h2>
              <p className="section-copy mt-5">The core parts of the application, from the interface through data and integrations.</p>
            </div>
            <CaseStudySystem layers={study.system} />
          </div>
        </section>

        <section className="section-shell" id="decisions">
          <div className="container-shell">
            <div className="mb-10 max-w-3xl">
              <p className="eyebrow">04 / Engineering decisions</p>
              <h2 className="section-title">What I thought through</h2>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {study.decisions.map((decision, index) => (
                <article key={decision.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <span className="font-mono text-xs font-semibold tracking-widest text-primary">0{index + 1}</span>
                  <h3 className="mt-7 text-xl font-bold text-white">{decision.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">{decision.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">05 / Quality</p>
              <h2 className="section-title">Built to be checked</h2>
              <ul className="mt-7 space-y-4 text-gray-300">
                {study.quality.map((item) => (
                  <li key={item} className="flex gap-3 leading-7"><span className="text-primary">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-primary/25 bg-[radial-gradient(circle_at_top_right,rgba(255,218,39,0.12),transparent_55%),#101010] p-7 sm:p-10">
              <p className="eyebrow">The outcome</p>
              <p className="mt-5 text-xl leading-9 font-medium text-white sm:text-2xl">{study.outcome}</p>
              <Link href="/#projects" className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-primary/40 underline-offset-8 hover:decoration-primary">
                <FaArrowLeft size={12} /> Explore more work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer backToTopHref="#main-content" />
    </div>
  );
}
