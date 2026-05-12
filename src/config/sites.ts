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
	brandLine: string;
	primaryCta: string;
	primaryCtaHref: string;
	mainWebsiteUrl: string;
};

type FutureSite = {
	status: 'future';
	name: string;
	domain: string;
	brandLine: string;
};

export type SiteConfig = { key: SiteKey } & (LiveSite | FutureSite);

export const sites = {
	paving: {
		key: 'paving',
		name: 'Paving Guide',
		domain: 'pavingguide.com.au',
		alternateDomains: ['pavingcostguide.com.au'],
		brandLine: 'A resource from Made By Mobbs Landscapes',
		primaryCta: 'Estimate Your Paving Cost',
		primaryCtaHref: '/paving-cost-calculator',
		mainWebsiteUrl: 'https://madebymobbs.com.au',
	},
	decking: {
		key: 'decking',
		name: 'Deck Cost Guide',
		domain: 'deckcostguide.com.au',
		brandLine: 'A resource from Made By Mobbs Landscapes',
		status: 'future' as const,
	},
	irrigation: {
		key: 'irrigation',
		name: 'Irrigation Guide',
		domain: 'irrigationguide.com.au',
		brandLine: 'A resource from Made By Mobbs Landscapes',
		status: 'future' as const,
	},
	landscapeCost: {
		key: 'landscapeCost',
		name: 'Landscape Cost Guide',
		domain: 'landscapecostguide.com.au',
		brandLine: 'A resource from Made By Mobbs Landscapes',
		status: 'future' as const,
	},
	outdoorKitchen: {
		key: 'outdoorKitchen',
		name: 'Outdoor Kitchen Guide',
		domain: 'outdoorkitchenguide.com.au',
		brandLine: 'A resource from Made By Mobbs Landscapes',
		status: 'future' as const,
	},
	poolSurrounds: {
		key: 'poolSurrounds',
		name: 'Pool Surrounds Guide',
		domain: 'poolsurroundsguide.com.au',
		brandLine: 'A resource from Made By Mobbs Landscapes',
		status: 'future' as const,
	},
} satisfies Record<SiteKey, SiteConfig>;

function normalizeHost(hostname: string): string {
	return hostname.trim().toLowerCase().replace(/^www\./, '');
}

/**
 * Resolves the active site from the request hostname.
 * Localhost and paving domains map to paving; everything else defaults to paving until additional sites launch.
 */
export function getSiteByHost(hostname: string): SiteConfig {
	const host = normalizeHost(hostname);
	if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') {
		return sites.paving;
	}

	const pavingHosts = new Set<string>();
	for (const d of [sites.paving.domain, ...sites.paving.alternateDomains]) {
		pavingHosts.add(normalizeHost(d));
		pavingHosts.add(normalizeHost(`www.${d}`));
	}

	if (pavingHosts.has(host)) {
		return sites.paving;
	}

	return sites.paving;
}
