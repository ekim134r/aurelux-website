'use client';

import { useState, useId } from 'react';

interface WaveInputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: string;
    required?: boolean;
    className?: string;
    error?: string;
}

/**
 * WaveInput - Premium animated input with wave label effect
 * Inspired by Uiverse, adapted for Aurelux dark theme
 */
export function WaveInput({
    value,
    onChange,
    label,
    type = 'text',
    required = false,
    className = '',
    error,
}: WaveInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const id = useId();
    const isActive = isFocused || value.length > 0;

    // Split label into characters for wave animation
    const labelChars = label.split('');

    return (
        <div className={`wave-group relative ${className}`}>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required}
                className={`
                    wave-input
                    w-full text-base font-light
                    py-3 px-0
                    bg-transparent border-0 border-b-2
                    text-titanium placeholder-transparent
                    focus:outline-none
                    transition-colors duration-300
                    ${error
                        ? 'border-red-500/60'
                        : isFocused
                            ? 'border-stratosphere'
                            : 'border-white/20'
                    }
                `}
                placeholder={label}
            />

            {/* Animated bar that expands from center */}
            <span className="wave-bar absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                <span
                    className={`
                        absolute inset-y-0 left-1/2 right-1/2
                        bg-gradient-to-r from-stratosphere via-stratosphere-bright to-heritage
                        transition-all duration-300 ease-out
                        ${isFocused ? 'left-0 right-0' : ''}
                    `}
                />
            </span>

            {/* Animated wave label */}
            <label
                htmlFor={id}
                className="wave-label absolute left-0 top-3 flex pointer-events-none"
            >
                {labelChars.map((char, index) => (
                    <span
                        key={index}
                        className={`
                            wave-label-char
                            inline-block
                            transition-all duration-200 ease-out
                            ${isActive
                                ? 'text-stratosphere text-xs -translate-y-6'
                                : 'text-silver/50 text-base'
                            }
                        `}
                        style={{
                            transitionDelay: `${index * 0.03}s`,
                        }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </label>

            {/* Error message */}
            {error && (
                <p className="text-red-400 text-xs mt-1.5">{error}</p>
            )}
        </div>
    );
}

export default WaveInput;
