'use client';

// =============================================
// AURELUX GROUP - CENTRALIZED CONTENT
// All website copy in one place for easy updates
// =============================================

export const COMPANY = {
    name: 'Aurelux Group LLC',
    tagline: 'Private Jet charter, off-market aircraft acquisition and Section 125 enhancement for qualified U.S. companies.',
    subTagline: 'Discreet access and controlled execution.',
    founded: 2025,
    address: {
        street: '30 N Gould St',
        city: 'Sheridan',
        state: 'WY',
        country: 'USA',
    },
    contact: {
        email: 'sales@aureluxgroup.com',
        phone: '+1 681 461 3153',
    },
    social: {
        linkedin: 'https://www.linkedin.com/company/aurelux-group/',
        instagram: 'https://www.instagram.com/aureluxgroup/',
    },
    press: {
        ibtimes: {
            title: 'International Business Times',
            url: 'https://www.ibtimes.com/aurelux-group-launches-dual-sector-firm-offering-off-market-jet-sourcing-financial-concierge-3791957',
        }
    }
};

export const HERO = {
    title: {
        line1: 'Private Jet Charter.',
        line2: 'Off-Market',
        line2suffix: ' Acquisition.',
    },
    description: 'Section 125 tax optimization for qualified U.S. businesses. Discreet access and controlled execution.',
    badges: ['24/7 Response', 'Private Channels', 'Vetted Network'],
};

export const SERVICES = [
    {
        number: '01',
        title: 'Private Jet Charter',
        description: 'Aurelux Group coordinates global private jet charter through a vetted partner network, managed by an experienced team operating 24/7 with 15 Years of Experience. Each flight is sourced directly from operators with accurate availability, correct positioning and controlled communication. The focus is speed, precision and discretion for every trip.',
        ctaText: 'Learn More',
        ctaHref: '/private-aviation',
    },
    {
        number: '02',
        title: 'Off-Market Aircraft Acquisition',
        description: 'Aurelux Group facilitates access to corporate aircraft available exclusively through private, off-market channels. Buyers receive discreet introductions, verified opportunities and structured support from initial interest through to completion of the transaction.',
        ctaText: 'Explore Access',
        ctaHref: '/off-market',
    },
    {
        number: '03',
        title: 'Off-Market Asset Acquisition',
        description: 'Aurelux Group facilitates access to off-market hard assets, including corporate and commercial aircraft, supercars, hypercars and other high-value acquisitions available only through private channels.',
        ctaText: 'Learn More',
        ctaHref: '/off-market',
    },
    {
        number: '04',
        title: 'Section 125 Enhancement',
        description: 'Aurelux Group connects employers to a Section 125 aligned benefits structure that can increase employee take-home pay while reducing employer payroll burden. The program integrates alongside existing health insurance.',
        ctaText: 'Request Info',
        ctaHref: '/financial',
    },
];

export const WHY_AURELUX = [
    {
        title: 'Direct coordination.',
        description: 'Clients work with an Aurelux specialist from first contact through completion, without being passed through automated systems or mass-market brokers.',
    },
    {
        title: 'Selective networks.',
        description: 'Access to off-market aircraft and partners is based on controlled introductions, not public listings or open marketplaces.',
    },
    {
        title: 'Focused experience.',
        description: 'Client engagements are handled by a team familiar with private aviation, hard-asset acquisition and structured programs used by qualified companies.',
    },
    {
        title: 'Discretion.',
        description: 'Communication is managed directly and privately, without exposure to open broker circuits.',
    },
];

export const CHARTER_PROCESS = {
    title: 'Our Charter Process',
    subtitle: 'On-demand private jet charter with vetted global operators',
    steps: [
        {
            number: '01',
            title: 'Define it',
            description: 'You provide your route, travel date, time, passenger count, and any relevant trip details.',
        },
        {
            number: '02',
            title: 'Select it',
            description: 'We present aircraft that are actually available and correctly positioned with vetted operators.',
        },
        {
            number: '03',
            title: 'Confirm it',
            description: 'Once you choose the aircraft, we secure availability, lock the schedule, and coordinate directly with dispatch and crew.',
        },
        {
            number: '04',
            title: 'Fly it',
            description: 'Your flight is monitored from start to finish. Ground arrangements, communication, and operational support are handled so your travel remains seamless.',
        },
    ],
};

export const WHY_CHARTER = {
    title: 'Why Charter with Aurelux',
    features: [
        {
            title: 'Vetted Operators Only',
            description: 'All aircraft options come from trusted operators who meet strict safety and maintenance standards.',
        },
        {
            title: 'Accurate Aircraft Matching',
            description: 'Each route is matched to aircraft that are technically suitable and actually available at the time of request.',
        },
        {
            title: 'Transparent Pricing',
            description: 'Clear pricing without hidden fees or inflated broker margins.',
        },
        {
            title: '24/7 Availability',
            description: 'The Aurelux works with a team operating around the clock for global charter and short-notice departures.',
        },
    ],
    globalReach: 'Access across North America, Europe, the Middle East and Asia, including VIP airliners such as BBJ and ACJ.',
};

export const OFF_MARKET = {
    title: 'Off-Market Asset Acquisitions',
    subtitle: 'Access to Off-Market Hard Assets',
    intro: 'Aurelux operates through closed sourcing networks for verified buyers only. No listings, no public offers, and no open circulation.',
    howItWorks: {
        title: 'How it works',
        description: 'Aurelux facilitates direct introductions and manages transaction flow through a secured network that aggregates off-market opportunities. These assets are not advertised, not broker-circulated, and not discoverable through conventional channels.',
        process: 'Each engagement begins with a private intake. Once client identity and mandate are verified, we coordinate access to active opportunities that match the request. If no current matches exist, requests are logged and held for future alignment through our internal partner network.',
    },
    assetCategories: {
        title: 'Asset Categories',
        description: 'We support acquisition requests across a broad spectrum of high-value physical assets, including:',
        items: [
            'Corporate and private aircraft',
            'Yachts and marine vessels',
            'Collectible cars, luxury watches, fine wine and rare spirits',
        ],
        footer: 'Access is arranged through a vetted sourcing network once eligibility is confirmed and partner onboarding is complete.',
    },
};

export const FINANCIAL = {
    title: 'Section 125 Enhancement',
    subtitle: 'A Section 125 aligned benefits enhancement for US-based employers.',
    ctaIntro: "If you're a decision maker, you can engage below.",
    overview: 'Aurelux Group introduces qualified companies to a Section 125 enhancement program administered by licensed professionals and supported by Department of Insurance-regulated carriers. The program functions as an enhancement to existing benefits and does not replace any current insurance coverage. It is designed to improve employee take-home pay while reducing employer payroll burden through compliant pre-tax alignment.',
    benefitsEmployee: {
        title: 'Benefits for Employees',
        items: [
            'Access to preventative care and wellness services',
            'Hospital indemnity coverage through an A rated carrier',
            'Potential increase in take-home pay, depending on individual circumstances',
        ],
    },
    benefitsEmployer: {
        title: 'Benefits for Employers',
        items: [
            'Potential reduction in payroll-related costs',
            'No disruption to existing health insurance',
            'Additional employee benefits that support recruitment and retention',
        ],
    },
    stats: {
        savings: '4-6%',
        savingsLabel: 'Increase in take-home pay',
        perEmployee: '$4K+',
        perEmployeeLabel: 'Per Employee/Year',
        cost: '$0',
        costLabel: 'Implementation Cost',
    },
    nextSteps: {
        questionnaire: {
            title: 'Online Questionnaire',
            description: 'This option allows you to complete a short questionnaire through the secure partner platform. After submitting your information, you will be able to book a Calendly call with a licensed program specialist to review eligibility and next steps.',
            cta: 'Proceed to Questionnaire & Book Call',
        },
        vipIntro: {
            title: 'Request a VIP Email Introduction',
            description: 'This option allows you to request a direct email introduction to a licensed program specialist. Include your company name, employee count and preferred contact method.',
            cta: 'Request VIP Email Introduction',
        },
    },
};

export const TRUST_INDICATORS = [
    { label: 'Network', value: 'GLOBAL' },
    { label: 'Response', value: '24/7' },
    { label: 'Access', value: 'DIRECT' },
    { label: 'Privacy', value: '100%' },
];
