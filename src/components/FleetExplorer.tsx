'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type FleetCategory = {
    title: string;
    range: string;
    passengers: string;
    description: string;
    specs: string[];
    image: string;
    imagePlaceholder: string; // Keep as fallback/background
};

const fleetCategories: FleetCategory[] = [
    {
        title: 'Light Jets',
        range: '1,500 - 2,200 nm',
        passengers: '6 - 8 PAX',
        description: 'Ideal for regional flights and time-sensitive business travel. Access smaller airports closer to your final destination.',
        specs: ['Citation CJ4', 'Phenom 300E', 'Learjet 75'],
        image: 'jet-exterior.png',
        imagePlaceholder: 'from-blue-900 via-slate-900 to-black',
    },
    {
        title: 'Midsize Jets',
        range: '2,500 - 3,500 nm',
        passengers: '8 - 10 PAX',
        description: 'Coast-to-coast capability with stand-up cabin comfort. Perfect balance of performance and efficiency.',
        specs: ['Citation Latitude', 'Challenger 350', 'Hawker 900XP'],
        image: 'jet-exterior.png',
        imagePlaceholder: 'from-indigo-950 via-slate-900 to-black',
    },
    {
        title: 'Super-Midsize',
        range: '3,500 - 4,500 nm',
        passengers: '9 - 12 PAX',
        description: 'Transcontinental range with enhanced baggage capacity and full-service galleys.',
        specs: ['Challenger 3500', 'Citation Longitude', 'Praetor 600'],
        image: 'jet-exterior.png',
        imagePlaceholder: 'from-slate-800 via-gray-900 to-black',
    },
    {
        title: 'Heavy Jets',
        range: '4,500 - 6,500 nm',
        passengers: '12 - 16 PAX',
        description: 'Intercontinental missions with full cabin amenities, flight attendant service, and sleeping configurations.',
        specs: ['Gulfstream G450', 'Legacy 600', 'Falcon 900LX'],
        image: 'jet-exterior.png',
        imagePlaceholder: 'from-amber-900/40 via-black to-black',
    },
    {
        title: 'Ultra-Long Range',
        range: '6,000+ nm',
        passengers: '12 - 19 PAX',
        description: 'Global reach without refueling. The pinnacle of business aviation with distinct living zones.',
        specs: ['Global 7500', 'Gulfstream G700', 'Falcon 10X'],
        image: 'jet-exterior.png',
        imagePlaceholder: 'from-emerald-900/40 via-black to-black',
    },
    {
        title: 'VIP Airliners',
        range: 'Variable',
        passengers: '19 - 50+ PAX',
        description: 'Head-of-state configurations for large delegations or royal families. Hotel-like amenities in the sky.',
        specs: ['ACJ TwoTwenty', 'BBJ MAX', 'Lineage 1000E'],
        image: 'jet-interior.png',
        imagePlaceholder: 'from-purple-900/40 via-black to-black',
    },
];

export default function FleetExplorer() {
    const [activeCategory, setActiveCategory] = useState<FleetCategory>(fleetCategories[0]);

    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-12 h-auto lg:h-[600px]">
                {/* Navigation List */}
                <div className="lg:w-1/3 flex flex-col gap-2 overflow-y-auto pr-4 custom-scrollbar">
                    {fleetCategories.map((cat) => (
                        <button
                            key={cat.title}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-left p-6 border-l w-full transition-all duration-300 group ${activeCategory.title === cat.title
                                ? 'border-stratosphere bg-white/5'
                                : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                                }`}
                        >
                            <span className={`text-xs tracking-widest uppercase block mb-1 transition-colors ${activeCategory.title === cat.title ? 'text-stratosphere' : 'text-zinc-500 group-hover:text-zinc-400'
                                }`}>
                                {cat.passengers}
                            </span>
                            <h3 className={`font-serif text-xl transition-colors ${activeCategory.title === cat.title ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                                }`}>
                                {cat.title}
                            </h3>
                        </button>
                    ))}
                </div>

                {/* Content Display */}
                <div className="lg:w-2/3 relative rounded-sm overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeCategory.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col"
                        >
                            {/* Visual/Image Area (Top 60%) */}
                            <div className={`h-[60%] w-full bg-gradient-to-br ${activeCategory.imagePlaceholder} relative overflow-hidden group`}>
                                <Image
                                    src={`/images/${activeCategory.image}`}
                                    alt={activeCategory.title}
                                    fill
                                    className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Details Area (Bottom 40%) */}
                            <div className="h-[40%] p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="font-serif text-3xl md:text-4xl text-white">{activeCategory.title}</h2>
                                        <span className="py-1 px-3 border border-white/20 rounded-full text-xs text-zinc-400 uppercase tracking-widest">
                                            {activeCategory.range}
                                        </span>
                                    </div>
                                    <p className="text-zinc-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
                                        {activeCategory.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
                                    <span className="text-xs text-zinc-500 uppercase tracking-widest">Runway Examples:</span>
                                    <div className="flex flex-wrap gap-4">
                                        {activeCategory.specs.map((spec) => (
                                            <span key={spec} className="text-sm text-stratosphere/80">{spec}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
