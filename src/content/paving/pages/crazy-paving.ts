import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorCrazyUrl = '/paving-cost-calculator?style=crazy';
const bookUrl = '#';

export const crazyPavingMelbournePage: PavingStylePageContent = {
	slug: 'crazy-paving-melbourne',
	title: 'Crazy Paving Melbourne | Costs, Styles & Advice',
	metaTitle: 'Crazy Paving Melbourne | Costs, Styles & Advice',
	metaDescription:
		'What crazy paving costs in Melbourne, where it works, and what shifts price: base prep, drainage and stone choice.',
	canonical: '/crazy-paving-melbourne/',
	eyebrow: 'Melbourne paving · natural stone',
	h1: 'Crazy Paving Melbourne',
	intro:
		'Crazy paving is irregular stone fitted piece by piece. It takes longer on site than grid paving. Paths and entertaining areas suit it when joints, falls and bedding match the stone thickness and how much traffic the area gets.',
	primaryCtaText: 'Estimate your crazy paving cost in minutes',
	primaryCtaHref: calculatorCrazyUrl,
	secondaryLinkText: 'Back to Paving Guide',
	secondaryLinkHref: '/',
	heroImage: '/images/porphy-crazy-paving-driveway.jpg',
	heroAlt: 'Porphy crazy paving driveway',
	heroImageWidth: 748,
	heroImageHeight: 643,
	sections: [
		{
			id: 'what',
			title: 'What is crazy paving?',
			leads: [
				'Crazy paving uses irregular pieces of natural stone fitted together instead of a strict grid. Each piece is trimmed to suit its neighbours. That gives character—and takes more time than uniform pavers.',
			],
			bullets: [
				'Irregular natural stone, trimmed so pieces lock together',
				'Organic layout with variation across the surface',
				'More labour than standard rectangular paving',
				'Strong natural look when joints and bedding are consistent',
			],
		},
		{
			id: 'where',
			title: 'Where crazy paving works best',
			variant: 'alt',
			leads: [
				'It suits spots where you want paving to feel tied to the garden, not laid in repeating rows.',
			],
			bullets: [
				'Garden paths through planting or between outdoor areas',
				'Courtyards where a softer surface fits the space',
				'Pool surrounds when stone thickness, grip and falls suit wet use',
				'Entertaining zones where an informal layout anchors seating',
				'Feature areas near planting where stone echoes the landscape',
			],
		},
		{
			id: 'cost',
			title: 'What affects crazy paving cost?',
			leads: [
				'Quotes reflect stone, bedding and laying time—not just square metres on the plan. Our <a class="hero__secondary" href="/paving-cost-melbourne">Melbourne paving cost guide</a> covers what usually shifts those figures before you use the calculator.',
			],
			compareLink: { href: '/crazy-paving-vs-french-pattern', text: 'Compare crazy paving vs French pattern' },
			factors: [
				{
					label: 'Size (m²)',
					detailHtml:
						'Bigger areas mean more material and laying time; long edges often mean more cuts.',
				},
				{
					label: 'Stone type and thickness',
					detailHtml:
						'Price, weight on site and suitability for foot or vehicle traffic follow from the product you pick.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Excavation depth, compaction and what sits under the bedding decide whether the paving stays put.',
				},
				{
					label: 'Wet bed or concrete base',
					detailHtml:
						'Fixing depends on use, soil and movement risk; structural areas often use concrete or a wet bed. See <a class="hero__secondary" href="/wet-bed-vs-concrete-base-paving">wet bed vs concrete base paving</a>.',
				},
				{
					label: 'Drainage and fall',
					detailHtml:
						'Surface water must run off cleanly; poor falls mean ponding, stains or early wear.',
				},
				{
					label: 'Number of cuts and edges',
					detailHtml:
						'Tight curves, steps and borders add trimming and jointing versus a simple rectangle.',
				},
				{
					label: 'Site access',
					detailHtml:
						'Narrow paths, stairs or long barrow runs add labour and sometimes limit machines.',
				},
			],
			costRange: {
				title: 'Typical crazy paving cost range',
				paragraphs: [
					'Most crazy paving in Melbourne falls around $500–$700 per m², depending on size, stone, base prep and access.',
					'Use the calculator below for a range tied to your inputs.',
				],
				ctaText: 'Estimate your cost',
				ctaHref: calculatorCrazyUrl,
			},
		},
	],
	prosConsIntro: 'Handy checks before you commit to the look and upkeep.',
	pros: [
		'Natural, high-end look when detailed properly',
		'Pairs well with planting and softer garden shapes',
		'Can suit both older and modern homes',
		'Less rigid than grid paving; pattern hides small level quirks',
	],
	cons: [
		'Slower to lay and adjust on site',
		'Quality hinges on set-out, joint width and even bedding',
		'Weak drainage or base prep shows through the stone',
		'Not always the cheapest option when you compare full scope',
	],
	commonMistakes: [
		'<strong>Picking stone by looks only</strong> — Grip, thickness and suitability for the spot matter as much as colour.',
		'<strong>Uneven joints</strong> — Wide or wandering joints look rough and trap debris.',
		'<strong>Weak base prep</strong> — Shallow dig, poor compaction or wrong spec leads to movement and cracked bedding.',
		'<strong>Ignoring falls and drainage</strong> — Water must leave the paving and stay away from walls and other finishes.',
		'<strong>Wrong finish in wet zones</strong> — Pool surrounds need stone, sealers and detail at coping and drains that suit splash and bare feet.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/crazy-paving-melbourne' },
	faqs: [
		{
			question: 'Is crazy paving expensive?',
			answer:
				'Usually more per square metre than simple rectangular paving because of cutting, fitting and jointing. Stone and access move the number a lot; the calculator gives a sensible band before a firm quote.',
			answerJsonLd:
				'Usually more per square metre than simple rectangular paving because of cutting, fitting and jointing. Stone and access move the number a lot; the calculator gives a sensible band before a firm quote.',
		},
		{
			question: 'Is crazy paving suitable around pools?',
			answer:
				'Yes, when stone thickness, grip and falls suit wet use and your certifier’s requirements. Detail at coping and drainage matters as much as the stone.',
			answerJsonLd:
				"Yes, when stone thickness, grip and falls suit wet use and your certifier's requirements. Detail at coping and drainage matters as much as the stone.",
		},
		{
			question: 'Does crazy paving need a concrete base?',
			answer:
				'Not every path needs a slab. Many Melbourne jobs use concrete or a wet bed where stability, cars or ground movement are a concern. The right spec follows use, soil and drainage—not one rule for every site.',
			answerJsonLd:
				'Not every path needs a slab. Many Melbourne jobs use concrete or a wet bed where stability, cars or ground movement are a concern. The right spec follows use, soil and drainage—not one rule for every site.',
		},
		{
			question: 'Is crazy paving slippery?',
			answer:
				'Grip depends on stone, finish and whether it stays wet. We can shortlist materials for steps, damp spots and bare feet.',
			answerJsonLd:
				'Grip depends on stone, finish and whether it stays wet. We can shortlist materials for steps, damp spots and bare feet.',
		},
		{
			question: 'How long does crazy paving take to install?',
			answer:
				'A small path might be a few days; larger areas or fiddly edges take longer. Weather, access and demo affect the programme—we clarify after a walk-through.',
			answerJsonLd:
				'A small path might be a few days; larger areas or fiddly edges take longer. Weather, access and demo affect the programme—we clarify after a walk-through.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		bridge:
			'Labour and waste track how fiddly the stone is to bed—not how good the photo on your phone looked.',
		title: 'Planning a crazy paving project?',
		description:
			'Start with a calculator range that allows cutting time, then check formation depth and drainage on site before you commit.',
		ctaHref: calculatorCrazyUrl,
		ctaLabel: 'Estimate your crazy paving cost in minutes',
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When it helps to bring in Made By Mobbs',
		variant: 'alt',
		paragraphs: [
			'Made By Mobbs Landscapes designs and builds whole outdoor spaces—you’re not juggling separate trades in isolation.',
			'Crazy paving sits with planting, finished levels, drainage, lighting and material choices that make the job feel finished. Getting those relationships right is what stops paving feeling tacked on.',
			'This page is a guide only: rough ranges and checklist thinking before you commit. Firm pricing needs a proper look at access, what’s already there, services and how you’ll use the area.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
