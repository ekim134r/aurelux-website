'use client';

import Navigation from '@/components/Navigation';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import ProcessTimeline from '@/components/ProcessTimeline';
import FleetHangar from '@/components/FleetHangar';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Private Jet Charter',
    description: 'Global charter through a vetted partner network. Speed, precision and discretion for every trip.',
    ctaText: 'Learn More',
    ctaHref: '/private-aviation',
  },
  {
    number: '02',
    title: 'Off-Market Aircraft',
    description: 'Access to corporate aircraft through private channels. Discreet introductions and structured support.',
    ctaText: 'Explore Access',
    ctaHref: '/off-market',
  },
  {
    number: '03',
    title: 'Section 125 Enhancement',
    description: 'Connect employers to a Section 125 benefits structure that increases take-home pay.',
    ctaText: 'Request Info',
    ctaHref: '/financial',
  },
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
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E14] via-[#0A0E14]/95 to-[#0A0E14]/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101820] to-transparent" />
        </div>

        {/* Decorative Corner Accent */}
        <div className="absolute top-32 left-8 w-32 h-32 border-l-2 border-t-2 border-stratosphere/20 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-32 right-8 w-32 h-32 border-r-2 border-b-2 border-stratosphere/20 pointer-events-none hidden lg:block" />

        {/* Hero content container */}
        <div className="relative z-10 container-wide px-6 md:px-8 pt-40 md:pt-32 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              {/* Teal accent line */}
              <div className="hidden lg:flex items-center gap-4 mb-6 opacity-0" style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.1s' }}>
                <div className="w-12 h-px bg-gradient-to-r from-stratosphere to-transparent" />
                <span className="text-xs tracking-ultra uppercase text-stratosphere">Est. 2025</span>
              </div>

              <p
                className="hidden lg:block text-xs tracking-ultra uppercase text-stratosphere mb-4 opacity-0"
                style={{ animation: 'fade-in-up 0.8s ease-out forwards', animationDelay: '0.2s' }}
              >
                Aurelux Group
              </p>

              <div className="mb-6">
                <h1
                  className="font-serif text-titanium leading-tight opacity-0"
                  style={{
                    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                    textShadow: '0 0 80px rgba(15, 61, 58, 0.4)',
                    animation: 'fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards'
                  }}
                >
                  Private Jet Charter. <br className="hidden md:block" />
                  <span className="text-stratosphere">Off-Market</span> Acquisition.
                </h1>
              </div>

              <p
                className="text-base md:text-lg text-[#D8DCE2] font-light leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                Section 125 tax optimization for qualified U.S. businesses.
                Discreet access and controlled execution.
              </p>

              {/* Trust badges */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs tracking-wide opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}
              >
                <span className="flex items-center gap-2 text-silver">
                  <span className="w-2 h-2 rounded-full bg-stratosphere animate-pulse" />
                  24/7 Response
                </span>
                <span className="flex items-center gap-2 text-silver">
                  <span className="w-2 h-2 rounded-full bg-stratosphere animate-pulse" />
                  Private Channels
                </span>
                <span className="flex items-center gap-2 text-silver">
                  <span className="w-2 h-2 rounded-full bg-stratosphere animate-pulse" />
                  Vetted Network
                </span>
              </div>

              {/* Featured Press - IB Times */}
              <a
                href="https://www.ibtimes.com/aurelux-group-launches-dual-sector-firm-offering-off-market-jet-sourcing-financial-concierge-3791957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-6 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-stratosphere/30 transition-all duration-300 opacity-0 animate-fade-in-up group"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-[10px] tracking-widest uppercase text-silver/60">Featured in</span>
                <span className="font-serif text-sm text-titanium group-hover:text-stratosphere-bright transition-colors">
                  International Business Times
                </span>
                <svg className="w-3.5 h-3.5 text-silver/40 group-hover:text-stratosphere transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <QuoteForm />
            </div>
          </div>
        </div>
        {/* Scroll Indicator - Hidden on mobile */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 opacity-0 z-10 animate-fade-in-up hidden md:flex"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-xs tracking-ultra uppercase text-silver">Discover</span>
          <div className="w-px h-8 bg-gradient-to-b from-stratosphere/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== SECTION 2: TRUST INDICATORS (HUD Style) ===== */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#0A0E14] border-b border-stratosphere/10 relative overflow-hidden">
        {/* HUD Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(26, 90, 85, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 90, 85, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="container-wide relative z-10">
          {/* 2x2 on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {[
              { label: 'Network', value: 'GLOBAL' },
              { label: 'Response', value: '24/7' },
              { label: 'Access', value: 'DIRECT' },
              { label: 'Privacy', value: '100%' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center lg:items-start lg:text-left group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2 text-stratosphere text-[10px] font-mono tracking-widest opacity-70">
                  <span className="hidden lg:inline">[</span>
                  <span>HUD.0{i + 1}</span>
                  <span className="hidden lg:inline">]</span>
                </div>
                <div className="relative">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-serif text-titanium group-hover:text-stratosphere-bright transition-colors duration-500">
                    {stat.value}
                  </span>
                  {/* Crosshair accents */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-stratosphere opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 border-l border-b border-stratosphere opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-silver/60 mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE PROCESS ===== */}
      <section className="relative py-16 md:py-24 bg-[#0D1219] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

        <div className="container-narrow text-center mb-12 md:mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-6">
              How It Works
            </span>
            <h2 className="font-serif text-titanium text-3xl md:text-5xl mb-4">The Process</h2>
            <p className="text-silver/60 font-light max-w-xl mx-auto">
              Precision execution from request to completion. Three steps. Zero friction.
            </p>
          </motion.div>
        </div>

        <ProcessTimeline />
      </section>

      {/* ===== SECTION 4: FLEET HANGAR ===== */}
      <section className="relative py-16 md:py-24 bg-[#0A0E14] border-t border-white/5">
        {/* Ambient glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stratosphere/5 blur-[180px] pointer-events-none" />

        <div className="container-wide px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-stratosphere" />
                <p className="text-xs tracking-ultra uppercase text-stratosphere">The Fleet</p>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-titanium">Hangar Access</h2>
              <p className="text-silver/50 font-light mt-3 max-w-md">
                From regional sprints to intercontinental voyages. Select your class.
              </p>
            </motion.div>
            <Link
              href="/private-aviation"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-stratosphere hover:text-titanium transition-colors"
            >
              View Full Fleet Operations
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <FleetHangar />
        </div>
      </section>

      {/* ===== SECTION 5: FINANCIAL SECTION ===== */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#080B10]">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#F0F2F5 1px, transparent 1px),
              linear-gradient(90deg, #F0F2F5 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 bg-radial-at-c from-transparent to-[#080B10]" />

        {/* Stratosphere accent glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

        <div className="container-narrow relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-stratosphere/30 rounded-full bg-stratosphere/5">
                <span className="w-1.5 h-1.5 rounded-full bg-stratosphere animate-pulse" />
                <span className="text-[10px] font-mono text-stratosphere tracking-widest uppercase">Financial Instruments</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titanium mb-6 leading-tight">
                Precision in <br />
                <span className="text-stratosphere">Payroll Efficiency</span>
              </h2>

              <p className="text-lg text-silver/70 font-light leading-relaxed mb-8">
                Optimize your company&apos;s most significant expense. Our Section 125 strategies deploy mathematical precision to reduce FICA liability and increase capital retention.
              </p>

              <ul className="space-y-4 mb-10">
                {['Immediate Capital Release', 'Compliance-First Structure', 'Zero Disruption Integration'].map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-4 text-[#D8DCE2] font-light"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-stratosphere/10 border border-stratosphere/30">
                      <svg className="w-3 h-3 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link href="/financial" className="magnetic-btn">
                Analyze Opportunity
              </Link>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-stratosphere/10 blur-[100px] rounded-full" />
              <div className="relative border border-white/10 bg-[#0A0E14]/80 backdrop-blur-md p-8 md:p-12 rounded-lg overflow-hidden">
                {/* Decorative lines */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-stratosphere via-stratosphere-bright to-stratosphere" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="text-center space-y-8">
                  <div>
                    <div className="text-[10px] font-mono text-stratosphere uppercase tracking-widest mb-4">Projected Savings</div>
                    <div className="text-6xl md:text-7xl font-serif text-white mb-2">4-6%</div>
                    <div className="text-sm text-silver/60 uppercase tracking-wide">Increase in take-home pay</div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-2xl md:text-3xl font-serif text-stratosphere-bright mb-1">$4K+</div>
                      <div className="text-[10px] text-silver/50 uppercase tracking-wide">Per Employee/Year</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-serif text-titanium mb-1">$0</div>
                      <div className="text-[10px] text-silver/50 uppercase tracking-wide">Implementation Cost</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: FINAL CTA ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E14] via-[#0D1219] to-[#0A0E14]" />

        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-stratosphere/5 blur-[150px] pointer-events-none" />

        <div className="container-narrow relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-stratosphere/30 bg-stratosphere/5 text-[10px] tracking-[0.2em] uppercase text-stratosphere mb-8">
              Ready?
            </span>
            <h2 className="font-serif text-titanium mb-6 text-3xl md:text-4xl lg:text-5xl">
              Ready to Engage?
            </h2>
            <p className="text-silver/60 font-light mb-10 max-w-md mx-auto">
              Begin with a confidential consultation. No obligations, just possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
              {/* Persistent glow aura behind CTA */}
              <div className="absolute inset-0 -m-8 bg-stratosphere/15 blur-[60px] rounded-full pointer-events-none" />
              <Link href="/contact" className="magnetic-btn relative z-10">
                Request Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
