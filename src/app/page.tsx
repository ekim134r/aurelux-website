import Navigation from '@/components/Navigation';
import QuoteForm from '@/components/QuoteForm';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    number: '01',
    title: 'Off-Market Aircraft',
    description: 'Direct access to a wide network of off-market corporate and commercial aircraft. None are listed or advertised.',
    ctaText: 'Submit Request',
    ctaHref: '/private-aviation',
  },
  {
    number: '02',
    title: 'Corporate Charter',
    description: 'Charter coordinated through a private partner network with full visibility and 24/7 response.',
    ctaText: 'Learn More',
    ctaHref: '/private-aviation',
  },
  {
    number: '03',
    title: 'Off-Market Assets',
    description: 'Introductions to private platforms connecting verified buyers and sellers of high-value physical assets.',
    ctaText: 'Explore',
    ctaHref: '/off-market',
  },
];

const financialServices = [
  {
    number: '04',
    title: 'Section 125 Enhancement',
    description: 'Reduce FICA liability and increase employee take-home pay by 4-6%. Full compliance handling.',
    ctaText: 'Learn More',
    ctaHref: '/financial',
  },
  {
    number: '05',
    title: 'Financial Concierge',
    description: 'Vetted card processing, strategic acquisition coordination, and tax positioning support.',
    ctaText: 'Learn More',
    ctaHref: '/financial',
  },
];

const fleetHighlights = [
  { category: 'Light Jets', range: '1,500-2,200 nm', capacity: '6-8 pax', icon: '✈' },
  { category: 'Midsize Jets', range: '2,500-3,500 nm', capacity: '8-10 pax', icon: '✈' },
  { category: 'Heavy Jets', range: '4,500-6,500 nm', capacity: '12-16 pax', icon: '✈' },
  { category: 'VIP Airliners', range: '6,000+ nm', capacity: '19-50 pax', icon: '✈' },
];

const processSteps = [
  { number: '01', title: 'Submit Request', description: 'Provide your specific requirements through secure channels.' },
  { number: '02', title: 'Private Search', description: 'We search our network of off-market sources and vetted operators.' },
  { number: '03', title: 'Direct Introduction', description: 'Once matched, we make the introduction and step back.' },
];

export default function Home() {
  return (
    <>
      <Navigation />

      {/* ===== SECTION 1: HERO - Video Style Background ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jet-interior.png"
            alt="Luxury jet interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </div>

        <div className="relative z-10 container-wide pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <p
                className="text-xs tracking-ultra uppercase text-stratosphere mb-6 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.2s' }}
              >
                Aurelux Group LLC
              </p>
              <h1
                className="font-serif text-titanium mb-6 gradient-text glow-text opacity-0"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                  lineHeight: 1.1,
                  animation: 'fade-in-up 0.8s ease-out forwards',
                  animationDelay: '0.4s'
                }}
              >
                Access The Invisible
              </h1>
              <p
                className="text-lg text-silver font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.6s' }}
              >
                Aircraft that are not listed. Tax strategies few understand.
                Financial advantages most overlook.
              </p>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs tracking-wide text-silver/60 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.8s' }}
              >
                <span>24/7 Response</span>
                <span>•</span>
                <span>Private Channels</span>
                <span>•</span>
                <span>Vetted Network</span>
              </div>
            </div>

            <div
              className="opacity-0"
              style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.5s' }}
            >
              <QuoteForm />
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10"
          style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '1.2s' }}
        >
          <span className="text-xs tracking-ultra uppercase text-silver/60">Discover</span>
          <div className="w-px h-8 bg-gradient-to-b from-titanium-subtle to-transparent animate-pulse" />
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ===== SECTION 2: INTRO - Darker Shade ===== */}
      <section className="relative py-24" style={{ background: 'linear-gradient(180deg, #0D1117 0%, #0A0E14 100%)' }}>
        {/* Subtle top shadow for depth */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

        <div className="container-narrow relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                The Invisible Architecture
              </p>
              <h2 className="font-serif text-titanium mb-6">
                We Operate Where Markets Misprice
              </h2>
              <p className="text-lg text-silver font-light leading-relaxed mb-6">
                Aurelux Group brokers what is not openly sold: aircraft that are not listed,
                tax strategies few understand, and financial advantages most overlook.
              </p>
              <p className="text-silver font-light leading-relaxed">
                In niches too narrow and deals too complex for mass firms. Our approach:
                curate access, make introductions, then step back.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24/7', label: 'Live Response' },
                { value: 'Direct', label: 'Private Channels' },
                { value: 'Vetted', label: 'Partner Network' },
                { value: 'Zero', label: 'Public Listings' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-sm text-center transition-all duration-500 hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(145deg, #12171D 0%, #0D1117 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(240, 242, 245, 0.05), 0 4px 20px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(240, 242, 245, 0.05)',
                  }}
                >
                  <span className="block font-serif text-3xl text-titanium mb-2">{stat.value}</span>
                  <span className="text-xs tracking-ultra uppercase text-silver">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROCESS - Midnight Blue Shade ===== */}
      <section
        className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #0A0E14 0%, #0D1B2A 50%, #0A0E14 100%)' }}
      >
        {/* Inner shadow for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 20px 60px -20px rgba(0,0,0,0.5), inset 0 -20px 60px -20px rgba(0,0,0,0.5)' }}
        />

        <div className="container-narrow relative">
          <div className="text-center mb-16">
            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-titanium mb-6">
              The Aurelux Process
            </h2>
            <p className="text-silver font-light max-w-2xl mx-auto">
              Every engagement follows a simple, discreet path from request to access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-8 rounded-sm text-center"
                style={{
                  background: 'linear-gradient(145deg, rgba(13, 27, 42, 0.6) 0%, rgba(10, 14, 20, 0.8) 100%)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(240, 242, 245, 0.03)',
                  border: '1px solid rgba(8, 37, 35, 0.3)',
                }}
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-stratosphere/50 to-transparent" />
                )}
                <span className="block font-serif text-4xl text-stratosphere/40 mb-4">{step.number}</span>
                <h3 className="font-serif text-xl text-titanium mb-3">{step.title}</h3>
                <p className="text-sm text-silver font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FLEET - With Background Image ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jet-exterior.png"
            alt="Private jet at dusk"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/95 to-obsidian/80" />
          {/* Top shadow for depth */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-obsidian to-transparent" />
        </div>

        <div className="relative z-10 py-24">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                  Private Aviation
                </p>
                <h2 className="font-serif text-titanium mb-6">
                  The Right Aircraft For Every Mission
                </h2>
                <p className="text-silver font-light leading-relaxed mb-8">
                  From regional flights to intercontinental journeys, access aircraft
                  through private channels. Every search begins with your requirements.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {fleetHighlights.map((item) => (
                    <div
                      key={item.category}
                      className="p-4 rounded-sm transition-all duration-500 hover:translate-y-[-2px]"
                      style={{
                        background: 'linear-gradient(145deg, rgba(15, 20, 25, 0.9) 0%, rgba(10, 14, 20, 0.95) 100%)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(240, 242, 245, 0.05)',
                        border: '1px solid rgba(240, 242, 245, 0.08)',
                      }}
                    >
                      <h4 className="font-serif text-titanium text-sm mb-2">{item.category}</h4>
                      <div className="text-xs text-silver/70 space-y-1">
                        <p>{item.range}</p>
                        <p>{item.capacity}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/private-aviation" className="magnetic-btn mt-8 inline-block">
                  Explore Fleet Access
                </Link>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: SERVICES - Charcoal Shade ===== */}
      <section
        className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #0A0E14 0%, #151B23 50%, #0F1419 100%)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(8, 37, 35, 0.15) 0%, transparent 50%)',
          }}
        />
        {/* Inset shadow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 1px 0 rgba(240, 242, 245, 0.02)' }}
        />

        <div className="container-narrow relative">
          <div className="text-center mb-16">
            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
              Aviation Services
            </p>
            <h2 className="font-serif text-titanium mb-6">
              Private Aviation Access
            </h2>
            <p className="text-silver font-light max-w-2xl mx-auto">
              Each engagement begins with a specific request, handled through direct,
              private channels with full discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: QUOTE BANNER - Stratosphere Accent ===== */}
      <section
        className="relative py-20"
        style={{
          background: 'linear-gradient(135deg, #082523 0%, #0A0E14 50%, #082523 100%)',
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(8, 37, 35, 0.4) 0%, transparent 70%)',
          }}
        />
        {/* Edge shadows for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 1px 0 rgba(240, 242, 245, 0.05), inset 0 -1px 0 rgba(0, 0, 0, 0.3)' }}
        />

        <div className="container-narrow relative text-center">
          <blockquote>
            <p className="font-serif text-3xl md:text-4xl text-titanium leading-relaxed mb-6">
              "Privacy. Precision. No Circumvention."
            </p>
            <footer className="text-sm text-silver tracking-wide">
              — The Aurelux Standard
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== SECTION 7: FINANCIAL SERVICES - Lighter Shade ===== */}
      <section
        className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #0F1419 0%, #1A2029 50%, #0F1419 100%)' }}
      >
        {/* Top inset shadow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 20px 40px -20px rgba(0,0,0,0.4)' }}
        />

        <div className="container-narrow relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                Financial Services
              </p>
              <h2 className="font-serif text-titanium mb-6">
                The Margin Most Firms Miss
              </h2>
              <p className="text-silver font-light leading-relaxed mb-6">
                Most U.S. companies leave savings on the table through overpaid payroll tax.
                Section 125 strategies may reduce FICA liability and increase employee
                take-home pay by 4-6%.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'No out-of-pocket cost to explore',
                  'No disruption to existing benefits',
                  'Full compliance handling',
                  'Stronger retention & easier recruitment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-stratosphere mt-2 flex-shrink-0" />
                    <span className="text-silver font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/financial" className="magnetic-btn inline-block">
                Explore Financial Services
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {financialServices.map((service) => (
                <div
                  key={service.number}
                  className="p-8 rounded-sm transition-all duration-500 hover:translate-y-[-2px]"
                  style={{
                    background: 'linear-gradient(145deg, #1A2029 0%, #151B23 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(240, 242, 245, 0.03)',
                    border: '1px solid rgba(240, 242, 245, 0.05)',
                  }}
                >
                  <span className="block font-serif text-3xl text-titanium-ghost mb-4">{service.number}</span>
                  <h3 className="font-serif text-xl text-titanium mb-3">{service.title}</h3>
                  <p className="text-sm text-silver font-light mb-4">{service.description}</p>
                  <Link
                    href={service.ctaHref}
                    className="text-xs tracking-ultra uppercase text-stratosphere hover:text-titanium transition-colors"
                  >
                    {service.ctaText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: TEXTURE BANNER ===== */}
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/metal-texture.png"
            alt="Metallic texture"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-obsidian/85" />
        </div>

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="block font-serif text-4xl text-titanium mb-2">Direct</span>
              <span className="text-xs tracking-ultra uppercase text-silver">No Intermediaries</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-titanium mb-2">Private</span>
              <span className="text-xs tracking-ultra uppercase text-silver">Secure Channels</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-titanium mb-2">Qualified</span>
              <span className="text-xs tracking-ultra uppercase text-silver">Vetted Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA - Gradient Depth ===== */}
      <section
        className="relative py-24"
        style={{
          background: 'linear-gradient(180deg, #0A0E14 0%, #0D1117 30%, #151B23 70%, #0F1419 100%)',
        }}
      >
        {/* Top border glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-titanium-ghost to-transparent" />

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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="magnetic-btn">
              Request Access
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-ultra uppercase text-silver rounded-sm transition-all duration-300 hover:text-titanium"
              style={{
                background: 'linear-gradient(145deg, #151B23 0%, #0F1419 100%)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(240, 242, 245, 0.03)',
                border: '1px solid rgba(240, 242, 245, 0.08)',
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
