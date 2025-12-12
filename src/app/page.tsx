import Navigation from '@/components/Navigation';
import HeroEditorial from '@/components/HeroEditorial';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Off-Market Aircraft',
    description: 'Direct access to a wide network of off-market corporate and commercial aircraft. None are listed or advertised. Every search begins with a specific request and is handled through direct, private channels.',
    ctaText: 'Submit Request',
    ctaHref: '/private-aviation',
  },
  {
    number: '02',
    title: 'Corporate Charter',
    description: 'Charter coordinated through a private partner network, giving clients direct access to vetted operators without relying on public listings. Every request is handled with full visibility and 24/7 response.',
    ctaText: 'Learn More',
    ctaHref: '/private-aviation',
  },
  {
    number: '03',
    title: 'Off-Market Assets',
    description: 'Introductions to private platforms connecting verified buyers and sellers of high-value physical assets including aircraft, real estate, and collectibles. All transactions are direct, with no brokers.',
    ctaText: 'Explore',
    ctaHref: '/off-market',
  },
  {
    number: '04',
    title: 'Section 125 Enhancement',
    description: 'Most U.S. companies leave savings on the table through overpaid payroll tax. We introduce vetted providers implementing Section 125 strategies that reduce FICA liability and increase take-home pay.',
    ctaText: 'Learn More',
    ctaHref: '/financial',
  },
  {
    number: '05',
    title: 'Financial Concierge',
    description: 'Access to vetted card processing infrastructure, coordination for strategic acquisitions, and tax positioning support. Targeted, operational solutions without handing off financial control.',
    ctaText: 'Learn More',
    ctaHref: '/financial',
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section - Editorial Variant */}
      <HeroEditorial />

      {/* Intro Section */}
      <section className="relative section bg-obsidian">
        <div className="container-narrow">
          <div className="max-w-3xl">
            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-8 emerge-from-shadow">
              The Invisible Architecture
            </p>
            <h2 className="font-serif text-titanium mb-8" style={{ animationDelay: '0.2s' }}>
              We Operate Where Markets Misprice
            </h2>
            <p className="text-lg text-silver font-light leading-relaxed">
              Aurelux Group brokers what is not openly sold: aircraft that are not listed,
              tax strategies few understand, and financial advantages most overlook.
              In niches too narrow and deals too complex for mass firms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative section-tight bg-obsidian-light">
        {/* Ambient Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(8, 37, 35, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="container-narrow relative">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                Services
              </p>
              <h2 className="font-serif text-titanium">
                Curated Solutions
              </h2>
            </div>
            <p className="text-sm text-silver max-w-md">
              Each engagement begins with a specific request, handled through direct,
              private channels with full discretion.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative section bg-obsidian">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Quote */}
            <div>
              <blockquote className="relative">
                <span className="absolute -top-8 -left-4 font-serif text-6xl text-titanium-ghost">
                  "
                </span>
                <p className="font-serif text-2xl md:text-3xl text-titanium leading-relaxed mb-8">
                  Privacy. Precision. No Circumvention.
                </p>
                <footer className="text-sm text-silver">
                  — The Aurelux Standard
                </footer>
              </blockquote>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 glass rounded-sm">
                <span className="block font-serif text-4xl text-titanium mb-2">24/7</span>
                <span className="text-xs tracking-ultra uppercase text-silver">Response Team</span>
              </div>
              <div className="p-8 glass rounded-sm">
                <span className="block font-serif text-4xl text-titanium mb-2">Direct</span>
                <span className="text-xs tracking-ultra uppercase text-silver">Private Channels</span>
              </div>
              <div className="p-8 glass rounded-sm">
                <span className="block font-serif text-4xl text-titanium mb-2">Vetted</span>
                <span className="text-xs tracking-ultra uppercase text-silver">Partner Network</span>
              </div>
              <div className="p-8 glass rounded-sm">
                <span className="block font-serif text-4xl text-titanium mb-2">Zero</span>
                <span className="text-xs tracking-ultra uppercase text-silver">Public Listings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-tight bg-obsidian-light border-y border-titanium-ghost">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(8, 37, 35, 0.2) 0%, transparent 60%)',
          }}
        />
        <div className="container-narrow relative text-center">
          <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6">
            Ready to Engage?
          </p>
          <h2 className="font-serif text-titanium mb-8">
            Initiate Dialogue
          </h2>
          <p className="text-silver font-light max-w-xl mx-auto mb-10">
            Submit your details below. Serious inquiries receive a response
            within 24-48 hours through secure channels.
          </p>
          <Link href="/contact" className="magnetic-btn">
            Request Access
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
