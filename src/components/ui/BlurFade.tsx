'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface BlurFadeProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    inView?: boolean;
    once?: boolean;
}

/**
 * BlurFade - Premium image/content loading animation
 * Inspired by MagicUI, adapted for Aurelux branding
 */
export function BlurFade({
    children,
    className = '',
    delay = 0,
    duration = 0.6,
    yOffset = 8,
    inView = true,
    once = true,
}: BlurFadeProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: '-50px' });

    const shouldAnimate = inView ? isInView : true;

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: yOffset,
                filter: 'blur(8px)',
            }}
            animate={shouldAnimate ? {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
            } : {
                opacity: 0,
                y: yOffset,
                filter: 'blur(8px)',
            }}
            transition={{
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // Premium easing
            }}
        >
            {children}
        </motion.div>
    );
}

export default BlurFade;
