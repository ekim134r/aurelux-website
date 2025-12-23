
import { NextResponse } from 'next/server';

interface Airport {
    code: string;
    city: string;
    name: string;
    country: string;
    region: string;
}

interface QuoteRequest {
    origin: Airport;
    destination: Airport;
    pax: number;
}

export async function POST(req: Request) {
    try {
        const body: QuoteRequest = await req.json();
        const { origin, destination, pax } = body;

        if (!origin || !destination) {
            return NextResponse.json({ error: 'Invalid airports' }, { status: 400 });
        }

        // --- "SMART QUOTE" ENGINE ---

        // 1. Try Live N8N Calculation (If Webhook URL is set)
        // User provided specific URL: https://n8n.srv1180614.hstgr.cloud/webhook/get-quote
        const n8nQuoteUrl = process.env.N8N_QUOTE_WEBHOOK_URL || 'https://n8n.srv1180614.hstgr.cloud/webhook/get-quote';

        try {
            const headers: Record<string, string> = { 'Content-Type': 'application/json' };
            if (process.env.N8N_AUTH_TOKEN) {
                headers['Authorization'] = process.env.N8N_AUTH_TOKEN;
            }

            const n8nResponse = await fetch(n8nQuoteUrl, {
                method: 'POST', // or GET depending on N8N setup, user example imply GET with params, but POST is cleaner for JSON
                headers,
                body: JSON.stringify({
                    origin_code: origin.code,
                    origin_city: origin.city,
                    origin_country: origin.country,
                    dest_code: destination.code,
                    dest_city: destination.city,
                    dest_country: destination.country,
                    pax
                })
            });

            if (n8nResponse.ok) {
                const n8nData = await n8nResponse.json();
                if (n8nData.options && Array.isArray(n8nData.options) && n8nData.options.length > 0) {
                    return NextResponse.json({ options: n8nData.options, source: 'n8n' });
                }
            }
        } catch (n8nError) {
            console.warn('N8N Quote Failed, falling back to heuristics:', n8nError);
        }

        // --- FALLBACK: HEURISTIC ENGINE (Simulated Physics) ---
        // Used if N8N is down or returns empty

        // 1. Determine "Pseudo-Distance" based on Region/Country
        let distanceKm = 0;
        let complexity = 'low'; // low, medium, high

        const isSameCountry = origin.country === destination.country;
        const isSameRegion = origin.region.split('-')[0] === destination.region.split('-')[0];

        if (isSameCountry) {
            distanceKm = 600; // Avg domestic
            complexity = 'low';
        } else if (isSameRegion) {
            distanceKm = 1800; // Avg intra-regional (e.g. Europe)
            complexity = 'medium';
        } else {
            distanceKm = 6500; // Intercontinental
            complexity = 'high';
        }

        if (origin.code === 'JFK' && destination.code === 'LHR') { distanceKm = 5500; }
        if (origin.code === 'VNY' && destination.code === 'TEB') { distanceKm = 3900; }


        // 2. Define Aircraft Categories & Performance
        const aircraftTypes = [
            {
                id: 'light',
                category: 'Light Jet',
                example: 'Citation CJ4',
                seats: 6,
                range: 2500, // km
                speed: 750, // km/h
            },
            {
                id: 'mid',
                category: 'Midsize Jet',
                example: 'Hawker 900XP',
                seats: 8,
                range: 4500, // km
                speed: 800, // km/h
            },
            {
                id: 'heavy',
                category: 'Heavy Jet',
                example: 'Challenger 605',
                seats: 12,
                range: 7500, // km
                speed: 850, // km/h
            },
            {
                id: 'ultra',
                category: 'Ultra Long Range',
                example: 'Global 7500',
                seats: 16,
                range: 13000, // km
                speed: 950, // km/h
            }
        ];

        // 3. Filter Options (The "Smart" Physics Check)
        // Rule 1: Range Check
        let availableOptions = aircraftTypes.filter(jet => jet.range >= distanceKm);

        // Rule 2: Passenger Check
        availableOptions = availableOptions.filter(jet => jet.seats >= pax);

        // Rule 3: Forced upgrade for "High Complexity" routes purely for comfort/safety (Brand specific)
        if (complexity === 'high') {
            // Remove Midsize for intercontinental even if range theoretically matches (e.g. edge cases)
            availableOptions = availableOptions.filter(jet => jet.id !== 'mid');
        }

        // 4. Calculate Data
        const options = availableOptions.map(jet => {
            // Recalculate generic flight time based on specific jet speed
            const specificFlightTime = distanceKm / jet.speed;
            // Add 30 mins for taxi/handling
            const totalTime = specificFlightTime + 0.5;

            return {
                id: jet.id,
                category: jet.category,
                example: jet.example,
                seats: jet.seats,
                flight_time_min: Math.round(totalTime * 60),
            };
        });

        // 5. Simulate Network Latency (Smart feel)
        await new Promise(resolve => setTimeout(resolve, 600));

        return NextResponse.json({
            options,
            meta: {
                distanceKm,
                complexity,
                source: 'heuristic'
            }
        });

    } catch (error) {
        console.error('Quote Error:', error);
        return NextResponse.json({ error: 'Calculation failed' }, { status: 500 });
    }
}
