'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Define it',
        description: 'You provide your route, travel date, time, passenger count, and any relevant trip details.',
        details: ['Route', 'Date & Time', 'Passengers'],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
    {
        number: '02',
        title: 'Select it',
        description: 'We present aircraft that are actually available and correctly positioned with vetted operators.',
        details: ['Vetted operators', 'Correct positioning', 'Real availability'],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    },
    {
        number: '03',
        title: 'Confirm it',
        description: 'Once you choose the aircraft, we secure availability, lock the schedule, and coordinate directly with dispatch and crew.',
        details: ['Secured availability', 'Locked schedule', 'Direct coordination'],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        number: '04',
        title: 'Fly it',
        description: 'Your flight is monitored from start to finish. Ground arrangements, communication, and operational support are handled so your travel remains seamless.',
        details: ['Flight monitoring', 'Ground support', 'Seamless travel'],
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        )
    }
];

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative py-12 md:py-20 px-4 md:px-0">
            {/* Vertical Center Line Container */}
            <div className="absolute left-6 md:left-1/2 top-12 md:top-20 bottom-12 md:bottom-20 w-px bg-white/10 md:-translate-x-1/2">
                {/* Active Glowing Line */}
                <motion.div
                    style={{ height: lineHeight }}
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-stratosphere via-stratosphere-bright to-stratosphere"
                >
                    {/* Glow effect */}
                    <div className="absolute inset-0 blur-sm bg-stratosphere" />
                </motion.div>
            </div>

            <div className="relative max-w-5xl mx-auto space-y-16 md:space-y-24">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-0`}
                        >
                            {/* Text Content */}
                            <div className={`flex-1 md:w-1/2 ${isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'} pl-16 md:pl-0`}>
                                <div className="space-y-4">
                                    {/* Large step number */}
                                    <span className="font-serif text-5xl md:text-6xl text-stratosphere/20 font-bold block">
                                        {step.number}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-serif text-titanium">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-silver/70 font-light leading-relaxed max-w-md">
                                        {step.description}
                                    </p>

                                    {/* Detail tags */}
                                    <div className={`flex flex-wrap gap-2 pt-2 ${isEven ? '' : 'md:justify-end'}`}>
                                        {step.details.map((detail, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-stratosphere/10 text-stratosphere border border-stratosphere/20"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-stratosphere" />
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Center Node (Icon) */}
                            <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 flex flex-col items-center justify-center">
                                <motion.div
                                    className="relative w-12 h-12 rounded-full bg-obsidian border-2 border-stratosphere/40 flex items-center justify-center z-10"
                                    whileInView={{
                                        boxShadow: [
                                            "0 0 0 0 rgba(26, 90, 85, 0)",
                                            "0 0 20px 4px rgba(26, 90, 85, 0.3)",
                                            "0 0 0 0 rgba(26, 90, 85, 0)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                >
                                    <div className="text-stratosphere-bright">
                                        {step.icon}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="flex-1 md:w-1/2 hidden md:block" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
