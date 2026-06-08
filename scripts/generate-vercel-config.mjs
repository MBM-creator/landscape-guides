/**
 * Generates vercel.json host routes/redirects from micrositeRoutes.ts.
 * Root `/` on the outdoor kitchen domain uses routes (processed before filesystem)
 * so the apex URL returns 200 while paving index.astro stays at `/` on paving hosts.
 * Run: node scripts/generate-vercel-config.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const PAVING_DOMAIN = 'pavingguide.com.au';
const PAVING_ALTERNATE_DOMAIN = 'pavingcostguide.com.au';
const OUTDOOR_KITCHEN_DOMAIN = 'outdoorkitchenguide.com.au';

const PAVING_HOSTS = [
	PAVING_DOMAIN,
	`www.${PAVING_DOMAIN}`,
	PAVING_ALTERNATE_DOMAIN,
	`www.${PAVING_ALTERNATE_DOMAIN}`,
];

const OUTDOOR_KITCHEN_HOSTS = [OUTDOOR_KITCHEN_DOMAIN, `www.${OUTDOOR_KITCHEN_DOMAIN}`];

const OUTDOOR_KITCHEN_HOME_PATH = '/outdoor-kitchen/';

const OUTDOOR_KITCHEN_GUIDE_PATHS = [
	'/outdoor-kitchen-cost-melbourne-sydney/',
	'/outdoor-kitchen-design-guide/',
	'/outdoor-kitchen-materials/',
	'/bbq-appliance-planning/',
	'/covered-outdoor-kitchens/',
	'/outdoor-kitchen-mistakes/',
];

const PAVING_GUIDE_PATHS = [
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
];

function stripTrailingSlash(path) {
	return path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
}

/** Routes run before filesystem — OK apex serves outdoor kitchen home as 200. */
const rootRoutes = [
	{
		src: '^/$',
		has: [{ type: 'host', value: OUTDOOR_KITCHEN_DOMAIN }],
		dest: OUTDOOR_KITCHEN_HOME_PATH,
	},
	{
		src: '^/$',
		has: [{ type: 'host', value: `www.${OUTDOOR_KITCHEN_DOMAIN}` }],
		dest: OUTDOOR_KITCHEN_HOME_PATH,
	},
];

/** Canonicalise build path to apex homepage on the outdoor kitchen domain. */
const outdoorKitchenHomeCanonicalRedirects = [];
for (const host of OUTDOOR_KITCHEN_HOSTS) {
	for (const source of ['/outdoor-kitchen', '/outdoor-kitchen/']) {
		outdoorKitchenHomeCanonicalRedirects.push({
			source,
			has: [{ type: 'host', value: host }],
			destination: '/',
			permanent: true,
		});
	}
}

const redirects = [...outdoorKitchenHomeCanonicalRedirects];

for (const host of PAVING_HOSTS) {
	redirects.push({
		source: '/outdoor-kitchen',
		has: [{ type: 'host', value: host }],
		destination: `https://${OUTDOOR_KITCHEN_DOMAIN}/`,
		permanent: true,
	});
	redirects.push({
		source: '/outdoor-kitchen/',
		has: [{ type: 'host', value: host }],
		destination: `https://${OUTDOOR_KITCHEN_DOMAIN}/`,
		permanent: true,
	});

	for (const path of OUTDOOR_KITCHEN_GUIDE_PATHS) {
		const source = stripTrailingSlash(path);
		redirects.push({
			source,
			has: [{ type: 'host', value: host }],
			destination: `https://${OUTDOOR_KITCHEN_DOMAIN}${path}`,
			permanent: true,
		});
		redirects.push({
			source: path,
			has: [{ type: 'host', value: host }],
			destination: `https://${OUTDOOR_KITCHEN_DOMAIN}${path}`,
			permanent: true,
		});
	}
}

for (const host of OUTDOOR_KITCHEN_HOSTS) {
	for (const path of PAVING_GUIDE_PATHS) {
		const source = stripTrailingSlash(path);
		redirects.push({
			source,
			has: [{ type: 'host', value: host }],
			destination: `https://${PAVING_DOMAIN}${path}`,
			permanent: true,
		});
		redirects.push({
			source: path,
			has: [{ type: 'host', value: host }],
			destination: `https://${PAVING_DOMAIN}${path}`,
			permanent: true,
		});
	}
}

const vercelConfig = {
	$schema: 'https://openapi.vercel.sh/vercel.json',
	routes: rootRoutes,
	redirects,
};

writeFileSync(join(root, 'vercel.json'), `${JSON.stringify(vercelConfig, null, '\t')}\n`);
console.log(`Wrote vercel.json (${rootRoutes.length} root routes, ${redirects.length} redirects total)`);
