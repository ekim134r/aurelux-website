'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    if (submitted) {
        return (
            <div className="text-center py-16">
                <div className="mb-6">
                    <span className="inline-block w-16 h-16 rounded-full border border-stratosphere flex items-center justify-center">
                        <svg className="w-8 h-8 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                </div>
                <h3 className="font-serif text-2xl tracking-wide text-titanium mb-4">
                    Message Received
                </h3>
                <p className="text-silver text-sm max-w-md mx-auto">
                    Your inquiry has been submitted. We will respond within 24-48 hours through secure channels.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs tracking-ultra uppercase text-silver hover:text-titanium transition-colors duration-300"
                >
                    Send Another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="firstName"
                        className="block text-xs tracking-ultra uppercase text-silver"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="bg-obsidian-light"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="lastName"
                        className="block text-xs tracking-ultra uppercase text-silver"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="bg-obsidian-light"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="block text-xs tracking-ultra uppercase text-silver"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-obsidian-light"
                />
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label
                    htmlFor="message"
                    className="block text-xs tracking-ultra uppercase text-silver"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-obsidian-light resize-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-btn w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-3">
                        <span className="w-4 h-4 border border-titanium border-t-transparent rounded-full animate-spin" />
                        Transmitting
                    </span>
                ) : (
                    'Submit Inquiry'
                )}
            </button>
        </form>
    );
}
