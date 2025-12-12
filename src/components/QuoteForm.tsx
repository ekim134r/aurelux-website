'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        date: '',
        returnDate: '',
        passengers: '1',
        tripType: 'one-way',
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 2) {
            setStep(2);
            return;
        }

        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="glass-dark p-8 md:p-10 rounded-sm text-center">
                <div className="mb-6 flex justify-center">
                    <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-stratosphere">
                        <svg className="w-8 h-8 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                </div>
                <h3 className="font-serif text-2xl tracking-wide text-titanium mb-4">
                    Request Received
                </h3>
                <p className="text-silver text-sm max-w-md mx-auto mb-6">
                    Our team will review your inquiry and respond within 24-48 hours through secure channels.
                </p>
                <button
                    onClick={() => { setSubmitted(false); setStep(1); }}
                    className="text-xs tracking-ultra uppercase text-silver hover:text-titanium transition-colors duration-300"
                >
                    Submit Another Request
                </button>
            </div>
        );
    }

    return (
        <div className="glass-dark p-6 md:p-8 rounded-sm">
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 mb-8">
                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-titanium' : 'text-silver'}`}>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${step >= 1 ? 'border-stratosphere bg-stratosphere/20' : 'border-titanium-ghost'}`}>
                        1
                    </span>
                    <span className="text-xs tracking-wide hidden sm:block">Flight Details</span>
                </div>
                <div className="flex-1 h-px bg-titanium-ghost" />
                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-titanium' : 'text-silver'}`}>
                    <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs ${step >= 2 ? 'border-stratosphere bg-stratosphere/20' : 'border-titanium-ghost'}`}>
                        2
                    </span>
                    <span className="text-xs tracking-wide hidden sm:block">Contact Info</span>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="space-y-6 fade-in-stagger">
                        {/* Trip Type */}
                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, tripType: 'one-way' })}
                                className={`flex-1 py-3 px-4 text-xs tracking-ultra uppercase border rounded-sm transition-all duration-300 ${formData.tripType === 'one-way'
                                        ? 'border-stratosphere bg-stratosphere/20 text-titanium'
                                        : 'border-titanium-ghost text-silver hover:border-titanium-subtle'
                                    }`}
                            >
                                One Way
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, tripType: 'round-trip' })}
                                className={`flex-1 py-3 px-4 text-xs tracking-ultra uppercase border rounded-sm transition-all duration-300 ${formData.tripType === 'round-trip'
                                        ? 'border-stratosphere bg-stratosphere/20 text-titanium'
                                        : 'border-titanium-ghost text-silver hover:border-titanium-subtle'
                                    }`}
                            >
                                Round Trip
                            </button>
                        </div>

                        {/* Departure & Destination */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Departure
                                </label>
                                <input
                                    type="text"
                                    placeholder="City or Airport"
                                    value={formData.departure}
                                    onChange={(e) => setFormData({ ...formData, departure: e.target.value })}
                                    required
                                    className="bg-obsidian/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Destination
                                </label>
                                <input
                                    type="text"
                                    placeholder="City or Airport"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                    required
                                    className="bg-obsidian/50"
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Departure Date
                                </label>
                                <input
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    required
                                    className="bg-obsidian/50"
                                />
                            </div>
                            {formData.tripType === 'round-trip' && (
                                <div className="space-y-2">
                                    <label className="block text-xs tracking-ultra uppercase text-silver">
                                        Return Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.returnDate}
                                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                                        className="bg-obsidian/50"
                                    />
                                </div>
                            )}
                            {formData.tripType === 'one-way' && (
                                <div className="space-y-2">
                                    <label className="block text-xs tracking-ultra uppercase text-silver">
                                        Passengers
                                    </label>
                                    <select
                                        value={formData.passengers}
                                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                                        className="bg-obsidian/50 w-full"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                                            <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {formData.tripType === 'round-trip' && (
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Passengers
                                </label>
                                <select
                                    value={formData.passengers}
                                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                                    className="bg-obsidian/50 w-full"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <button type="submit" className="magnetic-btn w-full">
                            Continue to Contact
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 fade-in-stagger">
                        {/* Summary */}
                        <div className="p-4 border border-titanium-ghost rounded-sm bg-obsidian/30">
                            <p className="text-xs tracking-ultra uppercase text-silver mb-2">Your Request</p>
                            <p className="text-titanium">
                                {formData.departure} → {formData.destination}
                            </p>
                            <p className="text-silver text-sm">
                                {formData.date} • {formData.passengers} passenger{formData.passengers !== '1' ? 's' : ''}
                                {formData.tripType === 'round-trip' && formData.returnDate && ` • Return: ${formData.returnDate}`}
                            </p>
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="text-xs text-stratosphere hover:text-titanium transition-colors mt-2"
                            >
                                Edit Details
                            </button>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-obsidian/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-xs tracking-ultra uppercase text-silver">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="bg-obsidian/50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs tracking-ultra uppercase text-silver">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="bg-obsidian/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-xs tracking-ultra uppercase text-silver">
                                Additional Notes <span className="text-silver/50">(Optional)</span>
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Special requests, catering preferences, or additional information..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="bg-obsidian/50 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="magnetic-btn w-full disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-3">
                                    <span className="w-4 h-4 border border-titanium border-t-transparent rounded-full animate-spin" />
                                    Submitting
                                </span>
                            ) : (
                                'Request Quote'
                            )}
                        </button>

                        <p className="text-xs text-silver/60 text-center">
                            By submitting, you agree to our{' '}
                            <Link href="/privacy" className="text-silver hover:text-titanium transition-colors">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
