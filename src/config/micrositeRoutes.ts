/**
 * Cross-domain path lists used by vercel.json redirects.
 * Keep vercel.json in sync when adding or removing microsite routes.
 */

export const PAVING_DOMAIN = 'pavingguide.com.au';
export const PAVING_ALTERNATE_DOMAIN = 'pavingcostguide.com.au';
export const OUTDOOR_KITCHEN_DOMAIN = 'outdoorkitchenguide.com.au';
export const DECK_DOMAIN = 'deckcostguide.com.au';

/** Hostnames that serve the paving microsite (apex + www + alternate). */
export const PAVING_HOSTS = [
	PAVING_DOMAIN,
	`www.${PAVING_DOMAIN}`,
	PAVING_ALTERNATE_DOMAIN,
	`www.${PAVING_ALTERNATE_DOMAIN}`,
] as const;

/** Hostnames that serve the outdoor kitchen microsite. */
export const OUTDOOR_KITCHEN_HOSTS = [OUTDOOR_KITCHEN_DOMAIN, `www.${OUTDOOR_KITCHEN_DOMAIN}`] as const;

/** Internal build path for the outdoor kitchen homepage (rewrite target from `/` on OK domain). */
export const OUTDOOR_KITCHEN_HOME_PATH = '/outdoor-kitchen/';

/** Public outdoor kitchen guide paths (excluding homepage). */
export const OUTDOOR_KITCHEN_GUIDE_PATHS = [
	'/outdoor-kitchen-cost-melbourne-sydney/',
	'/outdoor-kitchen-design-guide/',
	'/outdoor-kitchen-materials/',
	'/bbq-appliance-planning/',
	'/covered-outdoor-kitchens/',
	'/outdoor-kitchen-mistakes/',
] as const;

/** Hostnames that serve the deck cost guide microsite. */
export const DECK_HOSTS = [DECK_DOMAIN, `www.${DECK_DOMAIN}`] as const;

/** Internal build path for the deck cost guide homepage (rewrite target from `/` on deck domain). */
export const DECK_HOME_PATH = '/deck/';

/** Public deck cost guide paths (excluding homepage). */
export const DECK_GUIDE_PATHS = ['/decking-cost-melbourne/'] as const;

/** Existing paving routes that should redirect away from the outdoor kitchen domain. */
export const PAVING_GUIDE_PATHS = [
	'/paving-cost-calculator/',
	'/paving-cost-melbourne/',
	'/pool-paving-melbourne/',
	'/travertine-pool-paving-melbourne/',
	'/driveway-paving-melbourne/',
	'/crazy-paving-melbourne/',
	'/french-pattern-paving-melbourne/',
	'/herringbone-paving-melbourne/',
	'/stretcher-bond-paving-melbourne/',
	'/crazy-paving-vs-french-pattern/',
	'/wet-bed-vs-concrete-base-paving/',
] as const;
