import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with dedicated outdoor kitchen cost / entertaining area photo
const heroImage = '/images/pool-paving.jpg';

export const outdoorKitchenCostPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'Outdoor Kitchen Cost Melbourne & Sydney | Made By Mobbs Landscapes',
	metaDescription:
		'Outdoor kitchen costs in Melbourne and Sydney — broad price bands, what moves quotes, and how to compare scope before you commit.',
	canonical: '/outdoor-kitchen-cost-melbourne-sydney/',
	eyebrow: 'Outdoor kitchen planning · Melbourne & Sydney',
	h1: 'Outdoor kitchen costs in Melbourne and Sydney',
	intro:
		'Quotes rarely come down to a neat per-metre rate. Gas, power, slab work, cabinetry, stone and cover all land in different trades — and the order you build them matters. Below is what usually shifts the number on typical suburban blocks.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'Outdoor entertaining area with paved flooring beside a pool',
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'ranges',
			title: 'Broad cost ranges to plan around',
			leads: [
				'Figures vary with structure, appliances and how much of the backyard is rebuilt at the same time. Treat these as planning bands — firm pricing needs a site walk and services check.',
			],
			factors: [
				{
					label: 'Compact BBQ station',
					detailHtml:
						'Built-in BBQ, modest bench run, services roughed in and standard cladding — often roughly <strong>$15,000–$30,000</strong> depending on stone, gas route length and whether you need new power from the switchboard.',
				},
				{
					label: 'Full outdoor kitchen',
					detailHtml:
						'Longer L- or U-shaped layout, sink, fridge niche, storage, better stone and integrated lighting — commonly <strong>$30,000–$60,000+</strong> once slab, drainage, cover and paving around the kitchen are in scope.',
				},
				{
					label: 'Kitchen with structure and paving',
					detailHtml:
						'Pergola or roof, new paving, retaining or level changes, and coordinated planting — totals can move past <strong>$60,000–$100,000+</strong> when the kitchen is part of a wider backyard rebuild.',
				},
			],
		},
		{
			id: 'drivers',
			title: 'What actually moves the quote',
			variant: 'alt',
			factors: [
				{
					label: 'Services distance',
					detailHtml:
						'Gas meter and switchboard location set trenching length, trenching through paving, and whether you need an upgrade. A kitchen at the back fence costs more to service than one on the rear wall.',
				},
				{
					label: 'Slab and drainage',
					detailHtml:
						'Benchtops need level, stable substrate with falls away from the house. Cutting into existing paving, tying into stormwater, or building over fill all add civil work before cabinetry arrives.',
				},
				{
					label: 'Appliances and cut-outs',
					detailHtml:
						'Fridge cavities, sink bowls, warming drawers and pizza ovens each need exact rough-in dimensions and ventilation clearance. Changing appliance spec after cabinets are drawn is expensive.',
				},
				{
					label: 'Materials',
					detailHtml:
						'Porcelain slab, natural stone and rendered block sit at different price points — and different installation tolerances. See our <a class="hero__secondary" href="/outdoor-kitchen-materials/">materials guide</a> for trade-offs.',
				},
				{
					label: 'Cover and structure',
					detailHtml:
						'A simple pergola is not the same cost as a lined roof with downlights and an extraction path for smoke. Covered kitchens add engineering, permits and waterproofing — covered in the <a class="hero__secondary" href="/covered-outdoor-kitchens/">covered kitchens guide</a>.',
				},
				{
					label: 'Access and timing',
					detailHtml:
						'Narrow side paths, steps, crane hire for heavy stone, and coordinating multiple trades on a small site all show up in labour — not just materials.',
				},
			],
		},
		{
			id: 'compare',
			title: 'How to compare quotes fairly',
			leads: [
				'Two “outdoor kitchens” on paper can include very different scope. Line these up before you pick on price alone.',
			],
			bullets: [
				'Gas: new line or extension, regulator location, trenching and reinstatement',
				'Power: dedicated circuits for BBQ ignition, fridge, lighting and any induction',
				'Water and waste: sink rough-in, drainage connection, hot water if required',
				'Substrate: new slab, paver reset, waterproofing and falls',
				'Cabinetry: frame material, doors, hardware rated for outdoor exposure',
				'Benchtops: stone type, thickness, cut-outs and sealing',
				'Cover: pergola only vs roofed structure with lining and fans',
				'Paving and edges around the kitchen — often quoted separately',
			],
		},
	],
	commonMistakes: [
		'<strong>Comparing a cabinet quote to a full build</strong> — Services, slab and cover may sit with other trades or be omitted entirely.',
		'<strong>Allowing no contingency for services</strong> — Trenching through existing paving and board upgrades are common surprises on older homes.',
		'<strong>Locking appliances after layout is drawn</strong> — Fridge depth and BBQ hood height drive cabinet dimensions; late swaps mean rework.',
		'<strong>Ignoring Melbourne vs Sydney permit paths</strong> — Roofed structures and gas work trigger different checks in each city; allow time and fees.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/outdoor-kitchen-cost-melbourne-sydney/' },
	faqs: [
		{
			question: 'How much does a basic outdoor kitchen cost in Melbourne?',
			answer:
				'A compact built-in BBQ with a short bench run and services often lands in the mid-teens to high twenties in thousands, depending on gas route, stone and whether the slab is new. Firm numbers need a site visit.',
		},
		{
			question: 'Is outdoor kitchen cost per linear metre useful?',
			answer:
				'Only as a rough sanity check. Corners, appliances, services and cover change the maths faster than bench length. Compare quoted scope line by line instead.',
		},
		{
			question: 'Does a covered outdoor kitchen cost much more?',
			answer:
				'Usually yes — structure, roofing, drainage, lighting and smoke management add labour and engineering. A pergola is cheaper than a lined, weatherproof roof with extraction considered.',
		},
		{
			question: 'Are Sydney outdoor kitchens more expensive than Melbourne?',
			answer:
				'Labour rates, stone supply and permit processes differ between cities. The bigger swing is usually your site: access, existing paving, and how far services must travel.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
