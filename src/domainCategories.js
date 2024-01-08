/* eslint-disable no-duplicate-case */
// domainCategories.js

export function categorizeDomain(domainName) {
    const tld = domainName.split('.').pop().toLowerCase();

    switch (tld) {
        case 'com':
            return 'Commercial';
        case 'org':
            return 'Organization';
        case 'net':
            return 'Network';
        case 'gov':
            return 'Government';
        case 'edu':
            return 'Education';
        case 'mil':
            return 'Military';
        case 'int':
            return 'International';
        case 'info':
            return 'Information';
        case 'biz':
            return 'Business';
        case 'name':
            return 'Personal names';
        // Country Code Top-Level Domains (ccTLDs)
        case 'us':
            return 'United States';
        case 'uk':
            return 'United Kingdom';
        case 'ca':
            return 'Canada';
        case 'au':
            return 'Australia';
        case 'in':
            return 'India';
        case 'jp':
            return 'Japan';
        case 'de':
            return 'Germany';
        case 'fr':
            return 'France';
        case 'cn':
            return 'China';
        case 'br':
            return 'Brazil';
        // Infrastructure Top-Level Domain (arpa)
        case 'arpa':
            return 'Address and Routing Parameter Area';
        // Sponsored Top-Level Domains (sTLDs)


        case 'gov':
            return 'U.S. Government';
        case 'edu':
            return 'Educational institutions';
        case 'mil':
            return 'U.S. Military';
        case 'aero':
            return 'Air transport industry';
        case 'museum':
            return 'Museums';
        case 'coop':
            return 'Cooperatives';
        // New Generic Top-Level Domains (new gTLDs)
        case 'app':
        case 'blog':
        case 'guru':
        case 'io':
        case 'tech':
        case 'design':
        case 'online':
        case 'store':
            return 'New Generic Top-Level Domain';
        // Reserved Top-Level Domains
        case 'example':
        case 'test':
        case 'invalid':
            return 'Reserved Top-Level Domain';
        default:
            return 'Unknown';
    }
}
