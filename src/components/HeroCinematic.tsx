'use client';

import { useEffect, useRef } from 'react';

interface HeroCinematicProps {
    onEnter?: () => void;
}

export default function HeroCinematic({ onEnter }: HeroCinematicProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Parallax effect on scroll
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollY = window.scrollY;
            const overlay = containerRef.current.querySelector('.cinematic-overlay') as HTMLElement;
            if (overlay) {
                overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background Placeholder - Abstract Motion */}
            <div className="absolute inset-0">
                {/* Gradient Layers to Simulate Cinematic Depth */}
                <div className="absolute inset-0 bg-obsidian" />

                {/* Animated Gradient Clouds */}
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: `
              radial-gradient(ellipse at 20% 50%, rgba(8, 37, 35, 0.5) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 30%, rgba(15, 20, 25, 0.8) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 80%, rgba(8, 37, 35, 0.3) 0%, transparent 60%)
            `,
                        animation: 'float 20s ease-in-out infinite',
                    }}
                />

                {/* Light Refraction Effect */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'linear-gradient(135deg, transparent 0%, rgba(240, 242, 245, 0.05) 50%, transparent 100%)',
                        animation: 'shimmer 8s ease-in-out infinite',
                    }}
                />

                {/* Dark Cinematic Overlay */}
                <div className="cinematic-overlay absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
            </div>

            {/* Content - Minimal */}
            <div className="relative z-10 text-center px-8">
                {/* Logo */}
                <div
                    className="mb-16 opacity-0"
                    style={{
                        animation: 'emerge 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: '0.5s',
                    }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl tracking-ultra text-titanium">
                        AURELUX
                    </h1>
                    <p className="text-xs tracking-ultra uppercase text-silver mt-4">
                        Group LLC
                    </p>
                </div>

                {/* Enter Button - Mysterious */}
                <button
                    onClick={onEnter}
                    className="group relative opacity-0"
                    style={{
                        animation: 'emerge 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: '1s',
                    }}
                >
                    {/* Outer Ring */}
                    <span
                        className="absolute inset-0 rounded-full border border-titanium-ghost transition-all duration-700 group-hover:scale-110 group-hover:border-stratosphere"
                        style={{ padding: '3rem' }}
                    />

                    {/* Inner Ring with Glow */}
                    <span
                        className="relative flex items-center justify-center w-28 h-28 rounded-full border border-titanium-subtle transition-all duration-500 group-hover:border-titanium group-hover:shadow-[0_0_60px_-15px_rgba(8,37,35,0.8)]"
                    >
                        <span className="text-xs tracking-ultra uppercase text-titanium transition-all duration-300 group-hover:tracking-widest">
                            Enter
                        </span>
                    </span>
                </button>
            </div>

            {/* Keyframes */}
            <style jsx>{`
        @keyframes emerge {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.05;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.1;
            transform: translateX(100%);
          }
        }
      `}</style>
        </section>
    );
}
