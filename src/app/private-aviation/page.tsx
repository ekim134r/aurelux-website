import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Private Aviation | Aurelux Group',
    description: 'Access off-market corporate and commercial aircraft through direct, private channels. Executive charter coordinated through vetted operators.',
};

const fleetCategories = [
    {
        title: 'Light Jets',
        range: '1,500 - 2,200 nm',
        passengers: '6 - 8',
        description: 'Ideal for regional flights and time-sensitive business travel. Citation series, Phenom 300.',
    },
    {
        title: 'Midsize Jets',
        range: '2,500 - 3,500 nm',
        passengers: '8 - 10',
        description: 'Coast-to-coast capability with stand-up cabin comfort. Hawker, Citation XLS, Learjet 60.',
    },
    {
        title: 'Super-Midsize',
        range: '3,500 - 4,500 nm',
        passengers: '9 - 12',
        description: 'Transcontinental range with enhanced baggage capacity. Citation Longitude, Challenger 350.',
    },
    {
        title: 'Heavy Jets',
        range: '4,500 - 6,500 nm',
        passengers: '12 - 16',
        description: 'Intercontinental missions with full cabin amenities. Legacy 600, Challenger 850, Gulfstream G450.',
    },
    {
        title: 'VIP Airliners',
        range: '6,000+ nm',
        passengers: '19 - 50',
        description: 'Ultra-long-haul with executive cabin configurations. Lineage 1000, Boeing BBJ, Airbus ACJ.',
    },
    {
        title: 'Commercial VIP',
        range: 'Variable',
        passengers: '50 - 100+',
        description: 'Full-size aircraft for sports teams, tour groups, and government delegations. A340, B767.',
    },
];

export default function PrivateAviationPage() {
    return (
        <>
            <Navigation />

            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(ellipse at 30% 50%, rgba(8, 37, 35, 0.5) 0%, transparent 50%)',
                    }}
                />

                <div className="container-narrow relative z-10 text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6 emerge-from-shadow">
                        Private Aviation
                    </p>
                    <h1 className="font-serif text-titanium mb-8 gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                        Aircraft That Are Not Listed
                    </h1>
                    <p className="text-lg text-silver font-light max-w-2xl mx-auto">
                        Direct access to off-market corporate and commercial aircraft.
                        Every search begins with a specific request and is handled through
                        direct, private channels.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Off-Market Aircraft */}
                        <div className="glass p-10 rounded-sm">
                            <span className="block font-serif text-5xl text-titanium-ghost mb-6">01</span>
                            <h2 className="font-serif text-2xl text-titanium mb-6">
                                Off-Market Aircraft Sourcing
                            </h2>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                Aurelux Group provides access to a wide network of off-market corporate
                                and commercial aircraft. None are listed or advertised. Every search
                                begins with a specific request and is handled through direct, private channels.
                            </p>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                Commercial sourcing is limited to serious, qualified inquiries.
                            </p>
                            <Link href="/contact" className="magnetic-btn">
                                Submit Aircraft Request
                            </Link>
                        </div>

                        {/* Charter */}
                        <div className="glass p-10 rounded-sm">
                            <span className="block font-serif text-5xl text-titanium-ghost mb-6">02</span>
                            <h2 className="font-serif text-2xl text-titanium mb-6">
                                Executive Charter Services
                            </h2>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                Aurelux coordinates charter through a private partner network, giving
                                clients direct access to vetted operators without relying on public
                                listings or third-party marketplaces.
                            </p>
                            <p className="text-silver font-light leading-relaxed mb-8">
                                Every request is handled by a live team with full visibility and
                                24/7 response. Flights are secured with speed, precision, and discretion.
                            </p>
                            <Link href="/contact" className="magnetic-btn">
                                Request Charter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Categories */}
            <section className="section-tight bg-obsidian-light">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at 70% 30%, rgba(8, 37, 35, 0.1) 0%, transparent 50%)',
                    }}
                />
                <div className="container-narrow relative">
                    <div className="mb-16">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            Fleet Categories
                        </p>
                        <h2 className="font-serif text-titanium">
                            The Right Aircraft for Every Mission
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fleetCategories.map((category) => (
                            <div
                                key={category.title}
                                className="group p-8 border border-titanium-ghost rounded-sm hover:border-stratosphere transition-all duration-500"
                            >
                                <h3 className="font-serif text-xl text-titanium mb-4">
                                    {category.title}
                                </h3>
                                <div className="flex gap-6 mb-4 text-xs tracking-ultra uppercase text-silver">
                                    <span>{category.range}</span>
                                    <span>{category.passengers} pax</span>
                                </div>
                                <p className="text-sm text-silver/70 font-light">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-obsidian border-t border-titanium-ghost">
                <div className="container-narrow text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6">
                        Qualified Inquiries Only
                    </p>
                    <h2 className="font-serif text-titanium mb-8">
                        Submit Your Aircraft Request
                    </h2>
                    <p className="text-silver font-light max-w-xl mx-auto mb-10">
                        Provide details on your requirements. Our team will respond within
                        24-48 hours through secure channels.
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
