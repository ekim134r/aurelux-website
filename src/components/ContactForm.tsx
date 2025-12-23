'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// === VALIDATION HELPERS ===
const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validateName = (name: string) => {
    return name.trim().length >= 2;
};

// === PREMIUM INPUT WITH VALIDATION ===
const PremiumInput = ({
    value,
    onChange,
    placeholder,
    type = 'text',
    error,
    rows
}: {
    value: string;
    onChange: (val: string) => void;
    placeholder: string;
    type?: string;
    error?: string;
    rows?: number;
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const showError = touched && error;

    // Textarea version
    if (rows) {
        return (
            <div className="relative w-full">
                <div
                    className={`
                        relative rounded-lg
                        border-2 transition-all duration-300 ease-out
                        bg-obsidian/50
                        ${showError
                            ? 'border-red-500/60'
                            : isFocused
                                ? 'border-stratosphere shadow-[0_0_20px_rgba(26,90,85,0.25)]'
                                : 'border-white/15 hover:border-white/30'
                        }
                    `}
                >
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => { setIsFocused(false); setTouched(true); }}
                        rows={rows}
                        placeholder={placeholder}
                        className="block w-full p-4 bg-transparent text-base font-light text-white focus:outline-none placeholder:text-silver/60 resize-none leading-relaxed"
                    />
                </div>
                <AnimatePresence>
                    {showError && (
                        <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-red-400 text-xs mt-1.5 pl-1"
                        >
                            {error}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    // Input version
    return (
        <div className="relative w-full">
            <motion.div
                className={`
                    relative h-14 md:h-16 rounded-lg
                    border-2 transition-all duration-300 ease-out
                    bg-obsidian/50
                    ${showError
                        ? 'border-red-500/60'
                        : isFocused
                            ? 'border-stratosphere shadow-[0_0_20px_rgba(26,90,85,0.25)]'
                            : 'border-white/15 hover:border-white/30'
                    }
                `}
                whileTap={{ scale: 0.995 }}
            >
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => { setIsFocused(false); setTouched(true); }}
                    placeholder={placeholder}
                    className="absolute inset-0 w-full h-full px-4 bg-transparent text-base font-light text-white focus:outline-none placeholder:text-silver/60"
                />

                {/* Checkmark for valid input */}
                <AnimatePresence>
                    {touched && !error && value.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <svg className="w-5 h-5 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {showError && (
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-400 text-xs mt-1.5 pl-1"
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function ContactForm() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Real-time validation
    useEffect(() => {
        const newErrors: Record<string, string> = {};

        if (formData.firstName && !validateName(formData.firstName)) {
            newErrors.firstName = 'At least 2 characters';
        }
        if (formData.lastName && !validateName(formData.lastName)) {
            newErrors.lastName = 'At least 2 characters';
        }
        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        setErrors(newErrors);
    }, [formData]);

    const isValid =
        validateName(formData.firstName) &&
        validateName(formData.lastName) &&
        validateEmail(formData.email) &&
        formData.message.length >= 10;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Form identification
                    form_type: 'simple_contact',
                    formType: 'Contact Formular',
                    formTitle: 'Website Kontaktanfrage',
                    timestamp: new Date().toISOString(),
                    // Separate name fields for easy filtering
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    // Combined name field for convenience
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    // Other fields
                    email: formData.email,
                    message: formData.message
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 md:py-16 px-6 rounded-lg bg-obsidian/50 border border-stratosphere/30"
            >
                <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-stratosphere/20 border border-stratosphere/40 flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                >
                    <svg className="w-8 h-8 text-stratosphere" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl tracking-wide text-white mb-4">Message Received</h3>
                <p className="text-silver/60 text-sm max-w-md mx-auto mb-8">
                    We will respond within 24-48 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs tracking-[0.2em] uppercase text-stratosphere hover:text-white transition-colors"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Progress indicator */}
            <div className="flex gap-2 mb-6">
                {[formData.firstName, formData.lastName, formData.email, formData.message].map((field, i) => (
                    <motion.div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${field.length > 0 ? 'bg-stratosphere' : 'bg-white/10'
                            }`}
                        initial={false}
                        animate={{ scale: field.length > 0 ? [1, 1.1, 1] : 1 }}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PremiumInput
                    value={formData.firstName}
                    onChange={(v) => setFormData({ ...formData, firstName: v })}
                    placeholder="First Name"
                    error={errors.firstName}
                />
                <PremiumInput
                    value={formData.lastName}
                    onChange={(v) => setFormData({ ...formData, lastName: v })}
                    placeholder="Last Name"
                    error={errors.lastName}
                />
            </div>

            <PremiumInput
                type="email"
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
                placeholder="Email Address"
                error={errors.email}
            />

            <PremiumInput
                rows={4}
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
                placeholder="How can we help? (min. 10 characters)"
                error={formData.message.length > 0 && formData.message.length < 10 ? 'At least 10 characters' : undefined}
            />

            <motion.button
                type="submit"
                disabled={isSubmitting || !isValid}
                className={`
                    w-full px-6 py-4 min-h-[56px] rounded-lg 
                    text-white font-bold uppercase tracking-widest text-xs 
                    flex items-center justify-center gap-3 
                    transition-all duration-300
                    ${isValid
                        ? 'bg-stratosphere hover:bg-stratosphere-bright cursor-pointer'
                        : 'bg-white/10 cursor-not-allowed'
                    }
                `}
                whileHover={isValid ? { scale: 1.02 } : {}}
                whileTap={isValid ? { scale: 0.98 } : {}}
            >
                {isSubmitting ? (
                    <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                ) : (
                    <>
                        Submit Inquiry
                        <motion.span
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </>
                )}
            </motion.button>
        </form>
    );
}
