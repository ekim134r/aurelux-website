'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PrivateAviationPage() {
    return (
        <>
            <Navigation />

            {/* ===== EDITORIAL HERO ===== */}
            <section className="relative min-h-[85vh] md:min-h-screen flex items-center md:items-end overflow-hidden bg-obsidian">
                {/* Hero Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/private-aviation-hero.png"
                        alt="Private Jet at Dusk"
                        fill
                        className="object-cover object-center opacity-50"
                        priority
                    />
                    {/* Strong gradient overlays for text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="container-wide relative z-10 py-24 md:pb-24 md:pt-40 lg:pb-32">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-stratosphere/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-stratosphere mb-6 md:mb-8 bg-stratosphere/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                            Private Aviation
                        </span>

                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-titanium mb-6 md:mb-8 leading-[0.95]">
                            Command<br />
                            <span className="text-stratosphere">The Skies</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl text-silver/80 font-light max-w-xl leading-relaxed">
                            Access the world&apos;s most exclusive off-market aircraft. Every journey engineered with precision, privacy, and speed.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll indicator - hidden on mobile */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1 }}
                >
                    <div className="w-px h-16 bg-gradient-to-b from-titanium-ghost to-transparent" />
                </motion.div>
            </section>

            {/* ===== THE EXPERIENCE - Redesigned Cubes ===== */}
            <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-4">
                            The Experience
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-titanium">Why Private?</h2>
                    </motion.div>

                    {/* Interactive cards - 1 col mobile, 3 col desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            {
                                num: '01',
                                title: 'Absolute Privacy',
                                desc: 'Flight manifests and tail numbers shielded from public tracking. Discreet terminals and secure ground transport.',
                            },
                            {
                                num: '02',
                                title: 'Global Reach',
                                desc: 'Access to 5,000+ airports worldwide. Direct routing to your final destination, avoiding commercial hubs.',
                            },
                            {
                                num: '03',
                                title: 'Time Sovereignty',
                                desc: 'Depart on your schedule. Arrive minutes before takeoff. Reclaim hours lost to commercial inefficiency.',
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-stratosphere/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover glow - more subtle */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-stratosphere/10 blur-[50px] rounded-full" />
                                </div>

                                {/* Top accent line */}
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stratosphere/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    {/* Number badge - refined */}
                                    <span className="text-[10px] tracking-widest uppercase text-stratosphere/50 font-mono mb-4 block">{feature.num}</span>

                                    <h3 className="font-serif text-xl md:text-2xl text-titanium mb-3 group-hover:text-white transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-silver/50 font-light leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES - ELEGANT ALTERNATING ===== */}
            <section className="py-16 md:py-24 bg-obsidian-light relative overflow-hidden">
                {/* Accent glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[600px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

                <div className="container-narrow relative z-10">
                    {/* Service 01 */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-20 md:mb-32"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Image */}
                        <div className="order-1">
                            <div className="aspect-[16/10] md:aspect-[4/3] relative overflow-hidden rounded-lg group">
                                <Image
                                    src="/images/cockpit-night.png"
                                    alt="Cockpit at Night"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light via-transparent to-transparent opacity-50" />
                                {/* Corner accents */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-stratosphere/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-stratosphere/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="order-2">
                            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stratosphere mb-4">
                                <span className="w-6 h-px bg-stratosphere" />
                                01
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-titanium mb-4 md:mb-6">Off-Market Acquisition</h2>
                            <p className="text-silver/70 font-light leading-relaxed mb-6 md:mb-8">
                                True value lies in the unseen. Our acquisition team navigates the global off-market network to secure assets before they reach the public domain. We handle inspections, negotiations, and closing with absolute discretion.
                            </p>
                            <ul className="space-y-3 mb-8 md:mb-10">
                                {['Exclusive Inventory Access', 'Technical & Legal Vetting', 'Anonymous Negotiation', 'Global Pre-Purchase Inspection'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-silver/60">
                                        <span className="w-5 h-5 rounded-full bg-stratosphere/10 border border-stratosphere/30 flex items-center justify-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-stratosphere" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="magnetic-btn w-full md:w-fit">
                                Initiate Acquisition
                            </Link>
                        </div>
                    </motion.div>

                    {/* Service 02 */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Image - reversed order on desktop */}
                        <div className="order-1 lg:order-2">
                            <div className="aspect-[16/10] md:aspect-[4/3] relative overflow-hidden rounded-lg group">
                                <Image
                                    src="/images/jet-interior.png"
                                    alt="Luxury Cabin Interior"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-light via-transparent to-transparent opacity-50" />
                                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-stratosphere/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-stratosphere/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-stratosphere mb-4">
                                <span className="w-6 h-px bg-stratosphere" />
                                02
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-titanium mb-4 md:mb-6">Bespoke Charter</h2>
                            <p className="text-silver/70 font-light leading-relaxed mb-6 md:mb-8">
                                Seamless global mobility on demand. From heavy jets for transcontinental business to VIP airliners for large delegations. No membership fees—just direct, transparent access to the world&apos;s safest and most luxurious aircraft.
                            </p>
                            <Link href="/contact" className="magnetic-btn w-full md:w-fit">
                                Request Charter
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ===== FLEET OVERVIEW - Enhanced with images ===== */}
            <section className="py-16 md:py-24 bg-obsidian relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light/20 to-obsidian pointer-events-none" />

                <div className="container-narrow relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-4">
                            Fleet Categories
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium">The Fleet Matrix</h2>
                    </motion.div>

                    {/* Mobile: horizontal scroll, Desktop: grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                        {[
                            { name: 'Light', range: '2,200 nm', pax: '6-8', color: 'from-blue-500/20' },
                            { name: 'Midsize', range: '3,500 nm', pax: '8-10', color: 'from-cyan-500/20' },
                            { name: 'Super-Mid', range: '4,500 nm', pax: '9-12', color: 'from-teal-500/20' },
                            { name: 'Heavy', range: '6,500 nm', pax: '12-16', color: 'from-emerald-500/20' },
                            { name: 'Ultra-Long', range: '7,500+ nm', pax: '12-19', color: 'from-green-500/20' },
                            { name: 'VIP Airliner', range: 'Variable', pax: '19-50+', color: 'from-stratosphere/30' },
                        ].map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`group p-4 md:p-5 rounded-lg bg-gradient-to-b ${cat.color} to-transparent border border-white/10 hover:border-stratosphere/40 transition-all duration-500`}
                            >
                                {/* Airplane icon placeholder */}
                                <div className="w-10 h-10 mb-3 rounded-lg bg-white/5 flex items-center justify-center text-stratosphere/60 group-hover:text-stratosphere group-hover:bg-stratosphere/10 transition-all">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                    </svg>
                                </div>
                                <h4 className="font-serif text-sm md:text-base text-titanium mb-1 group-hover:text-stratosphere-bright transition-colors">{cat.name}</h4>
                                <p className="text-[10px] text-silver/50">{cat.range}</p>
                                <p className="text-[10px] text-silver/50">{cat.pax} PAX</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA - Dynamic ===== */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                {/* Animated background */}
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
                            Flight Operations
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium mb-4 md:mb-6">
                            Your Mission Awaits
                        </h2>
                        <p className="text-silver/60 font-light mb-8 md:mb-12 max-w-xl mx-auto">
                            From first inquiry to wheels up. Precision planning and seamless execution. Contact our flight operations center to begin.
                        </p>
                        <Link href="/contact" className="magnetic-btn">
                            Contact Operations
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
