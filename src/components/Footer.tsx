import Link from 'next/link';

const footerLinks = {
    company: [
        { href: '/about', label: 'About' },
        { href: '/private-aviation', label: 'Private Aviation' },
        { href: '/financial', label: 'Financial Services' },
        { href: '/off-market', label: 'Off-Market' },
    ],
    legal: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms & Conditions' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-obsidian border-t border-titanium-ghost">
            {/* Ambient Glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] opacity-20 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(8, 37, 35, 0.5) 0%, transparent 70%)',
                }}
            />

            <div className="container-narrow relative">
                {/* Main Footer Content */}
                <div className="py-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <Link href="/" className="inline-block mb-6">
                            <span className="font-serif text-2xl tracking-ultra text-titanium">
                                AURELUX
                            </span>
                        </Link>
                        <p className="text-sm text-silver font-light tracking-wide mb-6 max-w-sm">
                            Privacy. Precision. No Circumvention.
                        </p>
                        <div className="space-y-2 text-sm text-silver">
                            <p>
                                <a
                                    href="mailto:sales@aureluxgroup.com"
                                    className="hover:text-titanium transition-colors duration-300"
                                >
                                    sales@aureluxgroup.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:+16814613153"
                                    className="hover:text-titanium transition-colors duration-300"
                                >
                                    +1 681 461 3153
                                </a>
                            </p>
                            <p className="text-silver/60">Sheridan, WY, USA</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs tracking-ultra uppercase text-titanium mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-silver hover:text-titanium transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs tracking-ultra uppercase text-titanium mb-6">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-silver hover:text-titanium transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs tracking-ultra uppercase text-titanium mb-6">
                            Connect
                        </h4>
                        <Link
                            href="/contact"
                            className="inline-block text-sm text-silver hover:text-titanium transition-colors duration-300"
                        >
                            Initiate Dialogue →
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="divider-metallic" />

                {/* Copyright */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-silver/60 tracking-wide">
                        © {new Date().getFullYear()} Aurelux Group LLC. All rights reserved.
                    </p>
                    <p className="text-xs text-silver/40 tracking-wide">
                        Where markets misprice.
                    </p>
                </div>
            </div>
        </footer>
    );
}
