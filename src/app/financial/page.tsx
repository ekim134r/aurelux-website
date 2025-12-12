import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Financial Services | Aurelux Group',
    description: 'Section 125 enhancement strategies, bespoke financial concierge services, and tax positioning support for business owners.',
};

export default function FinancialPage() {
    return (
        <>
            <Navigation />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(ellipse at 70% 50%, rgba(8, 37, 35, 0.5) 0%, transparent 50%)',
                    }}
                />

                <div className="container-narrow relative z-10 text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6 emerge-from-shadow">
                        Financial Services
                    </p>
                    <h1 className="font-serif text-titanium mb-8 gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                        The Margin Most Firms Miss
                    </h1>
                    <p className="text-lg text-silver font-light max-w-2xl mx-auto">
                        Tax strategies few understand. Financial advantages most overlook.
                        Targeted, operational solutions without handing off financial control.
                    </p>
                </div>
            </section>

            {/* Section 125 */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                                Service 01
                            </p>
                            <h2 className="font-serif text-titanium mb-6">
                                Section 125 Enhancement
                            </h2>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                Most U.S. companies leave savings on the table through overpaid payroll tax.
                                If you're a decision maker, Aurelux can introduce you to a vetted provider
                                that implements Section 125 strategies.
                            </p>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                These may reduce your FICA liability and increase employee take-home pay
                                by 4 to 6 percent. No out-of-pocket cost to explore, no disruption to
                                existing benefits, and compliance is fully handled.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="p-4 border border-titanium-ghost rounded-sm">
                                    <span className="block font-serif text-2xl text-titanium mb-1">4-6%</span>
                                    <span className="text-xs text-silver">Increased Take-Home</span>
                                </div>
                                <div className="p-4 border border-titanium-ghost rounded-sm">
                                    <span className="block font-serif text-2xl text-titanium mb-1">Zero</span>
                                    <span className="text-xs text-silver">Out-of-Pocket Cost</span>
                                </div>
                                <div className="p-4 border border-titanium-ghost rounded-sm">
                                    <span className="block font-serif text-2xl text-titanium mb-1">Full</span>
                                    <span className="text-xs text-silver">Compliance Handling</span>
                                </div>
                                <div className="p-4 border border-titanium-ghost rounded-sm">
                                    <span className="block font-serif text-2xl text-titanium mb-1">No</span>
                                    <span className="text-xs text-silver">Benefit Disruption</span>
                                </div>
                            </div>

                            <Link href="/contact" className="magnetic-btn">
                                Explore Section 125
                            </Link>
                        </div>

                        {/* Visual */}
                        <div className="relative">
                            <div className="glass p-12 rounded-sm text-center">
                                <div className="mb-8">
                                    <span className="font-serif text-6xl text-stratosphere">§125</span>
                                </div>
                                <p className="text-silver font-light text-sm">
                                    The outcome is stronger retention, easier recruitment,
                                    and real payroll efficiency.
                                </p>
                            </div>
                            {/* Glow effect */}
                            <div
                                className="absolute inset-0 -z-10 opacity-30"
                                style={{
                                    background: 'radial-gradient(circle, rgba(8, 37, 35, 0.6) 0%, transparent 70%)',
                                    transform: 'scale(1.5)',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="container-narrow">
                <div className="divider-metallic" />
            </div>

            {/* Financial Concierge */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Visual - Left */}
                        <div className="order-2 lg:order-1 relative">
                            <div className="glass p-12 rounded-sm">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-stratosphere" />
                                        <span className="text-sm text-silver">Card Processing Infrastructure</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-stratosphere" />
                                        <span className="text-sm text-silver">Strategic Acquisition Coordination</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-stratosphere" />
                                        <span className="text-sm text-silver">Tax Positioning Support</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-stratosphere" />
                                        <span className="text-sm text-silver">Operational Financial Solutions</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content - Right */}
                        <div className="order-1 lg:order-2">
                            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                                Service 02
                            </p>
                            <h2 className="font-serif text-titanium mb-6">
                                Bespoke Financial Concierge
                            </h2>
                            <p className="text-silver font-light leading-relaxed mb-6">
                                Aurelux is developing a bespoke financial concierge service offering
                                access to vetted card processing infrastructure, coordination for
                                strategic acquisitions, and tax positioning support.
                            </p>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                This service is designed for business owners who want targeted,
                                operational solutions without handing off financial control.
                            </p>

                            <Link href="/contact" className="magnetic-btn">
                                Request Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-tight bg-obsidian-light border-t border-titanium-ghost">
                <div className="container-narrow text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6">
                        Decision Makers Only
                    </p>
                    <h2 className="font-serif text-titanium mb-8">
                        Explore Financial Optimization
                    </h2>
                    <p className="text-silver font-light max-w-xl mx-auto mb-10">
                        If you're a decision maker looking to optimize financial efficiency,
                        submit your inquiry below.
                    </p>
                    <Link href="/contact" className="magnetic-btn">
                        Initiate Dialogue
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
