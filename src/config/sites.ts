export const SITE_KEYS = [
	'paving',
	'decking',
	'irrigation',
	'landscapeCost',
	'outdoorKitchen',
	'poolSurrounds',
] as const;

export type SiteKey = (typeof SITE_KEYS)[number];

type LiveSite = {
	status?: 'live';
	name: string;
	domain: string;
	alternateDomains: string[];
	primaryCta: string;
	primaryCtaHref: string;
	mainWebsiteUrl: string;
};

type FutureSite = {
	status: 'future';
	name: string;
	domain: string;
};

export type SiteConfig = { key: SiteKey } & (LiveSite | FutureSite);

export const OUTDOOR_KITCHEN_CTA_URL = 'https://madebymobbs.com.au/outdoor-kitchen-design-melbourne/';

// TODO: point at the dedicated Made By Mobbs decking service page once it exists.
export const DECK_CTA_URL = 'https://madebymobbs.com.au';

export const sites = {
	paving: {
		key: 'paving',
		name: 'Paving Guide',
		domain: 'pavingguide.com.au',
		alternateDomains: ['pavingcostguide.com.au'],
		primaryCta: 'Estimate Your Paving Cost',
		primaryCtaHref: '/paving-cost-calculator',
		mainWebsiteUrl: 'https://madebymobbs.com.au',
	},
	decking: {
		key: 'decking',
		name: 'Deck Cost Guide',
		domain: 'deckcostguide.com.au',
		alternateDomains: [],
		primaryCta: 'Estimate Your Decking Construction Cost',
		primaryCtaHref: DECK_CTA_URL,
		mainWebsiteUrl: 'https://madebymobbs.com.au',
	},
	irrigation: {
		key: 'irrigation',
		name: 'Irrigation Guide',
		domain: 'irrigationguide.com.au',
		status: 'future' as const,
	},
	landscapeCost: {
		key: 'landscapeCost',
		name: 'Landscape Cost Guide',
		domain: 'landscapecostguide.com.au',
		status: 'future' as const,
	},
	outdoorKitchen: {
		key: 'outdoorKitchen',
		name: 'Outdoor Kitchen Guide',
		domain: 'outdoorkitchenguide.com.au',
		alternateDomains: [],
		primaryCta: 'Speak with Made By Mobbs Landscapes',
		primaryCtaHref: OUTDOOR_KITCHEN_CTA_URL,
		mainWebsiteUrl: 'https://madebymobbs.com.au',
	},
	poolSurrounds: {
		key: 'poolSurrounds',
		name: 'Pool Surrounds Guide',
		domain: 'poolsurroundsguide.com.au',
		status: 'future' as const,
	},
} satisfies Record<SiteKey, SiteConfig>;

function normalizeHost(hostname: string): string {
	return hostname.trim().toLowerCase().replace(/^www\./, '');
}

function hostsForSite(site: SiteConfig): Set<string> {
	const hosts = new Set<string>();
	const domains =
		site.status === 'future' ? [site.domain] : [site.domain, ...('alternateDomains' in site ? site.alternateDomains : [])];
	for (const d of domains) {
		hosts.add(normalizeHost(d));
		hosts.add(normalizeHost(`www.${d}`));
	}
	return hosts;
}

/**
 * Resolves the active site from the request hostname.
 * Localhost maps to paving. Unknown hosts default to paving.
 */
export function getSiteByHost(hostname: string): SiteConfig {
	const host = normalizeHost(hostname);
	if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') {
		return sites.paving;
	}

	if (hostsForSite(sites.outdoorKitchen).has(host)) {
		return sites.outdoorKitchen;
	}

	if (hostsForSite(sites.decking).has(host)) {
		return sites.decking;
	}

	if (hostsForSite(sites.paving).has(host)) {
		return sites.paving;
	}

	return sites.paving;
}
