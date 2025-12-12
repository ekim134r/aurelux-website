'use client';

import { useEffect, useRef } from 'react';

interface HeroEditorialProps {
    onEnter?: () => void;
}

export default function HeroEditorial({ onEnter }: HeroEditorialProps) {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        // Animate headline letters on mount
        const headline = headlineRef.current;
        if (!headline) return;

        const text = headline.textContent || '';
        headline.innerHTML = '';

        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
        display: inline-block;
        opacity: 0;
        transform: translateY(100%);
        animation: reveal-letter 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        animation-delay: ${0.5 + i * 0.04}s;
      `;
            headline.appendChild(span);
        });

        // Add keyframes dynamically
        const style = document.createElement('style');
        style.textContent = `
      @keyframes reveal-letter {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Deep Obsidian Background with Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />

            {/* Ambient Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(8, 37, 35, 0.4) 0%, transparent 70%)',
                }}
            />

            {/* Content */}
            <div className="relative z-10 container-narrow text-center">
                {/* Pre-headline */}
                <p
                    className="text-xs tracking-ultra uppercase text-silver mb-8 opacity-0"
                    style={{
                        animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: '0.2s',
                    }}
                >
                    Aurelux Group LLC
                </p>

                {/* Main Headline - Kinetic Typography */}
                <h1
                    ref={headlineRef}
                    className="font-serif text-titanium gradient-text glow-text mb-8"
                    style={{
                        fontSize: 'clamp(2.5rem, 10vw, 6rem)',
                        lineHeight: 1.1,
                    }}
                >
                    ACCESS THE INVISIBLE
                </h1>

                {/* Subheadline */}
                <p
                    className="max-w-2xl mx-auto text-lg text-silver font-light tracking-wide mb-12 opacity-0"
                    style={{
                        animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: '1.5s',
                    }}
                >
                    Aircraft that are not listed. Tax strategies few understand.
                    Financial advantages most overlook.
                </p>

                {/* CTA */}
                <div
                    className="opacity-0"
                    style={{
                        animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                        animationDelay: '1.8s',
                    }}
                >
                    <button
                        onClick={onEnter}
                        className="magnetic-btn"
                    >
                        Request Access
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0"
                style={{
                    animation: 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                    animationDelay: '2.5s',
                }}
            >
                <span className="text-xs tracking-ultra uppercase text-silver">Discover</span>
                <div className="w-px h-12 bg-gradient-to-b from-titanium-subtle to-transparent" />
            </div>

            {/* Keyframes */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
}
