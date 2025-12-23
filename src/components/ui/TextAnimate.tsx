'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useMemo } from 'react';

type AnimationType =
    | 'fadeIn'
    | 'blurIn'
    | 'blurInUp'
    | 'slideUp'
    | 'slideDown'
    | 'scaleUp';

type ByType = 'character' | 'word' | 'line';

interface TextAnimateProps {
    children: string;
    animation?: AnimationType;
    by?: ByType;
    as?: React.ElementType;
    className?: string;
    delay?: number;
    duration?: number;
    staggerDelay?: number;
    once?: boolean;
}

/**
 * TextAnimate - Premium text reveal animations
 * Inspired by MagicUI, adapted for Aurelux branding
 */
export function TextAnimate({
    children,
    animation = 'blurIn',
    by = 'word',
    as: Component = 'p',
    className = '',
    delay = 0,
    duration = 0.4,
    staggerDelay = 0.03,
    once = true,
}: TextAnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: '-20px' });

    // Split text based on 'by' prop
    const segments = useMemo(() => {
        if (by === 'character') {
            return children.split('');
        } else if (by === 'word') {
            return children.split(' ');
        } else {
            return children.split('\n');
        }
    }, [children, by]);

    // Animation variants
    const getVariants = (): { container: Variants; item: Variants } => {
        const baseTransition = {
            duration,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        };

        switch (animation) {
            case 'blurIn':
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0, filter: 'blur(10px)' },
                        visible: { opacity: 1, filter: 'blur(0px)', transition: baseTransition },
                    },
                };
            case 'blurInUp':
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: baseTransition },
                    },
                };
            case 'slideUp':
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: baseTransition },
                    },
                };
            case 'slideDown':
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0, transition: baseTransition },
                    },
                };
            case 'scaleUp':
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1, transition: baseTransition },
                    },
                };
            default: // fadeIn
                return {
                    container: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: staggerDelay,
                                delayChildren: delay,
                            },
                        },
                    },
                    item: {
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: baseTransition },
                    },
                };
        }
    };

    const variants = getVariants();

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants.container}
            className={`inline-flex flex-wrap ${className}`}
            style={{ display: 'inline' }}
        >
            <Component className="contents">
                {segments.map((segment, i) => (
                    <motion.span
                        key={i}
                        variants={variants.item}
                        className="inline-block"
                        style={{ whiteSpace: by === 'character' ? 'pre' : 'normal' }}
                    >
                        {segment}
                        {by === 'word' && i < segments.length - 1 ? ' ' : ''}
                    </motion.span>
                ))}
            </Component>
        </motion.div>
    );
}

export default TextAnimate;
