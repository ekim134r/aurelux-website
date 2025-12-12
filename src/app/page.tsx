'use client';

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

const fleetHighlights = [
  { category: 'Light Jets', range: '1,500-2,200 nm', capacity: '6-8 pax' },
  { category: 'Midsize Jets', range: '2,500-3,500 nm', capacity: '8-10 pax' },
  { category: 'Heavy Jets', range: '4,500-6,500 nm', capacity: '12-16 pax' },
  { category: 'VIP Airliners', range: '6,000+ nm', capacity: '19-50 pax' },
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

      {/* ===== SECTION 1: HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jet-interior.png"
            alt="Luxury jet interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/95 to-[#0A0E14]/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101820] to-transparent" />
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-32 left-8 w-32 h-32 border-l-2 border-t-2 border-[#C9A962]/20 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-32 right-8 w-32 h-32 border-r-2 border-b-2 border-[#C9A962]/20 pointer-events-none hidden lg:block" />

        <div className="relative z-10 container-wide pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              {/* Gold accent line */}
              <div className="hidden lg:flex items-center gap-4 mb-6 opacity-0" style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.1s' }}>
                <div className="w-12 h-px bg-gradient-to-r from-[#C9A962] to-transparent" />
                <span className="text-xs tracking-ultra uppercase text-[#C9A962]">Est. 2024</span>
              </div>

              <p
                className="text-xs tracking-ultra uppercase text-[#1A5A55] mb-4 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.2s' }}
              >
                Aurelux Group LLC
              </p>
              <h1
                className="font-serif text-titanium mb-6 opacity-0"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                  lineHeight: 1.1,
                  animation: 'fade-in-up 0.8s ease-out forwards',
                  animationDelay: '0.4s',
                  textShadow: '0 0 80px rgba(15, 61, 58, 0.4)'
                }}
              >
                Access The <span className="text-[#C9A962]">Invisible</span>
              </h1>
              <p
                className="text-lg text-[#D8DCE2] font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.6s' }}
              >
                Aircraft that are not listed. Tax strategies few understand.
                Financial advantages most overlook.
              </p>

              {/* Trust badges with better contrast */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs tracking-wide opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.8s' }}
              >
                <span className="flex items-center gap-2 text-[#9BA3AF]">
                  <span className="w-2 h-2 rounded-full bg-[#1A5A55]" />
                  24/7 Response
                </span>
                <span className="flex items-center gap-2 text-[#9BA3AF]">
                  <span className="w-2 h-2 rounded-full bg-[#1A5A55]" />
                  Private Channels
                </span>
                <span className="flex items-center gap-2 text-[#9BA3AF]">
                  <span className="w-2 h-2 rounded-full bg-[#1A5A55]" />
                  Vetted Network
                </span>
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

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10"
          style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '1.2s' }}
        >
          <span className="text-xs tracking-ultra uppercase text-[#9BA3AF]">Discover</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#C9A962]/50 to-transparent animate-pulse" />
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ===== SECTION 2: INTRO - Darker with Image ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #101820 0%, #0A0E14 100%)' }}>
        {/* Background Image - Cockpit */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cockpit-night.png"
            alt="Cockpit at night"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/95 to-[#0A0E14]/90" />
        </div>

        {/* Decorative vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A962]/30 to-transparent hidden lg:block" />

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Section label with gold accent */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#C9A962]" />
                <p className="text-xs tracking-ultra uppercase text-[#C9A962]">
                  The Invisible Architecture
                </p>
              </div>
              <h2 className="font-serif text-[#F0F2F5] mb-6">
                We Operate Where Markets Misprice
              </h2>
              <p className="text-lg text-[#D8DCE2] font-light leading-relaxed mb-6">
                Aurelux Group brokers what is not openly sold: aircraft that are not listed,
                tax strategies few understand, and financial advantages most overlook.
              </p>
              <p className="text-[#9BA3AF] font-light leading-relaxed">
                In niches too narrow and deals too complex for mass firms. Our approach:
                curate access, make introductions, then step back.
              </p>
            </div>

            {/* Stats with better contrast */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24/7', label: 'Live Response' },
                { value: 'Direct', label: 'Private Channels' },
                { value: 'Vetted', label: 'Partner Network' },
                { value: 'Zero', label: 'Public Listings' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-sm text-center transition-all duration-500 hover:translate-y-[-2px] group"
                  style={{
                    background: 'linear-gradient(145deg, #1A222D 0%, #101820 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(240, 242, 245, 0.08)',
                    border: '1px solid rgba(240, 242, 245, 0.1)',
                  }}
                >
                  <span className="block font-serif text-3xl text-[#F0F2F5] mb-2 group-hover:text-[#C9A962] transition-colors">{stat.value}</span>
                  <span className="text-xs tracking-ultra uppercase text-[#9BA3AF]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: PROCESS - Blue Tinted ===== */}
      <section
        className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #0A0E14 0%, #0D1B2A 50%, #0A0E14 100%)' }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(201, 169, 98, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 169, 98, 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-narrow relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A962]" />
              <p className="text-xs tracking-ultra uppercase text-[#C9A962]">How It Works</p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A962]" />
            </div>
            <h2 className="font-serif text-[#F0F2F5] mb-6">
              The Aurelux Process
            </h2>
            <p className="text-[#D8DCE2] font-light max-w-2xl mx-auto">
              Every engagement follows a simple, discreet path from request to access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative p-8 rounded-sm text-center group"
                style={{
                  background: 'linear-gradient(145deg, rgba(13, 27, 42, 0.8) 0%, rgba(10, 14, 20, 0.9) 100%)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(240, 242, 245, 0.05)',
                  border: '1px solid rgba(201, 169, 98, 0.15)',
                }}
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#C9A962]/50 to-transparent" />
                )}
                <span className="block font-serif text-4xl text-[#C9A962]/40 mb-4 group-hover:text-[#C9A962] transition-colors">{step.number}</span>
                <h3 className="font-serif text-xl text-[#F0F2F5] mb-3">{step.title}</h3>
                <p className="text-sm text-[#9BA3AF] font-light">{step.description}</p>
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/95 to-[#0A0E14]/70" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0E14] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A222D] to-transparent" />
        </div>

        {/* Decorative corner */}
        <div className="absolute top-24 right-12 hidden lg:block">
          <div className="w-20 h-20 border border-[#C9A962]/20 rotate-45" />
        </div>

        <div className="relative z-10 py-24">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-[#C9A962]" />
                  <p className="text-xs tracking-ultra uppercase text-[#C9A962]">Private Aviation</p>
                </div>
                <h2 className="font-serif text-[#F0F2F5] mb-6">
                  The Right Aircraft For Every Mission
                </h2>
                <p className="text-[#D8DCE2] font-light leading-relaxed mb-8">
                  From regional flights to intercontinental journeys, access aircraft
                  through private channels. Every search begins with your requirements.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {fleetHighlights.map((item) => (
                    <div
                      key={item.category}
                      className="p-4 rounded-sm transition-all duration-500 hover:translate-y-[-2px] group"
                      style={{
                        background: 'linear-gradient(145deg, rgba(26, 34, 45, 0.95) 0%, rgba(16, 24, 32, 0.98) 100%)',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(240, 242, 245, 0.08)',
                        border: '1px solid rgba(240, 242, 245, 0.1)',
                      }}
                    >
                      <h4 className="font-serif text-[#F0F2F5] text-sm mb-2 group-hover:text-[#C9A962] transition-colors">{item.category}</h4>
                      <div className="text-xs text-[#9BA3AF] space-y-1">
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

      {/* ===== SECTION 5: SERVICES - Charcoal ===== */}
      <section
        className="relative py-24"
        style={{ background: 'linear-gradient(180deg, #1A222D 0%, #232D3B 50%, #1A222D 100%)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(15, 61, 58, 0.2) 0%, transparent 50%)',
          }}
        />

        <div className="container-narrow relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#1A5A55]" />
              <p className="text-xs tracking-ultra uppercase text-[#1A5A55]">Aviation Services</p>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#1A5A55]" />
            </div>
            <h2 className="font-serif text-[#F0F2F5] mb-6">
              Private Aviation Access
            </h2>
            <p className="text-[#D8DCE2] font-light max-w-2xl mx-auto">
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

      {/* ===== SECTION 6: QUOTE BANNER - Stratosphere ===== */}
      <section
        className="relative py-20"
        style={{
          background: 'linear-gradient(135deg, #0F3D3A 0%, #0A0E14 50%, #0F3D3A 100%)',
        }}
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-24 h-24 border-l border-t border-[#C9A962]/30" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#C9A962]/30" />

        <div className="container-narrow relative text-center">
          <blockquote>
            <p className="font-serif text-3xl md:text-4xl text-[#F0F2F5] leading-relaxed mb-6">
              "Privacy. <span className="text-[#C9A962]">Precision.</span> No Circumvention."
            </p>
            <footer className="text-sm text-[#D8DCE2] tracking-wide">
              — The Aurelux Standard
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== SECTION 7: FINANCIAL - With Image ===== */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #101820 0%, #1A222D 50%, #101820 100%)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/watch-detail.png"
            alt="Precision mechanism"
            fill
            className="object-cover object-right opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101820] via-[#101820]/95 to-[#101820]/80" />
        </div>

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#C9A962]" />
                <p className="text-xs tracking-ultra uppercase text-[#C9A962]">Financial Services</p>
              </div>
              <h2 className="font-serif text-[#F0F2F5] mb-6">
                The Margin Most Firms Miss
              </h2>
              <p className="text-[#D8DCE2] font-light leading-relaxed mb-6">
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
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mt-2 flex-shrink-0" />
                    <span className="text-[#D8DCE2] font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/financial" className="magnetic-btn inline-block">
                Explore Financial Services
              </Link>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div
                className="p-12 rounded-sm text-center"
                style={{
                  background: 'linear-gradient(145deg, #232D3B 0%, #1A222D 100%)',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(240, 242, 245, 0.06)',
                  border: '1px solid rgba(201, 169, 98, 0.2)',
                }}
              >
                <span className="block font-serif text-6xl text-[#C9A962] mb-4">§125</span>
                <p className="text-[#D8DCE2] font-light text-sm">
                  Stronger retention, easier recruitment, real payroll efficiency.
                </p>
              </div>
              {/* Glow effect */}
              <div
                className="absolute inset-0 -z-10 opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(201, 169, 98, 0.2) 0%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
              />
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
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-[#0A0E14]/90" />
        </div>

        {/* Top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A962]/40 to-transparent" />

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <span className="block font-serif text-4xl text-[#F0F2F5] mb-2">Direct</span>
              <span className="text-xs tracking-ultra uppercase text-[#C9A962]">No Intermediaries</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-[#F0F2F5] mb-2">Private</span>
              <span className="text-xs tracking-ultra uppercase text-[#C9A962]">Secure Channels</span>
            </div>
            <div>
              <span className="block font-serif text-4xl text-[#F0F2F5] mb-2">Qualified</span>
              <span className="text-xs tracking-ultra uppercase text-[#C9A962]">Vetted Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FINAL CTA ===== */}
      <section
        className="relative py-24"
        style={{
          background: 'linear-gradient(180deg, #0A0E14 0%, #101820 50%, #0A0E14 100%)',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#C9A962]/50 to-transparent" />

        <div className="container-narrow relative text-center">
          <p className="text-xs tracking-ultra uppercase text-[#C9A962] mb-6">
            Ready to Engage?
          </p>
          <h2 className="font-serif text-[#F0F2F5] mb-8">
            Initiate Dialogue
          </h2>
          <p className="text-[#D8DCE2] font-light max-w-xl mx-auto mb-10">
            Submit your details below. Serious inquiries receive a response
            within 24-48 hours through secure channels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="magnetic-btn">
              Request Access
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-ultra uppercase text-[#D8DCE2] rounded-sm transition-all duration-300 hover:text-[#F0F2F5]"
              style={{
                background: 'linear-gradient(145deg, #1A222D 0%, #101820 100%)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(240, 242, 245, 0.05)',
                border: '1px solid rgba(201, 169, 98, 0.2)',
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
