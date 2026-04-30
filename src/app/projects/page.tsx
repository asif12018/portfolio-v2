import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — DevPortfolio',
  description: 'A curated collection of digital experiences engineered with precision.',
}

const projects = [
  {
    id: 1,
    title: 'Aura Finance Terminal',
    description:
      'A high-performance trading interface built for institutional investors. Features real-time websocket data integration, complex state management, and a custom WebGL charting engine.',
    tags: ['React', 'TypeScript', 'WebGL'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDq2WRnJ1al_Ooc_n40X4uptvTu7n-Wz-Hu6w6AFW5ivL5P83rYxTCANH75PAqT0iMyogi4wFR0uV5TJvprpLOaevAoqrgzjPrQvc0Exeb5WgRnPeqs990rem0W16ssENHa7lFd8aD1cri5Ju2j1a5m9Phv9VOBwH-PmPigXZn5TQDbtjo_QUoA78y_dTk-V7lsXYMN0GhlPiFPNNKwefJ7x2NCip_mMt424MiyNdnmdhNvRDU0TcGOUeY3mowdGDXFMiqaN1tMJQ6O',
    alt: 'Fintech Dashboard Preview',
    offset: false,
  },
  {
    id: 2,
    title: 'Nexus Commerce Engine',
    description:
      'A headless e-commerce backend built for scale. Orchestrates microservices for inventory, payment gateways, and AI-driven product recommendations with sub-50ms latency globally.',
    tags: ['Node.js', 'GraphQL', 'Redis'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2va8KJR4MmpPChphS9kY4V4sF5iyywJHtkwUFof24wyJZDdMIbv89AD-oz1sID8n_pfxFRfV1SkpIMqbhqoDvfyV63KEzQKG-zwiK_49b4ywLWc6SYhvrx2cHEUmzI4vNekRbwafc_g7kLjy2hMvoT9-e46nBOOUMJDaGQPTMRa0QBQxLSWQd7J36NQ4XnB_Wj_BgMuvUAAnG6kavLMBFG9bFeaHw-jZc4-za8K8SOTzlVbYgaAyL9hBMvX-o-csFW8yVCSMOX_ii',
    alt: 'E-commerce Architecture Preview',
    offset: true,
  },
  {
    id: 3,
    title: 'Synthetix LLM Canvas',
    description:
      'An interactive node-based environment for prompt engineering and chaining large language models. Features a bespoke visual programming interface using HTML5 Canvas.',
    tags: ['Next.js', 'Zustand', 'Python API'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqiVAhq8gs5VWU2DniamXF-6FMgxslbAxlA4y8W253xNUoz9hu0QarQqtSUR5uOMQWMH4Tc2HnUENTDEmm7xrQVGUKcpNsk2Z7UXiGM4l-poHjTWByW-x1d5JtlPW1zlNa6pb3xdPvVaAbfpeYDAGA2JldBz1_pLX1VqzRUW51l20Dsw4WKWr9rVH2qQLbjDVqvsPioFphEW9OlK9vpvVa3FQvcz9GF3jP5la0iFFPlVngtU5DGKy_GOL7qrH7IDjc7taKvwGogRD',
    alt: 'AI Tool Interface Preview',
    offset: false,
  },
  {
    id: 4,
    title: 'CoreOS Documentation Grid',
    description:
      'A completely custom documentation static site generator focused on extreme typography legibility and interactive code snippets. Designed to make reading complex API references enjoyable.',
    tags: ['Astro', 'Tailwind', 'MDX'],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQUYffcU3g-nVcIsFSpCeVnSAKjAV3z36duXFS8Ho_kROBsMBCj6bbamQwCH3EdwvAyr64_nIAOowgcvX3zd_1Vf4zeHzr9YNWZCz87OhzNE0vqLUGjd79WRD43gGPhyAZuO3VhQBbST9FcHwB5gvlMdQNNr9N9ERfb-YGA42ud_7r3qjipYeupP3ngmJPZW_jXLVtNcHKWl6-et-xPJNCQPEpnD9xatxaUNYnzkq97ok46xGBId8CeY9va70XxWx2ofgHZ4788Jna',
    alt: 'Developer SDK Docs Preview',
    offset: true,
  },
]

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-section-gap px-8 w-full max-w-container-max mx-auto">
      <section className="mb-margin mt-16 max-w-2xl">
        <h1 className="text-[72px] leading-[1.1] tracking-[-0.04em] font-extrabold text-on-background mb-unit">
          Selected Works
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A curated collection of digital experiences, engineered with precision and designed for
          high-end interaction paradigms.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mt-20">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`group relative flex flex-col bg-white/[0.02] backdrop-blur-[20px] rounded-xl overflow-hidden border border-white/[0.08] shadow-[inset_1px_1px_0px_0px_rgba(255,255,255,0.05)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/[0.04] hover:-translate-y-2 cursor-pointer ${
              project.offset ? 'mt-12 lg:mt-24' : ''
            }`}
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-container">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/60 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50" />
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
              />
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-20">
              <h2 className="font-headline-md text-headline-md text-on-background mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center border border-white/20 rounded-full px-3 py-1 font-label-caps text-label-caps text-on-surface-variant backdrop-blur-sm bg-black/20 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="bg-white/10 hover:bg-primary-container text-white hover:text-on-primary-container px-5 py-2 rounded-full font-label-caps text-sm transition-all duration-300 flex items-center gap-2"
                >
                  View Details
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
