import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with built-in BBQ / appliance bay photo
const heroImage = '/images/stretcher-bond.jpg';

export const bbqAppliancePlanningPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'BBQ & Outdoor Kitchen Appliance Planning | Made By Mobbs Landscapes',
	metaDescription:
		'Plan built-in BBQs, fridges, sinks, gas, power and access panels for outdoor kitchens — before cabinets are built.',
	canonical: '/bbq-appliance-planning/',
	eyebrow: 'Outdoor kitchen planning · appliances',
	h1: 'BBQ and appliance planning',
	intro:
		'Appliances dictate cabinet sizes, ventilation gaps and where trades trench. Choose your BBQ, fridge and sink models early — or allow adjustable rough-in — so the build is not reworked when the delivery truck arrives.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'Stretcher bond paved outdoor area',
	sections: [
		{
			id: 'bbq',
			title: 'Built-in BBQ selection',
			factors: [
				{
					label: 'Fuel type',
					detailHtml:
						'Natural gas is common on Melbourne reticulated streets; LPG bottles suit sites without gas mains. Fuel choice affects regulator location, trenching and cabinet depth.',
				},
				{
					label: 'Size and burners',
					detailHtml:
						'Match cooking habits — a four-burner with a side burner suits most families. Commercial-width grills need wider cavities and more gas supply.',
				},
				{
					label: 'Clearances',
					detailHtml:
						'Manufacturer specs for sides, rear and hood height are non-negotiable. Combustible cladding too close to the grill is a safety and warranty issue.',
				},
				{
					label: 'Hood and extraction',
					detailHtml:
						'Open-air cooking relies on breeze; under cover you may need a hood ducted away from timber and lined roofs. Check before structure is built.',
				},
			],
		},
		{
			id: 'fridge',
			title: 'Fridges and cold storage',
			variant: 'alt',
			bullets: [
				'Use appliances rated for outdoor or semi-outdoor use where possible — kitchen fridges struggle in heat and cold',
				'Allow ventilation space behind and above the unit; tight boxes kill compressors',
				'Lock in width, depth and door swing before cabinetry is drawn',
				'Consider a drawer fridge for drinks and a separate upright if you entertain often',
			],
		},
		{
			id: 'sink',
			title: 'Sink and plumbing',
			leads: [
				'A sink changes plumbing scope. Even a small bowl needs hot and cold supply, drainage and often a licensed plumber on the compliance paperwork.',
			],
			factors: [
				{
					label: 'Location',
					detailHtml:
						'Close to prep bench but not directly above electrical outlets. Drainage should fall to an approved point — not across paving toward the house.',
				},
				{
					label: 'Hot water',
					detailHtml:
						'Instantaneous units or extension from the house both work; distance from the hot water source affects wait time and trenching cost.',
				},
			],
		},
		{
			id: 'services',
			title: 'Gas, power and rough-in',
			factors: [
				{
					label: 'Gas lines',
					detailHtml:
						'Licensed gasfitter, pressure test and certificate. Route pipes before paving is reinstated. Allow isolation valves in accessible locations.',
				},
				{
					label: 'Electrical',
					detailHtml:
						'Dedicated circuits for BBQ ignition, fridge, lighting and any induction hotplate. Outdoor-rated fittings and RCD protection per current rules.',
				},
				{
					label: 'Access panels',
					detailHtml:
						'Fridges fail; gas valves need reaching. Removable panels or hinged doors behind appliances save cutting stone later.',
				},
				{
					label: 'Future additions',
					detailHtml:
						'Conduit for spare power and a capped gas point cost little during the build and help if you add a pizza oven or wok burner later.',
				},
			],
		},
	],
	commonMistakes: [
		'<strong>Buying appliances after cabinets are built</strong> — Cut-outs and depths rarely match; stone rework is costly.',
		'<strong>No access to the back of the fridge</strong> — Servicing means pulling the unit through the front or dismantling cladding.',
		'<strong>Undersized gas supply</strong> — Multiple burners plus side burners need correct pipe sizing; starving the BBQ shows up as weak flames.',
		'<strong>Power points behind the BBQ</strong> — Heat and grease destroy standard outlets; follow clearances and use appropriate fittings.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/bbq-appliance-planning/' },
	faqs: [
		{
			question: 'Do I need natural gas for a built-in BBQ?',
			answer:
				'No — LPG bottles work on many sites. Natural gas avoids bottle swaps but needs a licensed connection and trench from the meter.',
		},
		{
			question: 'Can I add a fridge to an existing outdoor kitchen?',
			answer:
				'Only if there is power, ventilation and cabinet space designed for it. Retrofits often mean new paving cuts and cladding changes.',
		},
		{
			question: 'Who coordinates gas and electrical for outdoor kitchens?',
			answer:
				'Licensed gasfitters and electricians each certify their work. A landscape builder or project lead should sequence trenching, slab and cabinet install so trades are not working blind.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
