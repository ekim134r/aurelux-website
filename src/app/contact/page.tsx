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

            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light via-obsidian to-obsidian" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(8, 37, 35, 0.5) 0%, transparent 50%)',
                    }}
                />

                <div className="container-narrow relative z-10 text-center">
                    <p className="text-xs tracking-ultra uppercase text-stratosphere mb-6 emerge-from-shadow">
                        Contact
                    </p>
                    <h1 className="font-serif text-titanium mb-8 gradient-text" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                        Initiate Dialogue
                    </h1>
                    <p className="text-lg text-silver font-light max-w-2xl mx-auto">
                        If you're looking to engage, submit your details below. Serious inquiries
                        receive a response within 24-48 hours through secure channels.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section bg-obsidian">
                <div className="container-narrow">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <div className="glass p-10 rounded-sm">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                                Direct Contact
                            </p>
                            <h2 className="font-serif text-titanium mb-8">
                                Aurelux Group LLC
                            </h2>

                            <div className="space-y-8">
                                <div>
                                    <p className="text-xs tracking-ultra uppercase text-silver mb-2">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:sales@aureluxgroup.com"
                                        className="text-titanium hover:text-titanium-muted transition-colors"
                                    >
                                        sales@aureluxgroup.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs tracking-ultra uppercase text-silver mb-2">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+16814613153"
                                        className="text-titanium hover:text-titanium-muted transition-colors"
                                    >
                                        +1 681 461 3153
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs tracking-ultra uppercase text-silver mb-2">
                                        Location
                                    </p>
                                    <p className="text-titanium">
                                        Sheridan, WY, USA
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-titanium-ghost">
                                    <p className="text-sm text-silver font-light leading-relaxed">
                                        All inquiries are treated with complete confidentiality.
                                        We respond through secure channels only.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-tight bg-obsidian-light">
                <div className="container-narrow">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-ultra uppercase text-stratosphere mb-4">
                            Common Questions
                        </p>
                        <h2 className="font-serif text-titanium">
                            Before You Inquire
                        </h2>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-8">
                        <div className="p-6 border-b border-titanium-ghost">
                            <h3 className="font-serif text-lg text-titanium mb-3">
                                What types of inquiries do you accept?
                            </h3>
                            <p className="text-sm text-silver font-light">
                                We work with serious buyers, sellers, and decision makers only.
                                All inquiries should be specific and qualified.
                            </p>
                        </div>

                        <div className="p-6 border-b border-titanium-ghost">
                            <h3 className="font-serif text-lg text-titanium mb-3">
                                How quickly will I receive a response?
                            </h3>
                            <p className="text-sm text-silver font-light">
                                Qualified inquiries receive a response within 24-48 hours
                                through secure channels.
                            </p>
                        </div>

                        <div className="p-6 border-b border-titanium-ghost">
                            <h3 className="font-serif text-lg text-titanium mb-3">
                                Is my information kept confidential?
                            </h3>
                            <p className="text-sm text-silver font-light">
                                Yes. All information is treated with complete confidentiality.
                                We do not share data with third parties.
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="font-serif text-lg text-titanium mb-3">
                                What happens after I submit an inquiry?
                            </h3>
                            <p className="text-sm text-silver font-light">
                                Our team reviews your request and responds with next steps
                                if your inquiry aligns with our services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
