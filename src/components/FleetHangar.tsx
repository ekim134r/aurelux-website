'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fleet = [
    {
        category: 'Light Jets',
        range: '1,500 - 2,200 nm',
        pax: '6-8 Passengers',
        speed: '400-450 kts',
        desc: 'Ideal for short regional hops. Efficient, fast, and capable of accessing smaller airports.',
        gate: 'GATE 01',
        image: '/images/light-jet.png'
    },
    {
        category: 'Midsize Jets',
        range: '2,500 - 3,500 nm',
        pax: '8-10 Passengers',
        speed: '450-480 kts',
        desc: 'The perfect balance of range and comfort. Stand-up cabins and coast-to-coast capability.',
        gate: 'GATE 02',
        image: '/images/midsize-jet.png'
    },
    {
        category: 'Heavy Jets',
        range: '4,500 - 6,500 nm',
        pax: '12-16 Passengers',
        speed: '480-500 kts',
        desc: 'Intercontinental range with uncompromising luxury. Full galleys, flight attendants, and beds.',
        gate: 'GATE 03',
        image: '/images/heavy-jet.png'
    },
    {
        category: 'VIP Airliners',
        range: '6,000+ nm',
        pax: '19-50 Passengers',
        speed: '500+ kts',
        desc: 'Flying palaces. Corporate shuttles or head-of-state transport configurations.',
        gate: 'GATE 04',
        image: '/images/vip-airliner.png'
    }
];

export default function FleetHangar() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {fleet.map((item, index) => (
                <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative min-h-[420px] rounded-lg overflow-hidden"
                >
                    {/* Background with gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian-light" />

                    {/* Aircraft silhouette image placeholder */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent z-10" />
                        <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{
                                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="%231A5A55" opacity="0.3" d="M50 20 L80 50 L70 52 L85 80 L50 65 L15 80 L30 52 L20 50 Z"/></svg>')`,
                            }}
                        />
                    </div>

                    {/* Glassmorphism card */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-stratosphere/30 transition-all duration-500 rounded-lg">
                        {/* Top glow line */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stratosphere/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Left accent line */}
                        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-stratosphere/50 via-stratosphere/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between z-10">
                        {/* Header */}
                        <div>
                            {/* Gate badge */}
                            <motion.div
                                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-stratosphere/10 border border-stratosphere/20"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                                <span className="text-[10px] tracking-[0.2em] font-mono text-stratosphere uppercase">
                                    {item.gate}
                                </span>
                            </motion.div>

                            {/* Category title */}
                            <h3 className="font-serif text-2xl text-titanium mb-2 group-hover:text-white transition-colors duration-300">
                                {item.category}
                            </h3>

                            {/* Animated underline */}
                            <div className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-stratosphere to-transparent transition-all duration-500" />
                        </div>

                        {/* Specs */}
                        <div className="space-y-4 mt-auto">
                            {/* Stats grid */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-[10px] uppercase tracking-wider text-silver/60">Range</span>
                                    <span className="text-sm text-titanium font-light">{item.range}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                    <span className="text-[10px] uppercase tracking-wider text-silver/60">Capacity</span>
                                    <span className="text-sm text-titanium font-light">{item.pax}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[10px] uppercase tracking-wider text-silver/60">Speed</span>
                                    <span className="text-sm text-titanium font-light">{item.speed}</span>
                                </div>
                            </div>

                            {/* Description - reveals on hover */}
                            <motion.p
                                className="text-sm text-silver/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                            >
                                {item.desc}
                            </motion.p>
                        </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-stratosphere/20 blur-[60px] rounded-full" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
