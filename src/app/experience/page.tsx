import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience — Asif Sheikh',
  description: 'Professional journey and technical milestones of Asif Sheikh.',
}

const experiences = [
  {
    company: 'Quantum Systems',
    role: 'Senior UI Architect',
    period: '2022 — Present',
    description: 'Leading the development of a next-generation design system used across 5 major product lines. Implementing high-performance React components and ensuring sub-100ms interaction latency.',
  },
  {
    company: 'Stellar Tech',
    role: 'Full-Stack Developer',
    period: '2020 — 2022',
    description: 'Developed scalable microservices using Node.js and Go. Orchestrated complex data migrations and optimized database queries for a platform serving 1M+ active users.',
  },
  {
    company: 'Nebula Creative',
    role: 'Frontend Developer',
    period: '2018 — 2020',
    description: 'Crafted immersive web experiences for high-end luxury brands. Specialized in SVG animations, WebGL integrations, and responsive performance optimization.',
  },
]

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-section-gap px-gutter max-w-container-max mx-auto w-full">
      <section className="mb-margin mt-16 max-w-2xl">
        <h1 className="text-[72px] leading-[1.1] tracking-[-0.04em] font-extrabold text-on-background mb-unit">
          Professional Journey
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A track record of engineering excellence and product-focused innovation.
        </p>
      </section>

      <section className="mt-20 space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-card rounded-xl p-8 lg:p-12 relative overflow-hidden group hover:bg-white/[0.05] transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h2 className="text-[24px] font-bold text-white mb-1">{exp.role}</h2>
                <h3 className="text-primary font-medium text-lg mb-4">{exp.company}</h3>
              </div>
              <span className="font-label-caps text-label-caps text-on-surface-variant bg-white/5 px-4 py-2 rounded-full border border-white/10">
                {exp.period}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              {exp.description}
            </p>
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </section>
    </main>
  )
}
