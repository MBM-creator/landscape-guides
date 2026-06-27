import type { SiteKey } from './sites';
import { DECK_HOME_PATH, OUTDOOR_KITCHEN_HOME_PATH } from './micrositeRoutes';

export type SiteNavLink = {
	href: string;
	label: string;
};

export const DECK_NAV_LINKS: SiteNavLink[] = [
	{ href: '/decking-cost-melbourne/', label: 'Decking Cost Melbourne' },
	{ href: '/timber-decking-cost/', label: 'Timber Decking Cost' },
	{ href: '/decking-materials/', label: 'Decking Materials' },
	{ href: '/pool-decking-cost/', label: 'Pool Decking Cost' },
	{ href: '/decking-mistakes/', label: 'Common Deck Mistakes' },
];

export const OUTDOOR_KITCHEN_NAV_LINKS: SiteNavLink[] = [
	{ href: '/outdoor-kitchen-cost-melbourne-sydney/', label: 'Outdoor Kitchen Costs' },
	{ href: '/outdoor-kitchen-design-guide/', label: 'Design Guide' },
	{ href: '/outdoor-kitchen-materials/', label: 'Materials' },
	{ href: '/bbq-appliance-planning/', label: 'BBQ & Appliances' },
	{ href: '/covered-outdoor-kitchens/', label: 'Covered Kitchens' },
	{ href: '/outdoor-kitchen-mistakes/', label: 'Mistakes to Avoid' },
];

export function getSiteHomePath(siteKey: SiteKey): string {
	switch (siteKey) {
		case 'decking':
			return DECK_HOME_PATH;
		case 'outdoorKitchen':
			return OUTDOOR_KITCHEN_HOME_PATH;
		default:
			return '/';
	}
}

export function getSiteNavLinks(siteKey: SiteKey): SiteNavLink[] | null {
	switch (siteKey) {
		case 'decking':
			return DECK_NAV_LINKS;
		case 'outdoorKitchen':
			return OUTDOOR_KITCHEN_NAV_LINKS;
		default:
			return null;
	}
}
