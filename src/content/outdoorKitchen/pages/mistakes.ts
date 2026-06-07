import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with outdoor kitchen mistake / awkward layout example photo
const heroImage = '/images/crazy-paving.avif';

export const outdoorKitchenMistakesPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'Outdoor Kitchen Mistakes to Avoid | Made By Mobbs Landscapes',
	metaDescription:
		'Common outdoor kitchen mistakes: distance from the house, storage, drainage, services planned too late, and layout that does not suit how you cook.',
	canonical: '/outdoor-kitchen-mistakes/',
	eyebrow: 'Outdoor kitchen planning · pitfalls',
	h1: 'Outdoor kitchen mistakes to avoid',
	intro:
		'Most failed outdoor kitchens are not a stone choice problem — they are planning problems. Services too far from the house, cover too low, no storage, or a layout that fights the way you actually cook. These are the errors we see when homeowners call us after the first summer.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'Natural stone crazy paving in an outdoor area',
	sections: [
		{
			id: 'timing',
			title: 'Planning the kitchen after the backyard is built',
			leads: [
				'Outdoor kitchens work best when they are part of a master plan — paving, drainage, planting and structure together. Bolting a kitchen onto finished paving usually means cutting, patching and compromised falls.',
			],
			bullets: [
				'Set kitchen location before major paving or pool coping goes in',
				'Trench services while the ground is already open for other works',
				'Coordinate cover posts with paving layout so you are not drilling through new stone',
				'Allow bench and fridge depth in the circulation path from day one',
			],
		},
		{
			id: 'distance',
			title: 'Putting the kitchen too far from the house',
			variant: 'alt',
			leads: [
				'A kitchen at the back fence looks dramatic on a plan — until you are carrying hot platters across wet grass every night.',
			],
			factors: [
				{
					label: 'Trip distance',
					detailHtml:
						'Every metre from the pantry to the BBQ matters. Rear-wall kitchens shorten the haul and simplify gas and water runs on many blocks.',
				},
				{
					label: 'Services cost',
					detailHtml:
						'Long gas and electrical trenches through established paving are expensive and messy. Distance is a cost driver, not just a lifestyle choice.',
				},
				{
					label: 'Lighting and security',
					detailHtml:
						'Remote kitchens need dedicated lighting paths. Dark routes between house and grill get used less — then the kitchen feels “too much effort”.',
				},
			],
		},
		{
			id: 'storage',
			title: 'No storage or rubbish planning',
			leads: [
				'Plates, tools, oil, cleaning gear and bin liners need a home. A BBQ with two drawers fills up fast.',
			],
			bullets: [
				'Allow full-height cupboards or deep drawers for utensils and small appliances',
				'Plan a rubbish pull-out or discreet bin spot — not a wheelie bin parked beside the fridge',
				'Keep chemicals and cleaners out of food drawers; separate locked storage if kids use the yard',
				'Think about where bulky BBQ covers and trays live in winter',
			],
		},
		{
			id: 'services',
			title: 'Services and drainage as an afterthought',
			factors: [
				{
					label: 'Drainage',
					detailHtml:
						'Sinks, hose bibs and paved falls must drain away from the house. Water pooling at the kitchen plinth rots doors and stains stone.',
				},
				{
					label: 'Gas and power upgrades',
					detailHtml:
						'Older boards may need capacity for fridge, lighting, BBQ ignition and heaters. Discovering that after cabinets are ordered delays everything.',
				},
				{
					label: 'Access for maintenance',
					detailHtml:
						'If you cannot reach valves and fridge coils, a simple service call becomes a demolition job.',
				},
			],
		},
		{
			id: 'climate',
			title: 'Ignoring Melbourne and Sydney weather',
			leads: [
				'Four seasons and strong sun change how often you use the kitchen. Shade, wind and rain protection are not optional extras on most sites.',
			],
			bullets: [
				'Western sun on the cook’s face makes a kitchen unused by February',
				'Melbourne cool evenings need lighting and sometimes heating to keep guests at the counter',
				'Sydney downpours need roofed cover or you cook indoors anyway',
				'Coastal wind affects smoke, flame stability and what cover structure you need',
			],
		},
	],
	commonMistakes: [
		'<strong>Choosing stone before layout</strong> — Layout and services should be fixed first; aesthetics follow.',
		'<strong>Undersized bench for prep</strong> — A grill with no landing space is frustrating every cook-up.',
		'<strong>Fridge in full afternoon sun</strong> — Compressors work overtime and fail early.',
		'<strong>No relationship to seating</strong> — If guests face away from the cook, the kitchen feels lonely and gets used less.',
		'<strong>Splitting trades with no coordinator</strong> — Gas, electric, stonemason and cabinet maker each doing “their bit” without a set-out plan produces gaps and rework.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/outdoor-kitchen-mistakes/' },
	faqs: [
		{
			question: 'What is the biggest outdoor kitchen mistake?',
			answer:
				'Planning it late — after paving and planting are done — so services, falls and cover posts fight the existing yard instead of shaping it.',
		},
		{
			question: 'How close should an outdoor kitchen be to the house?',
			answer:
				'Close enough that carrying food and clearing up is easy — often along the rear wall. Exact distance depends on your block, but back-fence kitchens cost more to service and get used less.',
		},
		{
			question: 'Can mistakes be fixed after the kitchen is built?',
			answer:
				'Some can — extra storage, better lighting, resealing stone. Structural issues, low cover, wrong falls and short gas lines usually mean significant rework.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
