import Image from 'next/image'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'

export const metadata: Metadata = {
  title: 'About — DevPortfolio',
  description: 'Learn more about Asif Sheikh, Junior Frontend Engineer & Backend Engineer.',
}

export default function AboutPage() {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-section-gap">
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-container/10 blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[150px] pointer-events-none z-0"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
        {/* Left Side: The Professional Bio */}
        <section className="lg:col-span-7 flex flex-col gap-8">
          <div className="space-y-4 px-2">
            <h1 className="text-[72px] leading-[1.1] tracking-[-0.04em] font-extrabold text-on-surface tracking-tighter">
              Architecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-inverse-primary">
                Digital
              </span>{' '}
              Realities.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A synthesis of design precision and engineering logic. Crafting scalable architectures
              and high-fidelity interfaces that define modern product experiences.
            </p>
          </div>

          <div className="relative bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-xl p-8 lg:p-12 overflow-hidden glass-edge group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/10 overflow-hidden flex-shrink-0 bg-surface-container-high shadow-xl relative group-hover:border-primary/50 transition-colors duration-500">
                <Image
                  src="/me.png"
                  alt="Asif Sheikh"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="font-headline-md text-headline-md text-on-surface">Asif Sheikh</h2>
                  <p className="font-body-md text-body-md text-primary">
                    Junior Frontend  & Backend Engineer
                  </p>
                  <SocialLinks className="pt-2" />
                </div>
                
                <div className="space-y-4">
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <strong>My Journey:</strong> My programming journey began alongside my studies in Electrical and Electronic Engineering, where I first discovered the magic of bridging complex logic with interactive digital experiences. What started as an exploration of code quickly evolved into a deep passion for full-stack architecture. Over the years, I have continuously honed my skills, adapting to new frameworks to build scalable applications from the database to the browser.
                  </p>
                  
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <strong>What I Do:</strong> I specialize in component-driven architecture using modern stacks like React, Next.js, Node.js, and Prisma. I genuinely enjoy the challenge of translating complex requirements into elegant, high-performance interfaces. My focus is always on creating digital products that are as robust under the hood as they are visually uncompromising on the surface.
                  </p>
                  
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    <strong>Beyond the Screen:</strong>When I am not immersed in web development or semiconductor research, my creativity shifts to visual storytelling—directing and generating cinematic AI art and getting lost in a great manhwa. To step away from the screens and recharge, you can usually find me heading out for a boat ride or sharing a meal by the river with my closest friends.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <h3 className="font-label-caps text-label-caps text-outline">Educational Background</h3>
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-4 rounded-lg">
                      <h4 className="font-bold text-white text-lg">B.Sc. in Computer Science & Engineering</h4>
                      <p className="text-on-surface-variant text-sm">Tech University • 2014 - 2018</p>
                      <p className="text-on-surface-variant text-sm mt-1">Graduated with honors, focusing on Human-Computer Interaction and Software Engineering.</p>
                    </div>
                  </div>

                  <h3 className="font-label-caps text-label-caps text-outline">Core Competencies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Ecosystem', 'TypeScript', 'Next.js', 'Design Systems', 'Full-Stack Architecture'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 rounded-full border border-white/10 text-label-caps text-on-surface-variant bg-white/[0.02] backdrop-blur-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-4">
            {/* <div className="bg-surface-container-low border border-white/5 rounded-lg p-6 flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-[72px] leading-[1.1] font-extrabold text-on-surface leading-none">8+</span>
              <span className="font-label-caps text-label-caps text-outline">Years Experience</span>
            </div> */}
            <div className="bg-surface-container-low border border-white/5 rounded-lg p-6 flex flex-col gap-2 relative overflow-hidden group">
              <div className=" absolute  top-0 left-0 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-[72px] leading-[1.1] font-extrabold text-on-surface leading-none text-center ">15+</span>
              <span className="font-label-caps text-label-caps text-outline text-center">Projects Deployed</span>
            </div>
          </div>
        </section>

        {/* Right Side: The Contact Form */}
        <section className="lg:col-span-5 flex flex-col">
          <div className="sticky top-32 w-full">
            <div className="bg-white/[0.03] backdrop-blur-[60px] border border-white/10 rounded-xl p-8 shadow-2xl glass-edge relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none blur-[40px]"></div>
              <div className="mb-8 relative z-10">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  Initiate Transmission.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Whether it&apos;s a structural challenge or a conceptual inquiry, the channel is
                  open.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
