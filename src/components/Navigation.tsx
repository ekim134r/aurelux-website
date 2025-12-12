'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${scrolled ? 'glass-dark py-4' : 'py-6'
                    }`}
            >
                <div className="container-wide flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group relative">
                        <span className="font-serif text-xl tracking-ultra text-titanium transition-all duration-500 group-hover:text-titanium-muted">
                            AURELUX
                        </span>
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-stratosphere transition-all duration-500 group-hover:w-full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xs tracking-ultra uppercase transition-all duration-300 ${pathname === link.href
                                        ? 'text-titanium'
                                        : 'text-silver hover:text-titanium'
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
                    <Link
                        href="/contact"
                        className="hidden lg:block magnetic-btn text-xs"
                    >
                        Initiate Dialogue
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-4">
                            <span
                                className={`absolute left-0 h-px w-full bg-titanium transition-all duration-500 ease-out ${isOpen ? 'top-1/2 rotate-45' : 'top-0'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-1/2 h-px w-full bg-titanium transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                                    }`}
                            />
                            <span
                                className={`absolute left-0 h-px w-full bg-titanium transition-all duration-500 ease-out ${isOpen ? 'top-1/2 -rotate-45' : 'bottom-0 top-auto'
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-700 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-obsidian/95 backdrop-blur-xl"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu Content */}
                <nav className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-serif tracking-ultra uppercase transition-all duration-500 ${pathname === link.href ? 'text-titanium' : 'text-silver hover:text-titanium'
                                }`}
                            style={{
                                transitionDelay: isOpen ? `${index * 100}ms` : '0ms',
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="magnetic-btn mt-8"
                        style={{
                            transitionDelay: isOpen ? '600ms' : '0ms',
                            opacity: isOpen ? 1 : 0,
                        }}
                    >
                        Initiate Dialogue
                    </Link>
                </nav>
            </div>
        </>
    );
}
