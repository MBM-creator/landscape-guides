import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with outdoor kitchen layout / plan photo
const heroImage = '/images/herringbone-paving.jpg';

export const outdoorKitchenDesignPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'Outdoor Kitchen Design Guide | Layout & Planning | Made By Mobbs Landscapes',
	metaDescription:
		'Outdoor kitchen design in plain terms: layout, bench depth, cooking zones, circulation, cover and where smoke goes on a typical block.',
	canonical: '/outdoor-kitchen-design-guide/',
	eyebrow: 'Outdoor kitchen planning · layout',
	h1: 'Outdoor kitchen design guide',
	intro:
		'Layout is where most outdoor kitchens are won or lost. Bench depth, fridge door swing, cover height and the path from house to BBQ all need to work before you choose stone colour. Start with how you cook and move, not the catalogue photo.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'Paved outdoor area with natural stone flooring',
	sections: [
		{
			id: 'zones',
			title: 'Cooking, prep and serving zones',
			leads: [
				'Treat the kitchen like a small commercial line: heat at one end, cold storage reachable but not in the flare zone, prep between them.',
			],
			bullets: [
				'<strong>Hot zone:</strong> Built-in BBQ, possibly side burner — needs clearance to combustibles and space for the hood or open-air smoke path',
				'<strong>Prep zone:</strong> 900–1200mm of clear bench beside the BBQ; you need somewhere to land trays and boards',
				'<strong>Cold zone:</strong> Fridge within one or two steps of prep, door opening away from the BBQ heat',
				'<strong>Plating zone:</strong> Bench facing seating or the pass-through to the table — reduces carrying hot plates across traffic paths',
			],
		},
		{
			id: 'layout',
			title: 'Linear, L-shape and island layouts',
			variant: 'alt',
			factors: [
				{
					label: 'Linear along a wall or fence',
					detailHtml:
						'Efficient on narrow blocks. Works when the BBQ faces the yard and guests sit opposite. Watch services: gas and water often run along the rear wall.',
				},
				{
					label: 'L-shape',
					detailHtml:
						'Good when you want BBQ on one leg and sink or fridge on the other. Keeps a corner of prep bench protected from wind. Needs enough return depth so doors and drawers do not clash.',
				},
				{
					label: 'Island or peninsula',
					detailHtml:
						'Strong for entertaining but costs more in structure and services. All four sides may need cladding; gas and water cross open paving. Allow wider clearances for chairs behind bar stools.',
				},
			],
		},
		{
			id: 'dimensions',
			title: 'Bench height, depth and clearances',
			leads: ['Standard indoor kitchen heights do not always suit outdoor cooking — especially if you stand on paved ground that may settle differently to internal floors.'],
			factors: [
				{
					label: 'Bench height',
					detailHtml:
						'Often 900–920mm finished height for BBQ-led kitchens; bar seating may sit at 1050–1100mm on a raised counter. Match your primary cook’s comfortable elbow height.',
				},
				{
					label: 'Working depth',
					detailHtml:
						'600mm minimum for prep; 750mm+ feels better if you have space. Deeper stone tops need support brackets and thought about knee space if you add stools.',
				},
				{
					label: 'BBQ cavity',
					detailHtml:
						'Follow manufacturer clearances to combustible materials on all sides and above. Hood height affects sight lines under cover — check before the roof is fixed.',
				},
				{
					label: 'Circulation',
					detailHtml:
						'Allow 1200mm behind a cook where you can; 1000mm minimum in tight sites. Door swings from the house and fridge should not cross the hot zone.',
				},
			],
		},
		{
			id: 'orientation',
			title: 'Wind, sun and smoke',
			leads: [
				'Melbourne and Sydney both punish kitchens placed without thinking about prevailing wind and afternoon sun.',
			],
			bullets: [
				'Face the cook toward guests where possible — but not into strong westerly sun without shade',
				'Smoke drifts; do not put the BBQ hard against a boundary fence if neighbours are close',
				'Under cover, you need an open side or ventilated roof ridge — enclosed boxes fill with smoke fast',
				'Consider where grease smoke lands on cladding, windows and drying laundry',
			],
		},
	],
	commonMistakes: [
		'<strong>Designing from the appliance brochure</strong> — Cabinet dimensions follow services and structure, not the other way around.',
		'<strong>No prep bench beside the BBQ</strong> — A grill with nowhere to put a tray is awkward every weekend.',
		'<strong>Fridge door opening into the cook zone</strong> — Heat shortens appliance life and blocks the person at the grill.',
		'<strong>Cover too low over the BBQ</strong> — Hoods and flare-ups need vertical clearance; low pergolas get stained and feel cramped.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/outdoor-kitchen-design-guide/' },
	faqs: [
		{
			question: 'How deep should an outdoor kitchen bench be?',
			answer:
				'600mm is a workable minimum for prep beside a BBQ. 750mm or more is better if you have space and want stone overhang or bar seating on the other side.',
		},
		{
			question: 'Should the outdoor kitchen face the house or the garden?',
			answer:
				'Often the cook faces the yard and guests, with the house behind for easy access to the pantry. On windy sites, turning the BBQ opening leeward matters more than the view.',
		},
		{
			question: 'Can I put an outdoor kitchen on a side passage?',
			answer:
				'Only if you have clearances for heat, smoke and fridge ventilation. Narrow passages trap smoke and make gas routing awkward — measure before you assume it will work.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
