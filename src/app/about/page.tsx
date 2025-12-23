'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
    {
        title: 'Privacy',
        description: 'Every engagement is handled with complete confidentiality. No public listings, no broker chains, no data exposure.',
    },
    {
        title: 'Precision',
        description: 'We focus on specific requests, not generic solutions. Every search begins with exact requirements.',
    },
    {
        title: 'No Circumvention',
        description: 'Direct connections between qualified parties. We introduce, then step back.',
    },
];

export default function AboutPage() {
    return (
        <>
            <Navigation />

            {/* Hero - Invisible Architecture */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-obsidian">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                    {/* Architectural Grid lines */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#F0F2F5_1px,transparent_1px),linear-gradient(to_bottom,#F0F2F5_1px,transparent_1px)] bg-[size:6rem_6rem]" />
                </div>

                {/* Stratosphere accent glows */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-stratosphere/10 blur-[180px] rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-stratosphere/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="container-narrow relative z-10 text-center pt-20">
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-stratosphere/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-stratosphere mb-6 bg-stratosphere/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                            Our Manifesto
                        </span>
                    </motion.div>

                    <motion.h1
                        className="font-serif text-4xl md:text-6xl lg:text-8xl text-titanium mb-12 tracking-tight leading-[0.9] text-balance"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        The <span className="text-stratosphere">Invisible</span> <br />
                        Architecture.
                    </motion.h1>

                    <div className="max-w-xl mx-auto space-y-6 text-lg md:text-xl text-silver/80 font-light leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            We operate in the spaces between traditional markets.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            Where value is obscured by complexity, and access is restricted by design.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Mission - Editorial Style */}
            <section className="py-16 md:py-24 bg-obsidian border-t border-stratosphere/10 relative overflow-hidden">
                {/* Accent glow */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                        <motion.div
                            className="lg:w-1/3 lg:sticky lg:top-32"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="font-serif text-3xl md:text-4xl text-titanium mb-2">Our Mission</h2>
                            <div className="h-1 w-12 bg-stratosphere mb-8" />
                            <p className="text-sm tracking-widest uppercase text-silver/50">
                                Est. 2025 • Global Operations
                            </p>
                        </motion.div>

                        <div className="lg:w-2/3 space-y-12 md:space-y-16">
                            <motion.div
                                className="relative group p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-r from-stratosphere/5 to-transparent hover:border-stratosphere/30 transition-all duration-500"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-stratosphere via-stratosphere/50 to-transparent rounded-full" />
                                <h3 className="font-serif text-xl md:text-2xl text-titanium mb-4">Brokering the Unseen</h3>
                                <p className="text-base md:text-lg text-silver/70 font-light leading-relaxed">
                                    Aurelux Group brokers what is not openly sold: aircraft that are not listed, tax strategies few understand, and financial advantages most overlook. We engage only when there is a clear imperative for discretion.
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative group p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-r from-stratosphere/5 to-transparent hover:border-stratosphere/30 transition-all duration-500"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-stratosphere via-stratosphere/50 to-transparent rounded-full" />
                                <h3 className="font-serif text-xl md:text-2xl text-titanium mb-4">Niche Precision</h3>
                                <p className="text-base md:text-lg text-silver/70 font-light leading-relaxed">
                                    We operate where markets misprice, in niches that are too narrow for mass firms. Our role is singular: to facilitate access, make the critical introduction, and ensure the structure holds.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles Grid - With Color */}
            <section className="py-16 md:py-24 bg-obsidian-light relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-stratosphere/10 blur-[180px] rounded-full pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-4">
                            Core Values
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-titanium">What We Stand For</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-stratosphere/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover glow - subtle */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-stratosphere/10 blur-[50px] rounded-full" />
                                </div>

                                {/* Top accent */}
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stratosphere/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <span className="text-[10px] tracking-widest uppercase text-stratosphere/50 font-mono mb-4 block">0{index + 1}</span>

                                    <h3 className="font-serif text-xl md:text-2xl text-titanium mb-3 group-hover:text-white transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-silver/50 font-light leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light/20 via-obsidian to-obsidian" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="flex flex-col md:flex-row justify-between items-center border border-stratosphere/10 rounded-xl p-8 md:p-12 gap-8 bg-gradient-to-r from-stratosphere/5 to-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center md:text-left">
                            <h2 className="font-serif text-2xl md:text-3xl text-titanium mb-2">Aurelux Group</h2>
                            <p className="text-xs uppercase tracking-widest text-stratosphere">Sheridan, Wyoming</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-sm text-silver font-light">
                            <a href="mailto:sales@aureluxgroup.com" className="group flex items-center gap-3 hover:text-white transition-colors">
                                <span className="w-10 h-10 rounded-full border border-stratosphere/30 bg-stratosphere/10 flex items-center justify-center text-stratosphere group-hover:bg-stratosphere/20 transition-colors">@</span>
                                <span>sales@aureluxgroup.com</span>
                            </a>
                            <a href="tel:+16814613153" className="group flex items-center gap-3 hover:text-white transition-colors">
                                <span className="w-10 h-10 rounded-full border border-stratosphere/30 bg-stratosphere/10 flex items-center justify-center text-stratosphere group-hover:bg-stratosphere/20 transition-colors">#</span>
                                <span>+1 681 461 3153</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Minimal CTA */}
            <section className="py-20 md:py-24 bg-obsidian text-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-stratosphere/10 blur-[180px] rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <Link href="/contact" className="magnetic-btn">
                        Initiate Dialogue
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}
