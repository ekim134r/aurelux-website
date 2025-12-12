import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Aurelux Group',
    description: 'Aurelux Group operates where markets misprice. In niches too narrow and deals too complex for mass firms.',
};

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

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 30%, rgba(8, 37, 35, 0.5) 0%, transparent 50%)',
                    }}
                />

                <div className="container-narrow relative z-10 text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6 emerge-from-shadow">
                        About Aurelux
                    </p>
                    <h1 className="font-serif text-titanium mb-8 gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                        Where Markets Misprice
                    </h1>
                    <p className="text-lg text-silver font-light max-w-2xl mx-auto">
                        We operate in niches too narrow and deals too complex for mass firms.
                        Brokering what is not openly sold.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                                Our Mission
                            </p>
                            <h2 className="font-serif text-titanium mb-6">
                                The Invisible Architecture
                            </h2>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                Aurelux Group brokers what is not openly sold: aircraft that are not listed,
                                tax strategies few understand, and financial advantages most overlook.
                            </p>
                            <p className="text-silver font-light leading-relaxed">
                                We operate where markets misprice, in niches that are too narrow and deals
                                that are too complex for mass firms. Our role is to facilitate access,
                                make introductions, and step back.
                            </p>
                        </div>

                        {/* Visual */}
                        <div className="relative">
                            <div className="glass p-12 rounded-sm">
                                <blockquote className="font-serif text-2xl text-titanium leading-relaxed text-center">
                                    "Privacy. Precision. No Circumvention."
                                </blockquote>
                            </div>
                            <div
                                className="absolute inset-0 -z-10 opacity-30"
                                style={{
                                    background: 'radial-gradient(circle, rgba(8, 37, 35, 0.5) 0%, transparent 70%)',
                                    transform: 'scale(1.3)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-tight bg-obsidian-light">
                <div className="container-narrow">
                    <div className="text-center mb-16">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            Core Principles
                        </p>
                        <h2 className="font-serif text-titanium">
                            What We Stand For
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="text-center p-8"
                            >
                                <h3 className="font-serif text-2xl text-titanium mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-silver font-light">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            Company
                        </p>
                        <h2 className="font-serif text-titanium mb-8">
                            Aurelux Group LLC
                        </h2>
                        <div className="glass p-10 rounded-sm space-y-4">
                            <p className="text-silver">
                                <span className="text-titanium-muted">Location:</span> Sheridan, Wyoming, USA
                            </p>
                            <p className="text-silver">
                                <span className="text-titanium-muted">Email:</span>{' '}
                                <a href="mailto:sales@aureluxgroup.com" className="hover:text-titanium transition-colors">
                                    sales@aureluxgroup.com
                                </a>
                            </p>
                            <p className="text-silver">
                                <span className="text-titanium-muted">Phone:</span>{' '}
                                <a href="tel:+16814613153" className="hover:text-titanium transition-colors">
                                    +1 681 461 3153
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-tight bg-obsidian-light border-t border-titanium-ghost">
                <div className="container-narrow text-center">
                    <h2 className="font-serif text-titanium mb-8">
                        Ready to Connect?
                    </h2>
                    <Link href="/contact" className="magnetic-btn">
                        Initiate Dialogue
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
