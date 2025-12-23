import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Aurelux Group',
    description: 'Submit your inquiry to Aurelux Group. Serious inquiries receive a response within 24-48 hours through secure channels.',
};

export default function ContactPage() {
    return (
        <>
            <Navigation />

            {/* Hero - Minimal & Direct */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-obsidian">
                {/* Subtle Ambient Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-stratosphere-glow/10 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-stratosphere-glow/5 blur-[100px] rounded-full" />
                </div>

                <div className="container-narrow relative z-10 text-center pt-16 md:pt-20">
                    <p className="text-xs tracking-[0.3em] uppercase text-silver/40 mb-6 md:mb-8 animate-fade-in-up">
                        Secure Communication
                    </p>
                    <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-titanium mb-6 md:mb-8 tracking-tight animate-fade-in-up delay-100">
                        Initiate Dialogue
                    </h1>
                    <div className="w-px h-12 md:h-16 bg-gradient-to-b from-titanium-subtle to-transparent mx-auto opacity-50 animate-fade-in-up delay-200 hidden md:block" />
                </div>
            </section>

            {/* Contact Interface */}
            <section className="section bg-obsidian -mt-10 md:-mt-20 relative z-20">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24">

                        {/* Direct Line / Info - First on mobile for context */}
                        <div className="lg:col-span-5 order-1 lg:pt-12 space-y-8 md:space-y-12 lg:space-y-16">
                            <div>
                                <h3 className="font-serif text-xl md:text-2xl text-titanium mb-4 md:mb-6">Direct Channels</h3>
                                <p className="text-silver/60 font-light leading-relaxed mb-6 md:mb-8">
                                    For urgent matters or direct acquisitions, utilize the dedicated lines below. All communications are encrypted and confidential.
                                </p>

                                <div className="space-y-4 md:space-y-6">
                                    <div className="group">
                                        <span className="text-[10px] uppercase tracking-widest text-stratosphere block mb-1">Electronic Mail</span>
                                        <a href="mailto:sales@aureluxgroup.com" className="text-lg md:text-xl text-titanium font-light hover:text-white transition-colors flex items-center gap-2">
                                            sales@aureluxgroup.com
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                                        </a>
                                    </div>

                                    <div className="group">
                                        <span className="text-[10px] uppercase tracking-widest text-stratosphere block mb-1">Direct Line</span>
                                        <a href="tel:+16814613153" className="text-lg md:text-xl text-titanium font-light hover:text-white transition-colors flex items-center gap-2">
                                            +1 681 461 3153
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 border border-titanium-ghost/20 bg-titanium-ghost/5 rounded-sm">
                                <span className="block text-titanium font-serif mb-2">Response Protocol</span>
                                <p className="text-sm text-silver/50 font-light">
                                    Serious inquiries are typically addressed within 24 hours. Verification may be required for off-market asset data rooms.
                                </p>
                            </div>
                        </div>

                        {/* Interactive Form Area - Second on mobile */}
                        <div className="lg:col-span-7 order-2">
                            <div className="glass-dark p-6 md:p-8 lg:p-12 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stratosphere to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations - Minimal Text */}
            <section className="py-16 md:py-24 bg-obsidian border-t border-titanium-ghost/5 text-center">
                <div className="container-narrow">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-silver/30">Operating From</span>
                    <h2 className="font-serif text-lg md:text-2xl text-titanium mt-3 md:mt-4 opacity-60">Sheridan, Wyoming &bull; Global Remote</h2>
                </div>
            </section>

            <Footer />
        </>
    );
}
