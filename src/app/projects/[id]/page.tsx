import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Mock Data for individual project
const projectDetails: Record<string, any> = {
  '1': {
    title: 'CineTube',
    description: 'A cinematic movie discovery and streaming platform. Features real-time search, curated movie rows, community reviews with spoiler warnings, and tiered subscription plans.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDq2WRnJ1al_Ooc_n40X4uptvTu7n-Wz-Hu6w6AFW5ivL5P83rYxTCANH75PAqT0iMyogi4wFR0uV5TJvprpLOaevAoqrgzjPrQvc0Exeb5WgRnPeqs990rem0W16ssENHa7lFd8aD1cri5Ju2j1a5m9Phv9VOBwH-PmPigXZn5TQDbtjo_QUoA78y_dTk-V7lsXYMN0GhlPiFPNNKwefJ7x2NCip_mMt424MiyNdnmdhNvRDU0TcGOUeY3mowdGDXFMiqaN1tMJQ6O',
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'React 19', 'shadcn/ui'],
    liveLink: 'https://github.com/asif12018/cinetube-frontend',
    githubLink: 'https://github.com/asif12018/cinetube-frontend',
    backendLink: 'https://github.com/asif12018/cinetube-backend',
    challenges: 'Implementing real-time search with URL query params and creating a smooth cinematic intro fallback for slow connections without sacrificing initial load performance.',
    futurePlans: 'Integrate more streaming providers and add an AI recommendation engine for personalized movie suggestions.'
  },
  '2': {
    title: 'FoodHub',
    description: 'A production-ready food ordering platform connecting customers with providers. Orchestrates complex shopping carts, profile management, and cuisine filtering with smooth GSAP animations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2va8KJR4MmpPChphS9kY4V4sF5iyywJHtkwUFof24wyJZDdMIbv89AD-oz1sID8n_pfxFRfV1SkpIMqbhqoDvfyV63KEzQKG-zwiK_49b4ywLWc6SYhvrx2cHEUmzI4vNekRbwafc_g7kLjy2hMvoT9-e46nBOOUMJDaGQPTMRa0QBQxLSWQd7J36NQ4XnB_Wj_BgMuvUAAnG6kavLMBFG9bFeaHw-jZc4-za8K8SOTzlVbYgaAyL9hBMvX-o-csFW8yVCSMOX_ii',
    techStack: ['React 19', 'better-auth', 'Framer Motion', 'Next.js 16', 'Zod'],
    liveLink: 'https://github.com/asif12018/foodhub-frontend',
    githubLink: 'https://github.com/asif12018/foodhub-frontend',
    backendLink: 'https://github.com/asif12018/foodhub-backend',
    challenges: 'Managing parallel routing for role-based dashboard rendering (Admin vs. Customer) and ensuring type-safety across all environment variables.',
    futurePlans: 'Implement live order tracking via WebSockets and expand the provider ecosystem with specialized menus.'
  },
  '3': {
    title: 'CineTube Admin System',
    description: 'A dedicated administration interface for content and community management. Provides full CRUD operations for metadata, cast management, and a robust user review moderation system.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqiVAhq8gs5VWU2DniamXF-6FMgxslbAxlA4y8W253xNUoz9hu0QarQqtSUR5uOMQWMH4Tc2HnUENTDEmm7xrQVGUKcpNsk2Z7UXiGM4l-poHjTWByW-x1d5JtlPW1zlNa6pb3xdPvVaAbfpeYDAGA2JldBz1_pLX1VqzRUW51l20Dsw4WKWr9rVH2qQLbjDVqvsPioFphEW9OlK9vpvVa3FQvcz9GF3jP5la0iFFPlVngtU5DGKy_GOL7qrH7IDjc7taKvwGogRD',
    techStack: ['React Query v5', 'Zod', 'Cloudinary'],
    liveLink: 'https://github.com/asif12018/cinetube-frontend',
    githubLink: 'https://github.com/asif12018/cinetube-frontend',
    backendLink: 'https://github.com/asif12018/cinetube-backend',
    challenges: 'Building a custom review moderation workflow with dedicated confirmation modals and efficient state management for image uploads.',
    futurePlans: 'Add detailed analytics dashboards for user engagement and subscription revenue tracking.'
  },
  '4': {
    title: 'FoodHub Admin Dashboard',
    description: 'A powerful analytics portal utilizing Next.js parallel routes for role-based access. Features interactive Recharts and feature-rich TanStack data tables for comprehensive order management.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQUYffcU3g-nVcIsFSpCeVnSAKjAV3z36duXFS8Ho_kROBsMBCj6bbamQwCH3EdwvAyr64_nIAOowgcvX3zd_1Vf4zeHzr9YNWZCz87OhzNE0vqLUGjd79WRD43gGPhyAZuO3VhQBbST9FcHwB5gvlMdQNNr9N9ERfb-YGA42ud_7r3qjipYeupP3ngmJPZW_jXLVtNcHKWl6-et-xPJNCQPEpnD9xatxaUNYnzkq97ok46xGBId8CeY9va70XxWx2ofgHZ4788Jna',
    techStack: ['TanStack Table', 'Recharts', 'shadcn/ui'],
    liveLink: 'https://github.com/asif12018/foodhub-frontend',
    githubLink: 'https://github.com/asif12018/foodhub-frontend',
    backendLink: 'https://github.com/asif12018/foodhub-backend',
    challenges: 'Implementing complex, sortable, and filterable data tables for large sets of order data and real-time analytics charts.',
    futurePlans: 'Integrate automated weekly reporting and enhanced visualization for provider performance.'
  },
  '5': {
    title: 'Edura',
    description: 'An online educational platform where users can enroll in and complete courses. Features a responsive video player, secure payments, and role-based access for students, teachers, and admins.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSqiVAhq8gs5VWU2DniamXF-6FMgxslbAxlA4y8W253xNUoz9hu0QarQqtSUR5uOMQWMH4Tc2HnUENTDEmm7xrQVGUKcpNsk2Z7UXiGM4l-poHjTWByW-x1d5JtlPW1zlNa6pb3xdPvVaAbfpeYDAGA2JldBz1_pLX1VqzRUW51l20Dsw4WKWr9rVH2qQLbjDVqvsPioFphEW9OlK9vpvVa3FQvcz9GF3jP5la0iFFPlVngtU5DGKy_GOL7qrH7IDjc7taKvwGogRD',
    techStack: ['React', 'Firebase', 'Express', 'Node.js', 'Swiper slider', 'Tanstack query', 'Axios', 'React hook form', 'JWT'],
    liveLink: 'https://edura-4b499.web.app/',
    githubLink: 'https://github.com/asif12018/full-stack-edura-client.git',
    backendLink: 'https://github.com/asif12018/full-stack-edura-server.git',
    challenges: 'Integrating a secure YouTube private video player with no extra storage required, and managing secure user authentication with Firebase and JWT.',
    futurePlans: 'Implement real-time live classes using WebRTC and an AI-powered automated grading system for assignments.'
  }
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectDetails[resolvedParams.id]

  if (!project) {
    notFound()
  }

  return (
    <main className="pt-32 pb-section-gap px-4 md:px-8 w-full max-w-container-max mx-auto">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 group">
        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Projects
      </Link>

      <div className="bg-surface-container/30 border border-white/10 rounded-2xl overflow-hidden glass-card">
        {/* Project Header Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => (
                <span key={tech} className="px-4 py-1.5 rounded-full border border-white/20 text-sm font-label-caps bg-black/40 text-white backdrop-blur-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                Overview
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">psychology</span>
                Challenges Faced
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                <p className="text-on-surface-variant leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
                Future Improvements
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-tertiary"></div>
                <p className="text-on-surface-variant leading-relaxed">
                  {project.futurePlans}
                </p>
              </div>
            </section>
          </div>

          <div className="space-y-8 lg:col-span-1">
            <div className="bg-surface-container-low border border-white/10 rounded-xl p-6 space-y-6">
              <h3 className="font-bold text-xl text-white">Project Links</h3>
              
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary-container hover:bg-primary text-on-primary-container px-6 py-4 rounded-lg font-label-caps text-sm flex items-center justify-between transition-colors group"
              >
                <span>Live Preview</span>
                <span className="material-symbols-outlined group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">open_in_new</span>
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-lg font-label-caps text-sm flex items-center justify-between transition-colors group"
              >
                <span>Client Repository</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">code</span>
              </a>

              {project.backendLink && (
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-lg font-label-caps text-sm flex items-center justify-between transition-colors group"
                >
                  <span>Backend Repository</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">dns</span>
                </a>
              )}
            </div>
            
            <div className="bg-surface-container-low border border-white/10 rounded-xl p-6 space-y-4">
              <h3 className="font-bold text-xl text-white">Tech Stack</h3>
              <ul className="space-y-3">
                {project.techStack.map((tech: string) => (
                  <li key={tech} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
