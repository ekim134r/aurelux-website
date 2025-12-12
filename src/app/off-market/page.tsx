import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Off-Market Acquisitions | Aurelux Group',
    description: 'Access private platforms connecting verified buyers and sellers of high-value physical assets. Aircraft, real estate, and collectibles.',
};

const assetCategories = [
    {
        title: 'Aircraft',
        description: 'Corporate jets, helicopters, and commercial aircraft not listed on public marketplaces.',
    },
    {
        title: 'Real Estate',
        description: 'Premium properties, commercial holdings, and land assets transacted privately.',
    },
    {
        title: 'Collectibles',
        description: 'High-value art, timepieces, vehicles, and other tangible assets.',
    },
];

export default function OffMarketPage() {
    return (
        <>
            <Navigation />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(8, 37, 35, 0.5) 0%, transparent 50%)',
                    }}
                />

                <div className="container-narrow relative z-10 text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6 emerge-from-shadow">
                        Off-Market Acquisitions
                    </p>
                    <h1 className="font-serif text-titanium mb-8 gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                        Access Physical Assets
                    </h1>
                    <p className="text-lg text-silver font-light max-w-2xl mx-auto">
                        Introductions to private platforms connecting verified buyers and sellers
                        of high-value physical assets. No brokers, no chains, no public listings.
                    </p>
                </div>
            </section>

            {/* Process */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            The Process
                        </p>
                        <h2 className="font-serif text-titanium mb-8">
                            How It Works
                        </h2>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex gap-8">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-titanium-ghost font-serif text-titanium">
                                        01
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-titanium mb-3">
                                        Submit Intent
                                    </h3>
                                    <p className="text-silver font-light leading-relaxed">
                                        You express interest in a specific asset category or transaction type.
                                        All inquiries are treated with complete confidentiality.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-8">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-titanium-ghost font-serif text-titanium">
                                        02
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-titanium mb-3">
                                        Introduction
                                    </h3>
                                    <p className="text-silver font-light leading-relaxed">
                                        Aurelux introduces you to the appropriate private platform or
                                        counterparty based on your specific requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-8">
                                <div className="flex-shrink-0">
                                    <span className="flex items-center justify-center w-12 h-12 rounded-full border border-titanium-ghost font-serif text-titanium">
                                        03
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl text-titanium mb-3">
                                        Direct Transaction
                                    </h3>
                                    <p className="text-silver font-light leading-relaxed">
                                        Once introduced, we step back. The platform handles next steps under
                                        their own terms and confidentiality protocols. All transactions are direct.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Asset Categories */}
            <section className="section-tight bg-obsidian-light">
                <div className="container-narrow">
                    <div className="mb-16 text-center">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            Asset Categories
                        </p>
                        <h2 className="font-serif text-titanium">
                            What We Facilitate
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {assetCategories.map((category) => (
                            <div
                                key={category.title}
                                className="glass p-10 rounded-sm text-center hover:border-stratosphere transition-all duration-500"
                            >
                                <h3 className="font-serif text-2xl text-titanium mb-4">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-silver font-light">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Principles */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                                Our Approach
                            </p>
                            <h2 className="font-serif text-titanium mb-6">
                                Key Principles
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-stratosphere mt-2" />
                                    <div>
                                        <h4 className="text-titanium mb-2">No Public Listings</h4>
                                        <p className="text-sm text-silver font-light">
                                            Every asset is sourced through private channels only.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-stratosphere mt-2" />
                                    <div>
                                        <h4 className="text-titanium mb-2">No Broker Chains</h4>
                                        <p className="text-sm text-silver font-light">
                                            Direct connections between verified parties.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-stratosphere mt-2" />
                                    <div>
                                        <h4 className="text-titanium mb-2">Full Confidentiality</h4>
                                        <p className="text-sm text-silver font-light">
                                            All transactions handled under strict privacy protocols.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="relative">
                            <div className="glass p-12 rounded-sm text-center">
                                <blockquote className="font-serif text-2xl text-titanium leading-relaxed">
                                    "All transactions are direct, with no brokers, no chains,
                                    and no public listings."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-tight bg-obsidian-light border-t border-titanium-ghost">
                <div className="container-narrow text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6">
                        Verified Buyers & Sellers
                    </p>
                    <h2 className="font-serif text-titanium mb-8">
                        Submit Your Intent
                    </h2>
                    <p className="text-silver font-light max-w-xl mx-auto mb-10">
                        Express interest in a specific asset category. We will introduce
                        you to the appropriate platform.
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
