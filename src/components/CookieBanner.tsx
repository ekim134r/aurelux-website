'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isEU, setIsEU] = useState(false);

    useEffect(() => {
        // Check consent
        const consent = localStorage.getItem('aurelux-cookie-consent');

        // Check Geo-Location from cookie set by middleware
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };
        const country = getCookie('aurelux-geo-country') || 'US';

        // Official EU + UK list
        const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'UK'];
        const isRegionEU = euCountries.includes(country);

        // Only update state if different (React bails out automatically if same)
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsEU(isRegionEU);

        if (!consent) {
            // For EU: Show immediately (Prior Consent required)
            // For US: Delay is fine
            const delay = isRegionEU ? 500 : 2000;

            const timer = setTimeout(() => {
                setIsVisible(true);
                setIsAnimating(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, []); // Run once on mount

    const handleAccept = () => {
        localStorage.setItem('aurelux-cookie-consent', 'accepted');
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 500);
    };

    const handleDecline = () => {
        localStorage.setItem('aurelux-cookie-consent', 'declined');
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 500);
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-[100] p-4 transition-all duration-500 ease-out ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="max-w-4xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-sm p-6 md:p-8"
                    style={{
                        background: 'linear-gradient(145deg, rgba(26, 34, 45, 0.98) 0%, rgba(16, 24, 32, 0.99) 100%)',
                        boxShadow: '0 -8px 40px rgba(0, 0, 0, 0.4), 0 -2px 20px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(240, 242, 245, 0.08)',
                        border: '1px solid rgba(26, 90, 85, 0.15)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#1A5A55]/20" />

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Content */}
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-px bg-[#1A5A55]" />
                                <h3 className="font-serif text-sm tracking-ultra uppercase text-[#1A5A55]">
                                    {isEU ? 'GDPR Consent Required' : 'Privacy Notice'}
                                </h3>
                            </div>
                            <p className="text-sm text-[#D8DCE2] font-light leading-relaxed">
                                {isEU
                                    ? "We respect your data sovereignty. We use cookies only for essential site function and anonymous analytics. Your explicit consent is required for non-essential tracking."
                                    : "We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies."
                                }
                                {' '}
                                <Link
                                    href="/privacy"
                                    className="text-[#1A5A55] hover:text-[#F0F2F5] transition-colors underline-offset-4 hover:underline"
                                >
                                    Read our Privacy Policy
                                </Link>
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 flex-shrink-0">
                            <button
                                onClick={handleDecline}
                                className="px-5 py-3 text-xs tracking-ultra uppercase text-[#9BA3AF] border border-[#9BA3AF]/30 rounded-sm transition-all duration-300 hover:text-[#F0F2F5] hover:border-[#F0F2F5]/50"
                            >
                                {isEU ? 'Reject All' : 'Decline'}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 text-xs tracking-ultra uppercase text-[#0A0E14] rounded-sm transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #1A5A55 0%, #A88B4A 100%)',
                                    boxShadow: '0 4px 15px rgba(26, 90, 85, 0.3)',
                                }}
                            >
                                {isEU ? 'Accept Selected' : 'Accept All'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
