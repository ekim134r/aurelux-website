'use client';

import Link from 'next/link';

interface ServiceCardProps {
    number: string;
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
}

export default function ServiceCard({
    number,
    title,
    description,
    ctaText,
    ctaHref
}: ServiceCardProps) {
    return (
        <article className="group relative">
            {/* Glass Card */}
            <div className="relative p-8 md:p-10 glass rounded-sm transition-all duration-700 hover:border-titanium-subtle">
                {/* Glow on Hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-sm"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(8, 37, 35, 0.2) 0%, transparent 70%)',
                    }}
                />

                {/* Number */}
                <span className="block font-serif text-5xl text-titanium-ghost mb-6 transition-colors duration-500 group-hover:text-stratosphere">
                    {number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-titanium mb-4">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-silver font-light leading-relaxed mb-8">
                    {description}
                </p>

                {/* CTA Link */}
                <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-3 text-xs tracking-ultra uppercase text-titanium-muted transition-all duration-300 group-hover:text-titanium"
                >
                    {ctaText}
                    <span className="relative w-8 h-px bg-titanium-subtle overflow-hidden">
                        <span
                            className="absolute inset-0 bg-titanium -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
                        />
                    </span>
                </Link>
            </div>
        </article>
    );
}
