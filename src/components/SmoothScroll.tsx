'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            // Longer duration = smoother, more elegant feel
            duration: 1.8,
            // Premium easing curve - very smooth deceleration
            easing: (t) => {
                // Custom ease-out cubic for buttery smoothness
                return 1 - Math.pow(1 - t, 4);
            },
            orientation: 'vertical',
            smoothWheel: true,
            // Higher multiplier for more responsive touch
            touchMultiplier: 1.5,
            // Infinite scroll disabled for cleaner behavior
            infinite: false,
            // Lower lerp = smoother but less responsive (0.1 is very smooth)
            lerp: 0.075,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
