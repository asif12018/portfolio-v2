'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ children }: { children: React.ReactNode }) {
  const [sequence, setSequence] = useState<number>(-1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setSequence(4);
      return;
    }

    setSequence(0);

    // Force buffering by playing and immediately pausing the video on mount
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // 2x video speed
      videoRef.current.play().then(() => {
        if (sequence < 3 && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }).catch(() => {});
    }

    // Timings are 1.5x faster
    const t1 = setTimeout(() => setSequence(1), 2600); // was 4000
    const t2 = setTimeout(() => setSequence(2), 4600); // was 7000
    const t3 = setTimeout(() => {
      setSequence(3);
      if (videoRef.current) {
        videoRef.current.playbackRate = 2.0;
        videoRef.current.play().catch(e => console.warn("Auto-play failed:", e));
      }
    }, 6000); // was 9000

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const finishIntro = () => {
    setSequence(4);
    localStorage.setItem('hasSeenIntro', 'true');
  };

  if (sequence === -1) return null;

  return (
    <>
      <AnimatePresence>
        {/* HUD Text Sequence Phase */}
        {sequence < 3 && (
          <motion.div
            key="hud"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center pointer-events-auto overflow-hidden"
          >
            {/* Moving Starfield */}
            <motion.div 
              animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 z-0 opacity-20"
              style={{ 
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px), radial-gradient(circle, #0ff 1px, transparent 1px)', 
                backgroundSize: '100px 100px, 150px 150px',
                backgroundPosition: '0 0, 50px 50px'
              }}
            />

            {/* HUD Crosshairs */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-500/20 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-cyan-500/20 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>

            {/* HUD Corners */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse"></div>
              <span className="font-mono text-cyan-400 text-xs tracking-widest drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">MISSION_EXPLORATION_01</span>
            </div>
            
            <div className="absolute top-6 right-6 font-mono text-cyan-400 text-xs tracking-widest drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]">
              STATUS: NOMINAL [ACTIVE]
            </div>

            <div className="absolute bottom-6 left-6 font-mono text-cyan-500/50 text-[10px] tracking-widest">
              SYS_COORD: {Math.random().toFixed(4)} : {Math.random().toFixed(4)}
            </div>

            {/* Central Animated Text */}
            <AnimatePresence mode="wait">
              {sequence === 0 && (
                <motion.h1
                  key="seq0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 1 }}
                  className="font-mono text-white text-xl md:text-3xl tracking-[0.4em] font-bold z-10 text-center"
                >
                  WELCOME, ASTRONAUT.
                </motion.h1>
              )}
              {sequence === 1 && (
                <motion.h1
                  key="seq1"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 1 }}
                  className="font-mono text-white text-xl md:text-3xl tracking-[0.4em] font-bold z-10 text-center"
                >
                  LET&apos;S EXPLORE THIS PLANET.
                </motion.h1>
              )}
              {sequence === 2 && (
                <motion.h1
                  key="seq2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 1 }}
                  className="font-mono text-white text-xl md:text-3xl tracking-[0.4em] font-bold z-10 text-center"
                >
                  HOP ON TO THIS ROCKET.
                </motion.h1>
              )}
            </AnimatePresence>

            <button 
              onClick={finishIntro}
              className="absolute bottom-10 right-10 border border-white/20 bg-black/40 backdrop-blur-md px-6 py-2 text-white/70 hover:text-white hover:border-cyan-500/50 text-xs font-mono tracking-widest uppercase z-20 transition-all rounded"
            >
              Skip Sequence
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {/* Video Phase (Loaded beneath the HUD to prevent hanging) */}
        {sequence < 4 && (
          <motion.div
            key="video"
            exit={{ opacity: 0, filter: 'blur(20px)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9998] bg-black flex items-center justify-center pointer-events-auto"
          >
            <video
              ref={videoRef}
              src="/intro.mp4"
              muted
              playsInline
              preload="auto"
              onEnded={finishIntro}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                console.warn("Intro video not found. Skipping video phase.");
                if (sequence >= 3) finishIntro();
              }}
            />
            {sequence === 3 && (
              <button 
                onClick={finishIntro}
                className="absolute bottom-10 right-10 border border-white/20 bg-black/40 backdrop-blur-md px-6 py-2 text-white/70 hover:text-white hover:border-cyan-500/50 text-xs font-mono tracking-widest uppercase z-20 transition-all rounded"
              >
                Skip Video
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Underlying Website */}
      <div className={sequence < 4 ? 'h-screen overflow-hidden fixed inset-0' : ''}>
        {children}
      </div>
    </>
  );
}
