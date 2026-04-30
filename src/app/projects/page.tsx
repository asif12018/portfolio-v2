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
    title: 'CineTube',
    description:
      'A cinematic movie discovery and streaming platform. Features real-time search, curated movie rows, community reviews with spoiler warnings, and tiered subscription plans.',
    tags: ['Next.js 16', 'TypeScript', 'Prisma'],
    image:
      '/cine-tube.jpg',
    alt: 'CineTube App Preview',
    offset: false,
  },
  {
    id: 2,
    title: 'FoodHub',
    description:
      'A production-ready food ordering platform connecting customers with providers. Orchestrates complex shopping carts, profile management, and cuisine filtering with smooth GSAP animations.',
    tags: ['React 19', 'better-auth', 'Framer Motion'],
    image:
      '/foodhub.jpg',
    alt: 'FoodHub Storefront Preview',
    offset: true,
  },
  // {
  //   id: 3,
  //   title: 'CineTube Admin System',
  //   description:
  //     'A dedicated administration interface for content and community management. Provides full CRUD operations for metadata, cast management, and a robust user review moderation system.',
  //   tags: ['React Query v5', 'Zod', 'Cloudinary'],
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqiVAhq8gs5VWU2DniamXF-6FMgxslbAxlA4y8W253xNUoz9hu0QarQqtSUR5uOMQWMH4Tc2HnUENTDEmm7xrQVGUKcpNsk2Z7UXiGM4l-poHjTWByW-x1d5JtlPW1zlNa6pb3xdPvVaAbfpeYDAGA2JldBz1_pLX1VqzRUW51l20Dsw4WKWr9rVH2qQLbjDVqvsPioFphEW9OlK9vpvVa3FQvcz9GF3jP5la0iFFPlVngtU5DGKy_GOL7qrH7IDjc7taKvwGogRD',
  //   alt: 'CineTube Admin Preview',
  //   offset: false,
  // },
  // {
  //   id: 4,
  //   title: 'FoodHub Admin Dashboard',
  //   description:
  //     'A powerful analytics portal utilizing Next.js parallel routes for role-based access. Features interactive Recharts and feature-rich TanStack data tables for comprehensive order management.',
  //   tags: ['TanStack Table', 'Recharts', 'shadcn/ui'],
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuDQUYffcU3g-nVcIsFSpCeVnSAKjAV3z36duXFS8Ho_kROBsMBCj6bbamQwCH3EdwvAyr64_nIAOowgcvX3zd_1Vf4zeHzr9YNWZCz87OhzNE0vqLUGjd79WRD43gGPhyAZuO3VhQBbST9FcHwB5gvlMdQNNr9N9ERfb-YGA42ud_7r3qjipYeupP3ngmJPZW_jXLVtNcHKWl6-et-xPJNCQPEpnD9xatxaUNYnzkq97ok46xGBId8CeY9va70XxWx2ofgHZ4788Jna',
  //   alt: 'FoodHub Admin Preview',
  //   offset: true,
  // },
  {
    id: 5,
    title: 'Edura',
    description:
      'An online educational platform where users can enroll in and complete courses. Features a responsive video player, secure payments, and role-based access for students, teachers, and admins.',
    tags: ['React', 'Node.js', 'Express', 'Firebase'],
    image:
      '/edura.jpg',
    alt: 'Edura Platform Preview',
    offset: false,
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