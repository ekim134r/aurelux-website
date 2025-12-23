'use client';

import { useState } from 'react';

interface FloatingInputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    isTextarea?: boolean;
    rows?: number;
    autoComplete?: string;
}

export function FloatingInput({
    label,
    name,
    type = 'text',
    value,
    onChange,
    required = false,
    isTextarea = false,
    rows = 4,
    autoComplete = 'off',
}: FloatingInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const isActive = isFocused || value.length > 0;

    const baseClasses = `
        w-full bg-transparent border rounded-xl px-4 pt-6 pb-3
        text-titanium font-light transition-all duration-300
        focus:outline-none
        ${isActive
            ? 'border-stratosphere'
            : 'border-white/20 hover:border-white/40'
        }
    `;

    const labelClasses = `
        absolute left-4 pointer-events-none
        text-silver/60 transition-all duration-300 ease-out
        ${isActive
            ? 'top-2 text-[10px] tracking-wider uppercase text-stratosphere'
            : 'top-1/2 -translate-y-1/2 text-sm'
        }
    `;

    return (
        <div className="relative group">
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    rows={rows}
                    className={`${baseClasses} resize-none`}
                    autoComplete={autoComplete}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    className={baseClasses}
                    autoComplete={autoComplete}
                />
            )}
            <label
                htmlFor={name}
                className={isTextarea
                    ? `absolute left-4 pointer-events-none text-silver/60 transition-all duration-300 ease-out ${isActive ? 'top-2 text-[10px] tracking-wider uppercase text-stratosphere' : 'top-4 text-sm'}`
                    : labelClasses
                }
            >
                {label}
            </label>

            {/* Bottom glow on focus */}
            <div
                className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                    bg-gradient-to-r from-transparent via-stratosphere to-transparent
                    transition-all duration-500
                    ${isFocused ? 'w-full' : 'w-0'}
                `}
            />
        </div>
    );
}

export default FloatingInput;
