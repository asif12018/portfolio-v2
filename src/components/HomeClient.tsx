'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const frontendSkills = [
  { icon: 'html', color: 'text-primary', label: 'HTML5' },
  { icon: 'css', color: 'text-secondary', label: 'CSS3' },
  { icon: 'javascript', color: 'text-tertiary', label: 'JavaScript' },
  { icon: 'code', color: 'text-secondary-container', label: 'TypeScript' },
  { icon: 'style', color: 'text-primary-fixed', label: 'Tailwind CSS' },
]

const dataLayer = [
  { icon: 'database', color: 'text-secondary', label: 'PostgreSQL' },
  { icon: 'schema', color: 'text-primary', label: 'Prisma ORM' },
]

const securityItems = ['JWT Authentication', 'OAuth Integration', 'Role-Based Access']

export default function HomeClient() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const arsenalRef = useRef(null)

  const designations = ["Frontend", "Backend", "Full-Stack"]
  const [currentDesignation, setCurrentDesignation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useGSAP(() => {
    // GSAP ScrollTrigger for Arsenal Section
    const cards = gsap.utils.toArray('.arsenal-card')
    cards.forEach((card: any, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      )
    })
  }, { scope: containerRef })

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 10 } },
  }

  return (
    <main ref={containerRef} className="pt-32 pb-section-gap w-full relative">
      
      {/* ── Hero ── */}
      <motion.section 
        ref={heroRef}
        style={{ opacity: opacityHero, scale: scaleHero, y: yBg }}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-section-gap w-full -mt-32 pt-32"
      >
        {/* Subtle Background Hero Image */}
        <div className="absolute inset-0 z-[-1] opacity-30 pointer-events-none">
          <img 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbvZrB5C6H5yz841Ek3SB4_yH0WWyWByLKHvYWHhLKovWMVascKQStpWockux73dR0D_MzYt7ahRVgwb3ffP2Z4urjtcxWCwFSHaGmkHP9Bcs3eXV-Sbt7Xym6njqEC6avpWGAweVOf9MQ13ODoMWETDx_kcDjFFSf_7TIqMgYhR8eoAd66kSZl-PLPp78kZdvlVxSeNL6qNBjNJgtrb2xI2d91MfF89hWfJJuzWuT9SyC_W4ulTU4fFL_puoTRSCwAgaKz-6XYbM"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>

        {/* Constellation of Code Snippets */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none hidden md:block">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[15%] bg-white/[0.02] backdrop-blur-[10px] border border-white/10 p-4 rounded-lg transform -rotate-6 border-[#7c3aed]/30 opacity-50"
          >
            <pre className="text-[10px] text-[#7c3aed] font-mono text-left"><code>async function syncNode() {'{\n'}  await aether.init();{'\n}'}</code></pre>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 right-[15%] bg-white/[0.02] backdrop-blur-[10px] border border-white/10 p-4 rounded-lg transform rotate-12 border-secondary opacity-50"
          >
            <pre className="text-[10px] text-secondary font-mono text-left"><code>&lt;Component {'\n'}  state={'{ACTIVE}'} {'\n'}/&gt;</code></pre>
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[20%] right-1/4 bg-white/[0.02] backdrop-blur-[10px] border border-white/10 p-3 rounded-lg opacity-30"
          >
            <pre className="text-[10px] text-white/50 font-mono text-left"><code>01001010{'\n'}01110101{'\n'}01101110</code></pre>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-1/4 left-[10%] bg-white/[0.02] backdrop-blur-[10px] border border-white/10 p-4 rounded-lg transform -rotate-12 border-[#7c3aed]/20 opacity-40"
          >
            <pre className="text-[10px] text-[#7c3aed] font-mono text-left opacity-80"><code>deploy(prod) =&gt; {'{\n'}  log.success();{'\n}'}</code></pre>
          </motion.div>
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl flex flex-col items-center pt-20">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
            
            {/* Avatar */}
            <motion.div variants={itemVariants} className="mb-8 w-32 h-32 rounded-full border border-[#7c3aed]/30 p-1 relative">
              <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_30px_rgba(124,58,237,0.4)]">
                <img className="w-full h-full object-cover" src="/me.png" alt="Avatar"/>
              </div>
              {/* Orbiting Tech Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 border border-[#7c3aed]/10 rounded-full border-t-[#7c3aed]/60"
              >
                <div className="absolute top-4 -right-1 w-2 h-2 bg-[#7c3aed] rounded-full shadow-[0_0_10px_#7c3aed] animate-pulse"></div>
              </motion.div>
            </motion.div>

            <motion.p variants={itemVariants} className="font-mono text-[#7c3aed] mb-2 tracking-[0.15em] text-sm md:text-base font-semibold drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              Hello, I&apos;m MD. Asif Sheikh
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-8">
              <div className="h-[60px] md:h-[80px] overflow-hidden relative w-full flex justify-center items-center">
                <AnimatePresence mode="popLayout">
                  <motion.span 
                    key={currentDesignation}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="font-h1 text-[56px] md:text-[80px] text-white leading-none tracking-tighter uppercase absolute whitespace-nowrap font-black"
                  >
                    {designations[currentDesignation]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <h1 className="font-h1 text-[56px] md:text-[80px] leading-none tracking-tighter uppercase font-black relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#7c3aed] relative z-10">DEVELOPER</span>
                <span className="absolute inset-0 text-[#7c3aed] blur-[20px] opacity-30 z-0 select-none">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="font-body-lg text-white/60 max-w-2xl mb-12 text-lg">
              Crafting high-fidelity digital experiences and robust architecture for the next generation of web-based operating systems. Specialized in React, Node.js, and high-performance visual interfaces.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects" className="bg-[#7c3aed] text-white text-sm px-10 py-4 font-bold tracking-widest hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] active:scale-95 transition-all uppercase">
                INITIALIZE_PROJECT
              </Link>
              <Link href="/about" className="border border-white/20 backdrop-blur-md text-white text-sm px-10 py-4 font-bold tracking-widest hover:border-[#7c3aed] hover:text-[#7c3aed] active:scale-95 transition-all uppercase">
                VIEW_ARCHIVE
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>

      {/* ── Engineering Arsenal ── */}
      <section ref={arsenalRef} className="mb-section-gap perspective-1000 max-w-container-max mx-auto px-gutter relative z-10">
        
        {/* Techy Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] w-12 md:w-32 bg-gradient-to-r from-transparent to-[#7c3aed]"></div>
          <h2 className="font-mono text-xl md:text-2xl font-bold text-white tracking-[0.3em] uppercase text-center flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7c3aed] animate-pulse">memory</span>
            SYSTEM_CAPABILITIES
          </h2>
          <div className="h-[1px] w-12 md:w-32 bg-gradient-to-l from-transparent to-[#7c3aed]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Frontend Module */}
          <div className="relative overflow-hidden bg-[#100d16]/80 backdrop-blur-xl border border-white/5 rounded-none md:rounded-lg p-8 col-span-1 md:col-span-8 flex flex-col justify-between group hover:border-[#7c3aed]/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-500">
            {/* Corner Tech Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#7c3aed]/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#7c3aed]/50 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div>
              <h3 className="font-mono text-[10px] md:text-xs text-[#7c3aed] mb-6 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span>
                Module: Frontend_Architecture
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((item) => (
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    key={item.label}
                    className="px-3 py-1.5 border border-[#7c3aed]/20 bg-[#7c3aed]/[0.05] text-white/90 text-xs font-mono flex items-center gap-2 hover:bg-[#7c3aed]/20 transition-colors cursor-default shadow-[inset_0_0_10px_rgba(124,58,237,0)] hover:shadow-[inset_0_0_10px_rgba(124,58,237,0.2)] rounded-sm"
                  >
                    <span className={`material-symbols-outlined text-sm opacity-70`}>
                      {item.icon}
                    </span>
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>
            
            {/* Terminal Window */}
            <div className="mt-8 bg-black/60 border border-white/10 rounded overflow-hidden relative group-hover:border-[#7c3aed]/30 transition-colors duration-500">
              <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                <span className="text-[10px] font-mono text-white/30 ml-4">ui-renderer.ts</span>
              </div>
              <div className="p-4">
                <code className="text-xs md:text-sm font-mono text-white/70">
                  <span className="text-[#7c3aed]">const</span>{' '}
                  <span className="text-white">craftInterface</span> = (
                  <span className="text-[#00dddd]">data</span>: NodeData) =&gt; {'{'}<br />
                  &nbsp;&nbsp;<span className="text-[#7c3aed]">return</span> Engine.render(data);<br />
                  {'}'};
                </code>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="relative overflow-hidden bg-[#100d16]/80 backdrop-blur-xl border border-white/5 rounded-none md:rounded-lg p-8 col-span-1 md:col-span-4 flex flex-col justify-between group hover:border-[#7c3aed]/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#7c3aed]/5 blur-[30px] rounded-full group-hover:bg-[#7c3aed]/10 transition-colors"></div>
            <div>
              <h3 className="font-mono text-[10px] md:text-xs text-white/50 mb-6 tracking-[0.2em] uppercase flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">database</span>
                Data_Persistence
              </h3>
              <div className="flex flex-col gap-3">
                {dataLayer.map((item) => (
                  <motion.div
                    whileHover={{ x: 5 }}
                    key={item.label}
                    className="flex items-center gap-4 bg-white/[0.02] p-3 border border-white/5 cursor-default hover:border-[#7c3aed]/20 transition-colors rounded-sm"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-[#7c3aed]">
                      <span className="material-symbols-outlined text-[20px] drop-shadow-[0_0_8px_rgba(124,58,237,0.5)]">{item.icon}</span>
                    </div>
                    <span className="font-mono text-xs text-white/80">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Backend Modules */}
          <div className="relative overflow-hidden bg-[#100d16]/80 backdrop-blur-xl border border-white/5 rounded-none md:rounded-lg p-8 col-span-1 md:col-span-6 hover:border-[#7c3aed]/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-500 group">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
            
            <h3 className="font-mono text-[10px] md:text-xs text-[#00dddd] mb-6 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">router</span>
              Server_Logic
            </h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {[
                { icon: 'dns', color: 'text-[#00dddd]', label: 'Node.js Runtime' },
                { icon: 'api', color: 'text-[#7c3aed]', label: 'Express Protocol' },
              ].map((item) => (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  key={item.label}
                  className="bg-black/40 p-6 border border-white/10 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group/item hover:border-[#7c3aed]/30 transition-colors rounded-sm"
                >
                  <span className={`material-symbols-outlined text-3xl ${item.color} drop-shadow-[0_0_12px_currentColor] z-10 group-hover/item:scale-110 transition-transform`}>
                    {item.icon}
                  </span>
                  <span className="font-mono text-[10px] text-white/60 z-10 uppercase tracking-wider">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="relative overflow-hidden bg-[#100d16]/80 backdrop-blur-xl border border-white/5 rounded-none md:rounded-lg p-8 col-span-1 md:col-span-6 group hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500">
            <motion.div 
              animate={{ opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 pointer-events-none"
            >
              <span className="material-symbols-outlined text-[120px] text-red-500">verified_user</span>
            </motion.div>
            
            <h3 className="font-mono text-[10px] md:text-xs text-red-400 mb-6 tracking-[0.2em] uppercase flex items-center gap-2 relative z-10">
              <span className="material-symbols-outlined text-sm">lock</span>
              Security_Protocols
            </h3>
            <div className="flex flex-col gap-3 relative z-10">
              {securityItems.map((item, index) => (
                <motion.div 
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={item} 
                  className="flex items-center gap-3 p-3 bg-black/30 border border-white/5 cursor-default hover:border-red-500/20 transition-colors rounded-sm"
                >
                  <span className="material-symbols-outlined text-red-500/80 text-sm">enhanced_encryption</span>
                  <span className="text-white/70 font-mono text-[10px] uppercase tracking-wider">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
