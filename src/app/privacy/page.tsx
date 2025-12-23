import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy | Aurelux Group LLC',
    description: 'Aurelux Group LLC privacy policy. Learn how we collect, use and protect your information.',
};

export default function PrivacyPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-obsidian pt-32 pb-20">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-5xl text-titanium mb-8">Privacy Policy</h1>

                        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-silver/80 font-light leading-relaxed">
                            <p className="text-lg">
                                Aurelux Group LLC respects the privacy of all clients and visitors. This policy explains how information is collected, used and protected when you interact with our website or contact our team.
                            </p>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Information We Collect</h2>
                                <p>
                                    Aurelux Group LLC may collect information that you voluntarily provide, including your name, email address, phone number, company information and details relating to your inquiry. This information is obtained through contact forms, direct email communication or scheduling tools.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">How We Use Information</h2>
                                <p>Information is used strictly for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Responding to inquiries</li>
                                    <li>Coordinating charter, acquisition or Section 125 related communication</li>
                                    <li>Facilitating introductions to approved partners where relevant</li>
                                    <li>Maintaining internal records and compliance protocols</li>
                                </ul>
                                <p className="mt-4">Aurelux Group LLC does not sell or distribute personal information.</p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Third-Party Services</h2>
                                <p>
                                    Certain functions, including questionnaires, scheduling platforms and program-related introductions, operate through third-party systems. Information submitted through those systems is governed by the respective provider&apos;s privacy policy.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Data Security</h2>
                                <p>
                                    Aurelux Group LLC maintains reasonable administrative and technical measures to protect information from unauthorized access or disclosure.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Your Rights</h2>
                                <p>
                                    Where legally permitted, you may request correction or deletion of personal information held by Aurelux Group LLC.
                                </p>
                            </section>

                            <section>
                                <h2 className="font-serif text-2xl text-titanium mb-4">Updates</h2>
                                <p>
                                    This policy may be updated from time to time. The most recent version will appear on this page.
                                </p>
                            </section>

                            <section className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-sm text-silver/50">
                                    For questions regarding this policy: <a href="mailto:sales@aureluxgroup.com" className="text-stratosphere hover:text-stratosphere-bright transition-colors">sales@aureluxgroup.com</a>
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
