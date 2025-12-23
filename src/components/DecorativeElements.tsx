'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Teal accent line with optional animation
 */
export function GoldLine({
    direction = 'horizontal',
    length = '100%',
    animated = false,
    className = ''
}: {
    direction?: 'horizontal' | 'vertical';
    length?: string;
    animated?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`bg-gradient-to-r from-transparent via-[#1A5A55]/60 to-transparent ${animated ? 'animate-shimmer' : ''} ${className}`}
            style={{
                width: direction === 'horizontal' ? length : '1px',
                height: direction === 'vertical' ? length : '1px',
            }}
        />
    );
}

/**
 * Geometric corner frame decoration
 */
export function GeometricFrame({
    position = 'top-left',
    size = 32,
    className = ''
}: {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    size?: number;
    className?: string;
}) {
    const borderClasses = {
        'top-left': 'border-l-2 border-t-2 top-0 left-0',
        'top-right': 'border-r-2 border-t-2 top-0 right-0',
        'bottom-left': 'border-l-2 border-b-2 bottom-0 left-0',
        'bottom-right': 'border-r-2 border-b-2 bottom-0 right-0',
    };

    return (
        <div
            className={`absolute border-[#1A5A55]/30 pointer-events-none ${borderClasses[position]} ${className}`}
            style={{ width: size, height: size }}
        />
    );
}

/**
 * Premium section divider with optional label
 */
export function SectionDivider({
    label,
    className = ''
}: {
    label?: string;
    className?: string;
}) {
    return (
        <div className={`flex items-center justify-center gap-6 py-8 ${className}`}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1A5A55]/20 to-[#1A5A55]/40" />
            {label && (
                <span className="text-[10px] tracking-[0.4em] uppercase text-[#1A5A55]/60 font-medium">
                    {label}
                </span>
            )}
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#1A5A55]/20 to-[#1A5A55]/40" />
        </div>
    );
}

/**
 * Animated gradient orb for ambient lighting
 */
export function GlowOrb({
    color = 'teal',
    size = 400,
    position = { top: '50%', left: '50%' },
    intensity = 0.1,
    className = ''
}: {
    color?: 'teal' | 'stratosphere' | 'white';
    size?: number;
    position?: { top?: string; left?: string; right?: string; bottom?: string };
    intensity?: number;
    className?: string;
}) {
    const colorMap = {
        teal: `rgba(26, 90, 85, ${intensity})`,
        stratosphere: `rgba(26, 90, 85, ${intensity})`,
        white: `rgba(255, 255, 255, ${intensity * 0.5})`,
    };

    return (
        <div
            className={`absolute rounded-full pointer-events-none blur-[100px] animate-pulse-slow ${className}`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, ${colorMap[color]} 0%, transparent 70%)`,
                ...position,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
}

/**
 * Floating particles background effect
 */
export function FloatingParticles({
    count = 20,
    className = ''
}: {
    count?: number;
    className?: string;
}) {
    // Use state to store particles to ensure they are consistent across renders
    const [particleData, setParticleData] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticleData([...Array(count)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: `${5 + Math.random() * 10}s`,
            delay: `${Math.random() * 5}s`,
        })));
    }, [count]);

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {particleData.map((p, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#1A5A55]/20 will-change-transform"
                    style={{
                        left: p.left,
                        top: p.top,
                        animation: `float ${p.duration} ease-in-out infinite`,
                        animationDelay: p.delay,
                    }}
                />
            ))}
        </div>
    );
}

/**
 * Animated diagonal lines pattern
 */
export function DiagonalLines({
    className = ''
}: {
    className?: string;
}) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none opacity-[0.03] ${className}`}
            style={{
                backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 50px,
                    #1A5A55 50px,
                    #1A5A55 51px
                )`,
            }}
        />
    );
}

/**
 * Premium bordered card wrapper
 */
export function PremiumCard({
    children,
    hover = true,
    glow = false,
    className = ''
}: {
    children: React.ReactNode;
    hover?: boolean;
    glow?: boolean;
    className?: string;
}) {
    return (
        <div
            className={`
                relative bg-[var(--surface-100)] border border-white/5 rounded-sm overflow-hidden
                ${hover ? 'transition-all duration-500 hover:border-[#1A5A55]/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]' : ''}
                ${glow ? 'shadow-[0_0_60px_-20px_rgba(26,90,85,0.15)]' : ''}
                ${className}
            `}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A5A55]/40 to-transparent" />
            {children}
        </div>
    );
}

/**
 * Scroll-triggered reveal animation wrapper
 */
export function RevealOnScroll({
    children,
    delay = 0,
    className = ''
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        // Optional: Stop observing once revealed if you only want it to happen once
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal-on-scroll ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

/**
 * Animated number counter
 */
export function AnimatedCounter({
    end,
    duration = 2000,
    prefix = '',
    suffix = '',
    className = ''
}: {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current && ref.current) {
                        hasAnimated.current = true;
                        let start = 0;
                        const step = end / (duration / 16);
                        const animate = () => {
                            start += step;
                            if (start < end) {
                                if (ref.current) ref.current.textContent = `${prefix}${Math.floor(start)}${suffix}`;
                                requestAnimationFrame(animate);
                            } else {
                                if (ref.current) ref.current.textContent = `${prefix}${end}${suffix}`;
                            }
                        };
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, prefix, suffix]);

    return <span ref={ref} className={`tabular-nums ${className}`}>{prefix}0{suffix}</span>;
}

/**
 * Icon wrapper with hover effect
 */
export function IconWrapper({
    children,
    size = 'md',
    className = ''
}: {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}) {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-20 h-20',
    };

    return (
        <div
            className={`
                ${sizeClasses[size]} 
                flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#1A5A55]/10 to-transparent
                border border-[#1A5A55]/20
                transition-all duration-300
                group-hover:border-[#1A5A55]/40 group-hover:shadow-[0_0_20px_rgba(26,90,85,0.2)]
                ${className}
            `}
        >
            {children}
        </div>
    );
}
