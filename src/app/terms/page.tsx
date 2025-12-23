import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Terms of Use | Aurelux Group LLC',
    description: 'Terms of use for the Aurelux Group LLC website. By using this website, you agree to the following terms.',
};

export default function TermsPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-obsidian pt-32 pb-20">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-5xl text-titanium mb-8">Terms of Use</h1>

                        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-silver/80 font-light leading-relaxed">
                            <p className="text-lg">
                                By using this website, you agree to the following terms.
                            </p>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Website Purpose</h2>
                                <p>
                                    This website provides general information regarding Aurelux Group LLC&apos;s services, including private aviation charter coordination, off-market asset acquisition and introductions to Section 125 enhancement programs. All content is for informational purposes only.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">No Guarantee of Service</h2>
                                <p>
                                    Submission of an inquiry does not obligate Aurelux Group LLC to provide services. All services are offered subject to availability, suitability and internal review.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">No Professional Advice</h2>
                                <p>
                                    Information on this site should not be interpreted as legal, tax, financial or insurance advice. Independent professional guidance is recommended for all matters involving aviation, asset acquisition or employee benefit programs.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Third-Party Platforms</h2>
                                <p>
                                    Certain functions, including questionnaires and scheduling features, may redirect to secure third-party platforms. Aurelux Group LLC is not responsible for external content or systems.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Limitation of Liability</h2>
                                <p>
                                    Aurelux Group LLC is not liable for any direct or indirect damages arising from website use, reliance on information or interaction with linked systems.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Intellectual Property</h2>
                                <p>
                                    All website content is the property of Aurelux Group LLC unless otherwise indicated. Reproduction or unauthorized use is prohibited.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Governing Law</h2>
                                <p>
                                    These terms are governed by the laws applicable in the jurisdiction of Aurelux Group LLC&apos;s primary operations.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
