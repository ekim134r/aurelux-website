import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Cookie Policy | Aurelux Group LLC',
    description: 'Aurelux Group LLC cookie policy. We use minimal cookies necessary for basic site functionality, security and performance analytics.',
};

export default function CookiesPage() {
    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-obsidian pt-32 pb-20">
                <div className="container-narrow">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-5xl text-titanium mb-8">Cookie Policy</h1>

                        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-silver/80 font-light leading-relaxed">
                            <p className="text-lg">
                                Aurelux Group LLC may use minimal cookies necessary for basic site functionality, security and performance analytics. No advertising or behavioral tracking cookies are used.
                            </p>

                            <p>
                                Visitors may manage cookie settings through their browser at any time.
                            </p>

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
