import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Compliance Statement | Aurelux Group LLC',
    description: 'Aurelux Group LLC operates as a coordination and introduction firm. We do not provide legal, tax, financial or insurance services.',
};

export default function CompliancePage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-obsidian pt-32 pb-20">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-5xl text-titanium mb-8">Compliance Statement</h1>

                        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-silver/80 font-light leading-relaxed">
                            <p className="text-lg">
                                Aurelux Group LLC operates as a coordination and introduction firm. We do not provide legal, tax, financial or insurance services.
                            </p>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Aviation and Asset Acquisition</h2>
                                <p>
                                    Aurelux Group LLC coordinates private jet charter and facilitates introductions to off-market aircraft and other high-value assets. All operational, regulatory and safety responsibilities rest exclusively with the operator, seller or relevant provider.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Section 125 Enhancement</h2>
                                <p>
                                    Aurelux Group LLC does not administer insurance products, payroll structures or employee benefit programs. Section 125 enhancement programs are delivered solely by licensed professionals and Department of Insurance-regulated carriers. Companies should obtain independent legal and tax advice before participating in any program.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Confidentiality</h2>
                                <p>
                                    All inquiries are handled discreetly. Sensitive information is processed in accordance with the Aurelux Group LLC privacy policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Independent Review</h2>
                                <p>
                                    Clients are encouraged to obtain independent legal, tax and financial advice before entering into any agreement or program introduced through Aurelux Group LLC.
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
