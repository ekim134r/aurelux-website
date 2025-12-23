'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OffMarketPage() {
    return (
        <>
            <Navigation />

            {/* ===== EDITORIAL HERO ===== */}
            <section className="relative min-h-[85vh] md:min-h-screen flex items-center md:items-end overflow-hidden bg-obsidian">
                {/* Hero Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/off-market-hero.png"
                        alt="Private Hangar"
                        fill
                        className="object-cover object-center opacity-40"
                        priority
                    />
                    {/* Gradient overlays - lighter for better image visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-transparent" />
                </div>

                {/* Ambient glow */}
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-stratosphere/10 blur-[150px] pointer-events-none" />

                {/* Hero Content */}
                <div className="container-wide relative z-10 py-24 md:pb-32 md:pt-40">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-stratosphere/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-stratosphere mb-6 md:mb-8 bg-stratosphere/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                            Restricted Access
                        </span>

                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-titanium mb-6 md:mb-8 leading-[0.95]">
                            The Unseen<br />
                            <span className="text-stratosphere">Market</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-silver/80 font-light max-w-xl leading-relaxed">
                            Direct introductions to private platforms connecting verified buyers and sellers. No public listings. No broker chains. Purely direct transaction channels.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1 }}
                >
                    <div className="w-px h-16 bg-gradient-to-b from-stratosphere to-transparent" />
                </motion.div>
            </section>

            {/* ===== ACQUISITION PROCESS - Premium Redesign ===== */}
            <section className="py-20 md:py-32 bg-obsidian-light relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian-light to-obsidian" />
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[700px] bg-stratosphere/8 blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-stratosphere/5 blur-[100px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-stratosphere mb-6">
                            <span className="w-8 h-px bg-gradient-to-r from-transparent to-stratosphere" />
                            Protocol
                            <span className="w-8 h-px bg-gradient-to-l from-transparent to-stratosphere" />
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                            Three Steps to Access
                        </h2>
                        <p className="text-silver/50 font-light text-lg max-w-md mx-auto">
                            A streamlined path to exclusive opportunities
                        </p>
                    </motion.div>

                    {/* Process Steps - Horizontal on desktop, vertical on mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                        {[
                            {
                                step: '01',
                                title: 'Submit Intent',
                                desc: 'Express interest in a specific asset category. All inquiries are vetted to ensure qualified alignment.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                )
                            },
                            {
                                step: '02',
                                title: 'Private Introduction',
                                desc: 'We connect you to the specific platform or counterparty. This is a closed-loop, confidential connection.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                )
                            },
                            {
                                step: '03',
                                title: 'Direct Transaction',
                                desc: 'We step back. The platform handles the transaction under their own terms. No intermediary noise.',
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                )
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                {/* Connecting line (desktop only) */}
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px">
                                        <motion.div
                                            className="h-full bg-gradient-to-r from-stratosphere/40 to-stratosphere/10"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                                            style={{ transformOrigin: 'left' }}
                                        />
                                    </div>
                                )}

                                {/* Card */}
                                <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent hover:border-stratosphere/40 transition-all duration-500 group-hover:transform group-hover:-translate-y-1">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-b from-stratosphere/10 to-transparent rounded-2xl" />
                                    </div>

                                    {/* Step indicator */}
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <motion.div
                                            className="w-20 h-20 rounded-full border-2 border-stratosphere/30 bg-obsidian flex items-center justify-center mb-6 group-hover:border-stratosphere/60 group-hover:shadow-[0_0_30px_rgba(26,90,85,0.3)] transition-all duration-500"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="text-stratosphere group-hover:text-white transition-colors">
                                                {item.icon}
                                            </div>
                                        </motion.div>

                                        <span className="text-[10px] font-mono tracking-widest text-stratosphere/60 mb-3">Step {item.step}</span>

                                        <h3 className="font-serif text-xl md:text-2xl text-white mb-3 group-hover:text-stratosphere-bright transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-silver/50 font-light leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ASSET CATEGORIES - Enhanced ===== */}
            <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
                {/* Background depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/10 to-obsidian" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-4">
                            Available Channels
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium">Protected Classes</h2>
                    </motion.div>

                    {/* Category cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            {
                                title: 'Aircraft',
                                desc: 'Corporate jets, helicopters, and commercial aircraft not listed on public marketplaces.',
                            },
                            {
                                title: 'Real Estate',
                                desc: 'Premium properties, commercial holdings, and land assets transacted privately.',
                            },
                            {
                                title: 'Collectibles',
                                desc: 'High-value art, timepieces, vehicles, and other tangible assets.',
                            },
                        ].map((cat, i) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-stratosphere/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover glow - subtle */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-stratosphere/10 blur-[50px] rounded-full" />
                                </div>

                                {/* Top accent */}
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stratosphere/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <span className="text-[10px] tracking-widest uppercase text-stratosphere/50 font-mono mb-4 block">0{i + 1}</span>

                                    <h3 className="font-serif text-xl md:text-2xl text-titanium mb-3 group-hover:text-white transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-sm text-silver/50 font-light leading-relaxed mb-6 line-clamp-3">
                                        {cat.desc}
                                    </p>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[10px] tracking-widest uppercase text-silver/60">Access Channel</span>
                                        <span className="text-stratosphere/60 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-stratosphere/10 blur-[180px] rounded-full animate-pulse-slow" />
                </div>

                <div className="container-narrow relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-titanium mb-4 md:mb-6">
                            Privacy is the ultimate luxury.
                        </h2>
                        <p className="text-silver/60 font-light mb-8 md:mb-12 max-w-lg mx-auto">
                            Access the unseen. Begin your private introduction today.
                        </p>
                        <Link href="/contact" className="magnetic-btn">
                            Request Private Access
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
