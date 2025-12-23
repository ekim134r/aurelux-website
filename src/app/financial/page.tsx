'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FinancialPage() {
    return (
        <>
            <Navigation />

            {/* ===== ABSTRACT HERO - No Image ===== */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
                {/* Abstract background elements */}
                <div className="absolute inset-0">
                    {/* Large gradient orbs */}
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-stratosphere/10 rounded-full blur-[200px]" />
                    <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-stratosphere/5 rounded-full blur-[150px]" />

                    {/* Geometric lines */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
                        <div className="absolute top-0 right-1/3 w-px h-full bg-white" />
                        <div className="absolute top-1/3 left-0 w-full h-px bg-white" />
                        <div className="absolute bottom-1/4 left-0 w-full h-px bg-white" />
                    </div>

                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:100px_100px]" />
                </div>

                {/* Hero Content - Centered */}
                <div className="container-wide relative z-10 py-32">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-stratosphere/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-stratosphere mb-8 bg-stratosphere/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                            Capital Architecture
                        </span>

                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 leading-[0.95]">
                            The Margin<br />
                            <span className="text-stratosphere">Most Firms Miss</span>
                        </h1>

                        <p className="text-lg md:text-xl text-silver/70 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                            Sophisticated tax positioning and operational financial structures. We build the invisible framework that protects and amplifies wealth.
                        </p>

                        <Link href="/contact" className="magnetic-btn">
                            Start Assessment
                        </Link>
                    </motion.div>
                </div>

                {/* Animated accent ring */}
                <div className="absolute top-1/2 right-[10%] -translate-y-1/2 hidden lg:block pointer-events-none">
                    <motion.div
                        className="w-64 h-64 rounded-full border border-stratosphere/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-stratosphere rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* ===== SECTION 125 - Enhanced ===== */}
            <section className="py-16 md:py-24 lg:py-32 bg-obsidian-light relative overflow-hidden">
                {/* Accent glows */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stratosphere/5 blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-stratosphere/3 blur-[120px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stratosphere mb-4">
                                <span className="w-6 h-px bg-stratosphere" />
                                Core Strategy
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-titanium mb-6 leading-tight">
                                Section 125 Optimization
                            </h2>

                            <div className="space-y-4 text-silver/70 font-light leading-relaxed mb-8">
                                <p>
                                    Most U.S. businesses leave capital on the table through inefficient payroll tax structures. We introduce decision-makers to vetted providers that implement compliant Section 125 strategies.
                                </p>
                                <p>
                                    The result is a direct reduction in FICA liability and an immediate increase in employee take-home pay. Zero out-of-pocket cost. Zero disruption to existing benefits.
                                </p>
                            </div>

                            {/* Metrics - enhanced */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <motion.div
                                    className="p-5 md:p-6 rounded-lg border border-stratosphere/20 bg-gradient-to-br from-stratosphere/10 to-transparent"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="block font-serif text-3xl md:text-4xl text-stratosphere-bright mb-1">4-6%</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-silver/60">Take-Home Increase</span>
                                </motion.div>
                                <motion.div
                                    className="p-5 md:p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="block font-serif text-3xl md:text-4xl text-titanium mb-1">$0</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-wider text-silver/60">Implementation Cost</span>
                                </motion.div>
                            </div>

                            <Link href="/contact" className="magnetic-btn w-full md:w-fit">
                                Request Analysis
                            </Link>
                        </motion.div>

                        {/* Visual Card - Enhanced */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-stratosphere/10 blur-[80px] rounded-full" />
                                <div className="relative p-6 md:p-8 lg:p-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-sm overflow-hidden">
                                    {/* Top accent */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-stratosphere via-stratosphere-bright to-stratosphere" />

                                    <div className="border-b border-white/10 pb-5 mb-5">
                                        <span className="block text-xs uppercase text-stratosphere tracking-wider mb-1">Impact Analysis</span>
                                        <span className="font-serif text-xl md:text-2xl text-titanium">Immediate ROI</span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {['Reduced FICA Liability', 'Full Compliance Handling', 'Improved Employee Retention', 'Seamless Integration'].map((item, i) => (
                                            <motion.li
                                                key={item}
                                                className="flex items-center gap-3 text-sm text-silver/70"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                            >
                                                <span className="w-5 h-5 rounded-full bg-stratosphere/10 border border-stratosphere/30 flex items-center justify-center">
                                                    <svg className="w-3 h-3 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="pt-5 border-t border-white/10">
                                        <div className="text-center">
                                            <span className="block font-serif text-4xl md:text-5xl text-titanium mb-1">$4K+</span>
                                            <span className="text-[10px] md:text-xs text-silver/50 uppercase tracking-wide">Annual Savings Per Employee</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== FINANCIAL CONCIERGE - Enhanced ===== */}
            <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
                {/* Background depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/10 to-obsidian" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-stratosphere/5 blur-[180px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-4">
                            Bespoke Services
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium mb-4">Financial Concierge</h2>
                        <p className="text-silver/60 font-light max-w-xl mx-auto">
                            Targeted operational solutions for business owners who demand precision without surrendering control.
                        </p>
                    </motion.div>

                    {/* Service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            {
                                num: '01',
                                title: 'Card Infrastructure',
                                desc: 'Access to high-limit, vetted card processing infrastructure designed for scale. Bypass standard limits.',
                            },
                            {
                                num: '02',
                                title: 'Strategic Acquisition',
                                desc: 'Coordination support for M&A activity, ensuring capital efficiency and tax-advantaged structuring.',
                            },
                            {
                                num: '03',
                                title: 'Tax Positioning',
                                desc: 'Advanced structuring to minimize liability and maximize operational capital. Proactive defense strategies.',
                            },
                        ].map((service, i) => (
                            <motion.div
                                key={service.title}
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
                                    <span className="text-[10px] tracking-widest uppercase text-stratosphere/50 font-mono mb-4 block">{service.num}</span>

                                    <h3 className="font-serif text-xl md:text-2xl text-titanium mb-3 group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-silver/50 font-light leading-relaxed">
                                        {service.desc}
                                    </p>
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
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-6 md:mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                            Get Started
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium mb-4 md:mb-6">
                            Optimize Your Position
                        </h2>
                        <p className="text-silver/60 font-light mb-8 md:mb-12 max-w-xl mx-auto">
                            Begin with a confidential analysis of your current structure. Discover the margin you&apos;ve been missing.
                        </p>
                        <Link href="/contact" className="magnetic-btn">
                            Schedule Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
