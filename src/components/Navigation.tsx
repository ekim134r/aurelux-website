'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/private-aviation', label: 'Private Aviation' },
    { href: '/financial', label: 'Financial' },
    { href: '/off-market', label: 'Off-Market' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${scrolled
                    ? 'bg-[#0A0E14]/80 backdrop-blur-md py-3 md:py-4 border-[#1A5A55]/10 shadow-lg shadow-black/20'
                    : 'bg-transparent py-4 md:py-6 border-transparent'
                    }`}
            >
                <div className="container-wide flex items-center justify-between">
                    {/* Logo - Text on Mobile, Image on Desktop */}
                    <Link href="/" className="group relative flex items-center z-50">
                        {/* Mobile Logo Text */}
                        <div className="lg:hidden flex items-center gap-3">
                            <span className="font-serif text-base tracking-widest text-[#F0F2F5] drop-shadow-md">AURELUX GROUP LLC</span>
                        </div>

                        <Image
                            src="/images/logo-v2.png"
                            alt="Aurelux Group"
                            width={160}
                            height={160}
                            className="hidden lg:block h-8 w-auto transition-all duration-500 group-hover:opacity-100 opacity-90"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xs tracking-ultra uppercase transition-all duration-300 ${pathname === link.href
                                    ? 'text-titanium'
                                    : 'text-silver hover:text-[oklch(0.65_0.14_180)]'
                                    }`}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-2 left-0 right-0 h-px bg-stratosphere" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="magnetic-btn text-xs"
                        >
                            Initiate Dialogue
                        </Link>
                    </div>

                    {/* Premium SVG Hamburger Menu Toggle */}
                    <label
                        className="lg:hidden relative z-50 cursor-pointer w-12 h-12 flex items-center justify-center touch-manipulation"
                        aria-label="Toggle menu"
                    >
                        <input
                            type="checkbox"
                            checked={isOpen}
                            onChange={() => setIsOpen(!isOpen)}
                            className="sr-only"
                        />
                        <svg
                            viewBox="0 0 32 32"
                            className={`w-8 h-8 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? '-rotate-45' : ''}`}
                        >
                            {/* Top-bottom morphing path */}
                            <path
                                className={`
                                    fill-none stroke-current stroke-[2.5] stroke-round
                                    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                                    ${isOpen ? 'text-white' : 'text-titanium'}
                                `}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    strokeDasharray: isOpen ? '20 300' : '12 63',
                                    strokeDashoffset: isOpen ? -32.42 : 0,
                                }}
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                            />
                            {/* Middle line */}
                            <path
                                className={`
                                    fill-none stroke-current stroke-[2.5]
                                    transition-all duration-300
                                    ${isOpen ? 'text-white' : 'text-titanium'}
                                `}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    opacity: isOpen ? 0 : 1,
                                }}
                                d="M7 16 27 16"
                            />
                        </svg>
                    </label>
                </div>
            </header>

            {/* Mobile Menu Overlay with AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-[#05080C]/98 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--stratosphere-glow)_0%,_transparent_70%)] opacity-20 blur-[100px]" />
                            {/* Subtle grid pattern */}
                            <div className="absolute inset-0 opacity-[0.02]" style={{
                                backgroundImage: `linear-gradient(rgba(26,90,85,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(26,90,85,0.3) 1px, transparent 1px)`,
                                backgroundSize: '50px 50px'
                            }} />
                        </div>

                        {/* Menu Content Container */}
                        <div className="relative z-10 flex flex-col h-full overflow-y-auto pt-24 pb-8 px-6">

                            {/* Featured Mobile Logo */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mb-10 flex justify-center"
                            >
                                <div className="relative">
                                    <Image
                                        src="/images/logo-mobile-menu.png"
                                        alt="Aurelux Group"
                                        width={180}
                                        height={180}
                                        className="w-28 h-auto opacity-90 drop-shadow-[0_0_25px_rgba(26,90,85,0.3)]"
                                    />
                                    <div className="absolute inset-0 bg-stratosphere/20 blur-2xl -z-10 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Links - Compact and refined */}
                            <nav className="flex flex-col items-center gap-4 mb-auto">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.25 + (index * 0.08), duration: 0.5, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`
                                                relative font-serif text-2xl tracking-wide py-2 px-4 rounded-lg
                                                transition-all duration-300 
                                                ${pathname === link.href
                                                    ? 'text-stratosphere bg-stratosphere/10'
                                                    : 'text-[#D8DCE2] hover:text-white hover:bg-white/5'
                                                }
                                            `}
                                        >
                                            {link.label}
                                            {pathname === link.href && (
                                                <motion.span
                                                    layoutId="activeIndicator"
                                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-stratosphere rounded-full"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Quick Actions Footer */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="mt-8 flex flex-col gap-4 items-center w-full"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="magnetic-btn w-full max-w-xs text-center justify-center"
                                >
                                    Initiate Dialogue
                                </Link>

                                <div className="flex gap-6 text-xs tracking-ultra uppercase text-silver/50 pt-4 border-t border-white/5 w-full justify-center">
                                    <a
                                        href="tel:+16814613153"
                                        className="flex items-center gap-2 hover:text-stratosphere transition-colors py-2 px-3"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Call
                                    </a>
                                    <a
                                        href="mailto:sales@aureluxgroup.com"
                                        className="flex items-center gap-2 hover:text-stratosphere transition-colors py-2 px-3"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        Email
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
