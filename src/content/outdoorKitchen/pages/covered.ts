import type { OutdoorKitchenGuidePageContent } from '../outdoorKitchenGuidePage.types';
import { outdoorKitchenBackLink, outdoorKitchenFinalCta, outdoorKitchenMobbsSection } from '../shared';

// TODO: replace hero image with covered outdoor kitchen / pergola photo
const heroImage = '/images/french-pattern.webp';

export const coveredOutdoorKitchensPage: OutdoorKitchenGuidePageContent = {
	metaTitle: 'Covered Outdoor Kitchens Guide | Roof & Ventilation | Made By Mobbs Landscapes',
	metaDescription:
		'Covered outdoor kitchens: pergolas, rooflines, ventilation, rain protection and when you need a permit in Melbourne or Sydney.',
	canonical: '/covered-outdoor-kitchens/',
	eyebrow: 'Outdoor kitchen planning · cover',
	h1: 'Covered outdoor kitchens',
	intro:
		'Cover keeps you cooking in rain and shade — but a roof over a BBQ changes smoke movement, lighting, permits and how waterproof the structure must be. Decide how enclosed you want to be before you commit to timber posts and a flat ceiling.',
	...outdoorKitchenBackLink,
	heroImage,
	heroAlt: 'French pattern paved outdoor entertaining space',
	sections: [
		{
			id: 'options',
			title: 'Pergola, roofed structure and full enclosure',
			factors: [
				{
					label: 'Open pergola',
					detailHtml:
						'Shade cloth or spaced timber lets smoke escape but offers limited rain protection. Cheaper; good when you mainly need sun relief.',
				},
				{
					label: 'Solid roof with open sides',
					detailHtml:
						'Most common “covered kitchen” on Melbourne blocks. Needs guttering, downpipes and thought about smoke leaving the canopy — usually via open sides or higher ridge vents.',
				},
				{
					label: 'Partial walls or screens',
					detailHtml:
						'Blocks wind and neighbours’ views but traps smoke if you close too much. Fixed screens change fire separation rules depending on what sits behind them.',
				},
			],
		},
		{
			id: 'ventilation',
			title: 'Smoke, heat and airflow',
			variant: 'alt',
			leads: [
				'A lid down on the BBQ still vents grease smoke. Under a low ceiling, that smoke stains lining boards and irritates anyone at the bar counter.',
			],
			bullets: [
				'Keep at least one side largely open, or use a rated BBQ hood ducted to open air',
				'Higher roof pitches help smoke rise away from faces and timber',
				'Do not line a low flat ceiling with absorbent timber directly above the grill',
				'Consider prevailing wind — a wall on the windward side can push smoke back into the cook zone',
			],
		},
		{
			id: 'weather',
			title: 'Rain, gutters and paving falls',
			factors: [
				{
					label: 'Gutters and downpipes',
					detailHtml:
						'Roofed kitchens need drainage that does not dump water onto the cook or across door thresholds. Tie into existing stormwater where council allows.',
				},
				{
					label: 'Floor falls',
					detailHtml:
						'Paving under cover should still fall away from the house and kitchen joinery — standing water rots door bottoms and stains stone.',
				},
				{
					label: 'Lighting',
					detailHtml:
						'Cooking after dark needs task light on the bench, not just ambient fairy lights. Plan wiring before lining is fixed.',
				},
			],
		},
		{
			id: 'permits',
			title: 'Permits and compliance — Melbourne and Sydney',
			leads: [
				'Rules vary by council and how attached the structure is to the house. Roofed works near boundaries often need a permit or neighbour notification — allow time.',
			],
			bullets: [
				'Check height limits, setback to boundaries and bushfire overlays on your title',
				'Gas appliances under cover still need clearances and certified installation',
				'Attached structures may trigger different rules than freestanding pergolas',
				'Sydney and Melbourne councils differ — use your local planning portal early, not after the slab is poured',
			],
		},
	],
	commonMistakes: [
		'<strong>Low roof directly over the BBQ</strong> — Heat, smoke and grease damage lining and feel oppressive.',
		'<strong>No guttering on a solid roof</strong> — Water sheets off onto benches, doors and guests.',
		'<strong>Treating a pergola as rain-proof</strong> — Spaced beams do not stop driving rain; appliances and power need positions that tolerate splash.',
		'<strong>Building cover before services are designed</strong> — Posts land on gas routes and drain lines if services are an afterthought.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/covered-outdoor-kitchens/' },
	faqs: [
		{
			question: 'Do covered outdoor kitchens need council approval?',
			answer:
				'Often yes for roofed structures, especially near boundaries or over a certain height. Open pergolas sometimes exempt — check your council before you build.',
		},
		{
			question: 'Can I put a BBQ under a timber pergola?',
			answer:
				'With correct clearances and ventilation, sometimes. A solid low timber ceiling directly above the grill is a bad idea — use open sky, a hood, or non-combustible lining with space.',
		},
		{
			question: 'Is a covered outdoor kitchen worth the extra cost?',
			answer:
				'If you cook year-round and the site is windy or rainy, usually yes. If you barbecue twice a summer, a simple shade sail and open BBQ may be smarter spend.',
		},
	],
	finalCta: outdoorKitchenFinalCta,
	mobbsSection: outdoorKitchenMobbsSection,
};
