'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Phase = 'hud0' | 'hud1' | 'hud2' | 'video' | 'done';

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (localStorage.getItem('hasSeenIntro')) {
      setPhase('done');
      window.dispatchEvent(new CustomEvent('intro:complete'));
      return;
    }

    setPhase('hud0');
    const t1 = setTimeout(() => setPhase('hud1'), 2600);
    const t2 = setTimeout(() => setPhase('hud2'), 4600);
    const t3 = setTimeout(() => setPhase('video'), 6000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Play video once it's in the video phase — set rate AFTER play starts
  useEffect(() => {
    const video = videoRef.current;
    if (phase !== 'video' || !video) return;

    const onCanPlay = () => {
      video.play()
        .then(() => { video.playbackRate = 2.0; })
        .catch(console.error);
    };

    if (video.readyState >= 3) {
      // Already ready
      video.play()
        .then(() => { video.playbackRate = 2.0; })
        .catch(console.error);
    } else {
      video.addEventListener('canplay', onCanPlay, { once: true });
    }

    return () => video.removeEventListener('canplay', onCanPlay);
  }, [phase]);

  const skip = () => {
    if (videoRef.current) videoRef.current.pause();
    setPhase('done');
    localStorage.setItem('hasSeenIntro', 'true');
    window.dispatchEvent(new CustomEvent('intro:complete'));
  };

  if (phase === null || phase === 'done') {
    return <>{children}</>;
  }

  const hudMessages: Record<string, string> = {
    hud0: 'WELCOME, ASTRONAUT.',
    hud1: "LET'S EXPLORE THIS PLANET.",
    hud2: 'HOP ON TO THIS ROCKET.',
  };

  return (
    <>
      {/* Children always rendered underneath */}
      <div className="fixed inset-0 -z-10">{children}</div>

      {/* Single video — always in DOM during intro so it buffers */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        muted
        playsInline
        preload="auto"
        onEnded={skip}
        onError={skip}
        className={`fixed inset-0 w-full h-full object-cover z-[9998] ${phase === 'video' ? 'block' : 'hidden'}`}
      />

      {/* HUD overlay */}
      <AnimatePresence>
        {phase !== 'video' && (
          <motion.div
            key="hud"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
          >
            {/* Stars */}
            <motion.div
              animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
              transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #fff 1px, transparent 1px), radial-gradient(circle, #0ff 1px, transparent 1px)',
                backgroundSize: '100px 100px, 150px 150px',
              }}
            />
            {/* Crosshairs */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-500/20" />
            <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-500/20" />
            {/* HUD labels */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse rounded-full" />
              <span className="font-mono text-cyan-400 text-xs tracking-widest">MISSION_EXPLORATION_01</span>
            </div>
            <div className="absolute top-6 right-6 font-mono text-cyan-400 text-xs tracking-widest">
              STATUS: NOMINAL [ACTIVE]
            </div>
            {/* Message */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={phase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-white text-xl md:text-3xl tracking-[0.4em] font-bold z-10 text-center px-4"
              >
                {hudMessages[phase]}
              </motion.h1>
            </AnimatePresence>
            <button
              onClick={skip}
              className="absolute bottom-10 right-10 border border-white/20 bg-black/40 px-6 py-2 text-white/70 hover:text-cyan-400 hover:border-cyan-500/50 text-xs font-mono tracking-widest uppercase transition-all rounded"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip button during video */}
      {phase === 'video' && (
        <button
          onClick={skip}
          className="fixed bottom-10 right-10 z-[9999] border border-white/20 bg-black/40 px-6 py-2 text-white/70 hover:text-white text-xs font-mono tracking-widest uppercase transition-all rounded"
        >
          Skip Video
        </button>
      )}
    </>
  );
}
