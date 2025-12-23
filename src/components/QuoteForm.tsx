'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// === ANIMATION CONFIGS ===
const springTransition = { type: "spring" as const, stiffness: 400, damping: 35 };
const smoothTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

// === PREMIUM INPUT COMPONENT ===
export const PremiumInput = ({
    value,
    onChange,
    placeholder,
    type = 'text',
    min,
}: {
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
    type?: string;
    min?: string;
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative w-full">
            {/* Simple clean input container */}
            <div
                className={`
                    relative h-14 md:h-16 rounded-lg
                    border transition-all duration-300 ease-out
                    bg-obsidian/50
                    ${isFocused
                        ? 'border-stratosphere shadow-[0_0_15px_rgba(26,90,85,0.2)]'
                        : 'border-white/15 hover:border-white/25'
                    }
                `}
            >
                {/* Input */}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    min={min}
                    placeholder={placeholder}
                    className={`
                        absolute inset-0 w-full h-full px-4
                        bg-transparent text-base font-light text-white
                        focus:outline-none
                        placeholder:text-silver/70 placeholder:font-light
                        ${type === 'date' ? '[&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer' : ''}
                    `}
                />
            </div>
        </div>
    );
};


// === TRIP TYPE TOGGLE ===
const TripTypeToggle = ({
    tripType,
    onChange
}: {
    tripType: 'one-way' | 'round-trip';
    onChange: (type: 'one-way' | 'round-trip') => void;
}) => {
    return (
        <div className="relative flex p-1 rounded-full bg-white/[0.03] border border-white/10">
            {/* Sliding indicator */}
            <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-stratosphere shadow-lg"
                initial={false}
                animate={{
                    left: tripType === 'one-way' ? '4px' : '50%',
                    right: tripType === 'one-way' ? '50%' : '4px',
                }}
                transition={springTransition}
            />

            {/* Buttons */}
            {(['one-way', 'round-trip'] as const).map((type) => (
                <button
                    key={type}
                    type="button"
                    onClick={() => onChange(type)}
                    className={`
                        relative z-10 flex-1 px-4 py-2 rounded-full
                        text-[10px] uppercase tracking-widest font-medium
                        transition-colors duration-200 min-h-[40px]
                        ${tripType === type ? 'text-white' : 'text-silver/50 hover:text-silver/70'}
                    `}
                >
                    {type.replace('-', ' ')}
                </button>
            ))}
        </div>
    );
};

// === PASSENGER SELECTOR ===
const PassengerSelector = ({
    count,
    onChange
}: {
    count: number;
    onChange: (n: number) => void;
}) => {
    const [showCustom, setShowCustom] = useState(count > 8);

    const handleSelect = (num: number) => {
        setShowCustom(false);
        onChange(num);
    };

    const handleCustom = () => {
        setShowCustom(true);
        if (count <= 8) onChange(9);
    };

    return (
        <div className="space-y-3">
            <label className="text-[10px] text-stratosphere uppercase tracking-[0.2em] font-medium">
                Passengers
            </label>

            {/* Number grid */}
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                    const isActive = !showCustom && count === num;
                    return (
                        <motion.button
                            key={num}
                            type="button"
                            onClick={() => handleSelect(num)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                aspect-square min-h-[48px] rounded-lg
                                flex items-center justify-center
                                font-serif text-lg transition-all duration-200
                                ${isActive
                                    ? 'bg-stratosphere/20 border-2 border-stratosphere text-titanium shadow-[0_0_20px_rgba(26,90,85,0.25)]'
                                    : 'bg-white/[0.03] border border-white/10 text-silver/50 hover:border-white/20 hover:text-silver/70'
                                }
                            `}
                        >
                            {num}
                        </motion.button>
                    );
                })}

                {/* 9+ button */}
                <motion.button
                    type="button"
                    onClick={handleCustom}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                        min-h-[48px] rounded-lg col-span-5 sm:col-span-1
                        flex items-center justify-center
                        text-xs uppercase tracking-widest transition-all duration-200
                        ${showCustom
                            ? 'bg-stratosphere/20 border-2 border-stratosphere text-titanium shadow-[0_0_20px_rgba(26,90,85,0.25)]'
                            : 'bg-white/[0.03] border border-white/10 text-silver/50 hover:border-white/20 hover:text-silver/70'
                        }
                    `}
                >
                    9+
                </motion.button>
            </div>

            {/* Custom input */}
            <AnimatePresence>
                {showCustom && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={smoothTransition}
                    >
                        <PremiumInput
                            value={count.toString()}
                            onChange={(v) => {
                                const val = parseInt(v);
                                if (!isNaN(val) && val > 0) onChange(val);
                                else if (v === '') onChange(1);
                            }}
                            type="number"
                            placeholder="Number of Passengers"
                            min="1"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// === MAIN QUOTE FORM ===
export default function QuoteForm() {
    const [step, setStep] = useState(1);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form data
    const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const [pax, setPax] = useState(1);
    const [contact, setContact] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

    // Progressive reveal logic
    const showArrival = departure.length > 2;
    const showDate = arrival.length > 2;
    const showPax = date.length > 0;
    const canContinue = pax > 0 && showPax;

    // Email validation
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Min date = today
    const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

    // Check if selected date is valid (not in past)
    const isDateValid = date >= minDate;

    // Combined name helper
    const getFullName = () => `${contact.firstName} ${contact.lastName}`.trim();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validation with custom error messages
        if (!contact.firstName.trim()) {
            setError('Please enter your first name');
            return;
        }
        if (!contact.lastName.trim()) {
            setError('Please enter your last name');
            return;
        }
        if (!contact.email.trim()) {
            setError('Please enter your email');
            return;
        }
        if (!isValidEmail(contact.email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (date && date < minDate) {
            setError('Date cannot be in the past');
            return;
        }

        setSubmitting(true);
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Form identification
                    form_type: 'jet_request',
                    formType: 'Aviation Lead',
                    formTitle: 'Private Jet Quote Request',
                    timestamp: new Date().toISOString(),
                    // Flight details
                    flightDetails: {
                        departure,
                        arrival,
                        date,
                        passengers: pax,
                        tripType
                    },
                    // Contact with separate name fields
                    firstName: contact.firstName,
                    lastName: contact.lastName,
                    name: getFullName(),
                    email: contact.email,
                    phone: contact.phone,
                    message: contact.message,
                    // Legacy nested structure for compatibility
                    contact: {
                        firstName: contact.firstName,
                        lastName: contact.lastName,
                        name: getFullName(),
                        email: contact.email,
                        phone: contact.phone,
                        message: contact.message
                    }
                }),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError('Failed to send. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('Connection error. Please check your internet.');
        } finally {
            setSubmitting(false);
        }
    };

    const resetForm = () => {
        setSubmitted(false);
        setStep(1);
        setDeparture('');
        setArrival('');
        setDate('');
        setPax(1);
        setContact({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    };

    // === SUCCESS STATE ===
    if (submitted) {
        return (
            <div className="glass-panel min-h-[450px] flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={springTransition}
                    className="space-y-6"
                >
                    <div className="w-20 h-20 mx-auto rounded-full border border-stratosphere/40 bg-stratosphere/10 flex items-center justify-center shadow-[0_0_40px_rgba(26,90,85,0.3)]">
                        <span className="text-3xl">✨</span>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif text-titanium mb-2">Request Sent</h3>
                        <p className="text-silver/70 text-sm">Our concierge will contact you shortly.</p>
                    </div>
                    <button
                        onClick={resetForm}
                        className="text-xs uppercase tracking-widest text-stratosphere hover:text-titanium transition-colors"
                    >
                        New Request
                    </button>
                </motion.div>
            </div>
        );
    }

    // === STEP 2: CONTACT DETAILS ===
    if (step === 2) {
        return (
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={smoothTransition}
                className="glass-panel p-6 md:p-8 min-h-[450px] flex flex-col"
            >
                {/* Back button */}
                <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-stratosphere text-xs uppercase tracking-widest mb-6 hover:text-titanium transition-colors flex items-center gap-2 w-fit"
                >
                    <span>←</span> Edit Journey
                </button>

                <h3 className="text-xl font-serif text-titanium mb-6">Personal Details</h3>

                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                    <div className="space-y-4 flex-1">
                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <PremiumInput
                                value={contact.firstName}
                                onChange={(v) => setContact({ ...contact, firstName: v })}
                                placeholder="First Name"
                            />
                            <PremiumInput
                                value={contact.lastName}
                                onChange={(v) => setContact({ ...contact, lastName: v })}
                                placeholder="Last Name"
                            />
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <PremiumInput
                                value={contact.email}
                                onChange={(v) => setContact({ ...contact, email: v })}
                                placeholder="Email Address"
                                type="email"
                            />
                            <PremiumInput
                                value={contact.phone}
                                onChange={(v) => setContact({ ...contact, phone: v })}
                                placeholder="Phone Number"
                                type="tel"
                            />
                        </div>

                        {/* Message textarea */}
                        <div className="relative">
                            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 focus-within:ring-2 focus-within:ring-stratosphere/50 transition-all duration-300 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent">
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                                <textarea
                                    value={contact.message}
                                    onChange={(e) => setContact({ ...contact, message: e.target.value })}
                                    placeholder=" "
                                    rows={3}
                                    className="block w-full bg-transparent p-4 pt-7 text-base font-light text-titanium focus:outline-none resize-none placeholder-transparent"
                                />
                                <label className="absolute left-4 top-2 text-[10px] text-stratosphere-bright tracking-[0.15em] uppercase font-medium pointer-events-none">
                                    Special Requests
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit footer */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                        <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            <span>Encrypted</span>
                        </div>

                        {/* Custom Error Message */}
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="w-full p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center"
                                >
                                    ⚠️ {error}
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.button
                            type="submit"
                            disabled={submitting || !contact.firstName || !contact.lastName || !contact.email || !isValidEmail(contact.email)}
                            className={`
                                w-full sm:w-auto px-8 py-3 min-h-[48px] rounded-lg 
                                font-bold uppercase tracking-widest text-xs 
                                transition-all duration-300
                                ${(contact.firstName && contact.lastName && contact.email && isValidEmail(contact.email))
                                    ? 'bg-stratosphere text-white hover:bg-stratosphere-bright shadow-[0_4px_20px_rgba(26,90,85,0.4)] hover:shadow-[0_6px_30px_rgba(26,90,85,0.5)] cursor-pointer'
                                    : 'bg-white/10 text-white/50 cursor-not-allowed'
                                }
                            `}
                            whileHover={(contact.firstName && contact.lastName && contact.email) ? { scale: 1.02 } : {}}
                            whileTap={(contact.firstName && contact.lastName && contact.email) ? { scale: 0.98 } : {}}
                        >
                            {submitting ? (
                                <motion.div
                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mx-auto"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                            ) : !contact.firstName ? (
                                'Enter First Name'
                            ) : !contact.lastName ? (
                                'Enter Last Name'
                            ) : !contact.email ? (
                                'Enter Email'
                            ) : !isValidEmail(contact.email) ? (
                                'Invalid Email'
                            ) : (
                                <>Submit Request →</>
                            )}
                        </motion.button>
                    </div>
                </form>
            </motion.div>
        );
    }

    // === STEP 1: JOURNEY PLANNER ===
    return (
        <div className="glass-panel p-6 md:p-8 min-h-[450px] flex flex-col">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-serif text-titanium tracking-tight">
                        Plan Your <span className="text-stratosphere italic">Flight</span>
                    </h2>
                    <p className="text-silver/70 text-sm font-light mt-1">Where would you like to fly?</p>
                </div>

                {/* Trip type toggle */}
                <div className="w-full md:w-auto">
                    <TripTypeToggle tripType={tripType} onChange={setTripType} />
                </div>
            </div>

            {/* Form fields with animation wrapper */}
            <div className="flex-1 space-y-4">
                {/* Departure - always visible */}
                <PremiumInput
                    value={departure}
                    onChange={setDeparture}
                    placeholder="From where?"
                />

                {/* Arrival - progressive reveal */}
                <AnimatePresence>
                    {showArrival && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={smoothTransition}
                        >
                            <PremiumInput
                                value={arrival}
                                onChange={setArrival}
                                placeholder="To where?"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Date - progressive reveal */}
                <AnimatePresence>
                    {showDate && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={smoothTransition}
                        >
                            <PremiumInput
                                value={date}
                                onChange={setDate}
                                placeholder="When?"
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Passengers - progressive reveal */}
                <AnimatePresence>
                    {showPax && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={smoothTransition}
                        >
                            <PassengerSelector count={pax} onChange={setPax} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Continue button */}
            <AnimatePresence>
                {canContinue && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={smoothTransition}
                        className="mt-8"
                    >
                        <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="w-full md:w-auto group flex items-center justify-center md:justify-start gap-3 px-8 py-3 min-h-[48px] rounded-lg border border-stratosphere/40 text-stratosphere hover:bg-stratosphere hover:text-white transition-all uppercase tracking-widest text-xs font-bold"
                        >
                            Continue to Details
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
