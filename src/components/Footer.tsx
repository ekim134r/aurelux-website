'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
    company: [
        { href: '/about', label: 'About Us' },
        { href: '/private-aviation', label: 'Private Aviation' },
        { href: '/financial', label: 'Section 125 Enhancement' },
        { href: '/off-market', label: 'Off-Market Acquisitions' },
    ],
    legal: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Use' },
        { href: '/compliance', label: 'Compliance Statement' },
        { href: '/cookies', label: 'Cookie Policy' },
    ],
};

const socialLinks = [
    { href: 'https://www.linkedin.com/company/aurelux-group/', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://www.instagram.com/aureluxgroup/', label: 'Instagram', icon: 'instagram' },
];

export default function Footer() {
    return (
        <footer className="relative bg-obsidian overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-obsidian" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stratosphere/40 to-transparent" />

            {/* Animated ambient orbs */}
            <motion.div
                className="absolute top-20 left-[20%] w-[400px] h-[200px] bg-stratosphere/8 blur-[120px] pointer-events-none"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-[15%] w-[300px] h-[150px] bg-stratosphere/5 blur-[100px] pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="container-narrow relative z-10">
                {/* Main Footer Content */}
                <div className="py-20 md:py-24">
                    {/* Top Section - Brand & Contact */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                        {/* Brand Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/" className="inline-block mb-8 group">
                                <Image
                                    src="/images/logo-v2.png"
                                    alt="Aurelux Group"
                                    width={180}
                                    height={180}
                                    className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(26,90,85,0.3)]"
                                />
                            </Link>
                            <p className="text-xl font-serif text-white/80 mb-4 max-w-md">
                                Privacy. Precision.<br />
                                <span className="text-stratosphere">No Circumvention.</span>
                            </p>
                            <p className="text-sm text-silver/70 font-light max-w-sm leading-relaxed">
                                Connecting discerning clients with exclusive opportunities through trusted, confidential channels.
                            </p>
                        </motion.div>

                        {/* Contact Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:text-right"
                        >
                            <span className="text-xs tracking-[0.3em] uppercase text-stratosphere mb-6 lg:flex lg:items-center lg:justify-end gap-2 block">
                                <span className="hidden lg:block w-8 h-px bg-gradient-to-r from-transparent to-stratosphere" />
                                Get In Touch
                            </span>
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:sales@aureluxgroup.com"
                                    className="group flex items-center lg:justify-end gap-3 text-white hover:text-stratosphere-bright transition-colors duration-300"
                                    whileHover={{ x: -5 }}
                                >
                                    <span className="text-lg tracking-wide">sales@aureluxgroup.com</span>
                                    <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-stratosphere group-hover:bg-stratosphere/10 transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                </motion.a>
                                <motion.a
                                    href="tel:+16814613153"
                                    className="group flex items-center lg:justify-end gap-3 text-white hover:text-stratosphere-bright transition-colors duration-300"
                                    whileHover={{ x: -5 }}
                                >
                                    <span className="text-lg tracking-wide">+1 681 461 3153</span>
                                    <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-stratosphere group-hover:bg-stratosphere/10 transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                </motion.a>
                                <p className="text-silver/60 text-sm lg:pr-[52px]">Sheridan, Wyoming, USA</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

                    {/* Bottom Section - Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Navigation Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-xs tracking-[0.2em] uppercase text-titanium mb-5 flex items-center gap-2">
                                <span className="w-3 h-px bg-stratosphere/60" />
                                Services
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group text-sm text-silver/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-stratosphere transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Legal Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-xs tracking-[0.2em] uppercase text-titanium mb-5 flex items-center gap-2">
                                <span className="w-3 h-px bg-stratosphere/60" />
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="group text-sm text-silver/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-stratosphere transition-all duration-300" />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Empty spacer for alignment */}
                        <div className="hidden md:block" />

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="col-span-2 md:col-span-1"
                        >
                            <h4 className="text-xs tracking-[0.2em] uppercase text-titanium mb-5 flex items-center gap-2">
                                <span className="w-3 h-px bg-stratosphere/60" />
                                Ready?
                            </h4>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-stratosphere/30 hover:border-stratosphere hover:bg-stratosphere/10 transition-all duration-300"
                            >
                                <span className="text-sm text-white">Start Conversation</span>
                                <motion.span
                                    className="text-stratosphere"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Final Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                {/* Copyright */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-silver/60 tracking-wide">
                        © {new Date().getFullYear()} Aurelux Group LLC. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/company/aurelux-group/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-silver/60 hover:text-stratosphere transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/aureluxgroup/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-silver/60 hover:text-stratosphere transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-xs text-silver/50 tracking-wide font-serif italic">
                        Privacy. Precision. Zero Circumvention.
                    </p>
                </div>
            </div>
        </footer>
    );
}
