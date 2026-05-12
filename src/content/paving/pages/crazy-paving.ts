import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorCrazyUrl = '/paving-cost-calculator?style=crazy';
const bookUrl = '#';

export const crazyPavingMelbournePage: PavingStylePageContent = {
	slug: 'crazy-paving-melbourne',
	title: 'Crazy Paving Melbourne | Costs, Styles & Advice',
	metaTitle: 'Crazy Paving Melbourne | Costs, Styles & Advice',
	metaDescription:
		'Learn what crazy paving costs in Melbourne, where it works best, and what affects pricing, base preparation, drainage and material choice.',
	canonical: '/crazy-paving-melbourne/',
	eyebrow: 'Paving Style Guide',
	h1: 'Crazy Paving Melbourne',
	intro:
		'Crazy paving is one of the most distinctive ways to create a natural stone path, patio or entertaining area. It suits Melbourne homes where texture, movement and a less formal finish are part of the design.',
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
				'Crazy paving uses irregular pieces of natural stone, fitted together to form an organic pattern rather than a strict grid. Each piece is handled and trimmed to suit its neighbours, which gives the finished surface real character—and takes more time than laying uniform rectangular pavers.',
			],
			bullets: [
				'Irregular natural stone pieces, selected and trimmed to lock together',
				'An organic pattern with movement and variation across the surface',
				'More labour-intensive than standard rectangular paving',
				'Strong visual character that reads as natural and crafted rather than mass-produced',
			],
		},
		{
			id: 'where',
			title: 'Where crazy paving works best',
			variant: 'alt',
			leads: [
				'It shines where you want the paving to feel connected to the garden and architecture, not stamped out in repeating rows.',
			],
			bullets: [
				'Garden paths that curve through planting or connect outdoor “rooms”',
				'Courtyards where a softer, less formal surface suits the scale of the space',
				'Pool surrounds, when stone type, thickness, slip resistance and falls are chosen for wet use',
				'Entertaining areas where an organic layout anchors seating and tables',
				'Feature zones near planting, where the stone can echo natural textures in the landscape',
			],
		},
		{
			id: 'cost',
			title: 'What affects crazy paving cost?',
			leads: [
				'Quotes reflect how much stone, bedding and skilled laying time your site needs—not just the square metres on the plan. Our <a class="hero__secondary" href="/paving-cost-melbourne">Melbourne paving cost guide</a> walks through what usually moves those figures before you plug numbers into the calculator.',
			],
			compareLink: { href: '/crazy-paving-vs-french-pattern', text: 'Compare crazy paving vs French pattern' },
			factors: [
				{
					label: 'Size (m²)',
					detailHtml:
						'Overall project size scales material volumes and laying time; perimeter length often drives cuts and edging.',
				},
				{
					label: 'Stone type and thickness',
					detailHtml:
						'Supply cost, handling weight and suitability for foot traffic or vehicles all follow from the product you choose.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Excavation depth, compaction and what sits below the bedding layer determine long-term stability.',
				},
				{
					label: 'Wet bed or concrete base',
					detailHtml:
						'The fixing method depends on use, soil and movement risk; structural areas often spec a concrete slab or wet bed. For how the two approaches differ in practice, see <a class="hero__secondary" href="/wet-bed-vs-concrete-base-paving">wet bed vs concrete base paving</a>.',
				},
				{
					label: 'Drainage and fall',
					detailHtml:
						'Surface water must sheet away cleanly; poor falls show up as ponding, staining or premature wear.',
				},
				{
					label: 'Number of cuts and edges',
					detailHtml:
						'Tight curves, steps and borders multiply trimming and jointing compared with a simple rectangle.',
				},
				{
					label: 'Site access',
					detailHtml:
						'Narrow side paths, stairs or long barrow runs add labour and sometimes crane or machine constraints.',
				},
			],
			costRange: {
				title: 'Typical crazy paving cost range',
				paragraphs: [
					'Most crazy paving projects in Melbourne sit between $500–$700 per m², depending on size, stone type, base preparation and access.',
					'Use the calculator below to get a project-specific range.',
				],
				ctaText: 'Estimate your cost',
				ctaHref: calculatorCrazyUrl,
			},
		},
	],
	prosConsIntro: 'Useful for deciding whether the look and ongoing care match how you use the space.',
	pros: [
		'Natural, premium appearance that ages well when detailed correctly',
		'Works beautifully with planting and softer landscape forms',
		'Can suit heritage façades and contemporary architecture alike',
		'Less rigid than standard paving; movement in the pattern hides minor irregularity',
	],
	cons: [
		'More labour-intensive to lay and to adjust on site',
		'Quality depends heavily on set-out, joint width and consistent bedding',
		'Poor drainage or base preparation will eventually telegraph through the stone',
		'Not always the cheapest option when total scope is compared like-for-like',
	],
	commonMistakes: [
		'<strong>Choosing stone only by appearance</strong> — Slip rating, thickness and suitability for the location matter as much as colour.',
		'<strong>Inconsistent joints</strong> — Wide, wandering joints or uneven bedding read as rushed workmanship and trap debris.',
		'<strong>Poor base preparation</strong> — Skipping depth, compaction or specification leads to movement and cracked bedding.',
		'<strong>Ignoring falls and drainage</strong> — Water must leave the pavement and stay away from structures and adjoining finishes.',
		'<strong>Using the wrong finish around wet areas</strong> — Pool surrounds and splash zones need compatible stone, sealers and detail at coping and grate lines.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/crazy-paving-melbourne' },
	faqs: [
		{
			question: 'Is crazy paving expensive?',
			answer:
				'It is usually more per square metre than straightforward rectangular paving because of cutting, fitting and jointing time. Stone choice and site access move the figure a lot; the calculator gives a sensible guide range before a site-specific quote.',
			answerJsonLd:
				'It is usually more per square metre than straightforward rectangular paving because of cutting, fitting and jointing time. Stone choice and site access move the figure a lot; the calculator gives a sensible guide range before a site-specific quote.',
		},
		{
			question: 'Is crazy paving suitable around pools?',
			answer:
				'It can be, when stone type, thickness, slip resistance and falls are selected for wet use and your pool certifier\u2019s requirements. Detail at the coping and drainage matters as much as the stone itself.',
			answerJsonLd:
				"It can be, when stone type, thickness, slip resistance and falls are selected for wet use and your pool certifier\u2019s requirements. Detail at the coping and drainage matters as much as the stone itself.",
		},
		{
			question: 'Does crazy paving need a concrete base?',
			answer:
				'Not every path needs a slab, but many Melbourne installations use a concrete base or wet bed where stability, vehicle load or ground movement is a concern. The right specification follows from use, soil and drainage—not a one-size rule.',
			answerJsonLd:
				'Not every path needs a slab, but many Melbourne installations use a concrete base or wet bed where stability, vehicle load or ground movement is a concern. The right specification follows from use, soil and drainage\u2014not a one-size rule.',
		},
		{
			question: 'Is crazy paving slippery?',
			answer:
				'Slip resistance depends on the stone, finish and whether the surface is wet. We can shortlist materials and treatments for steps, paths and areas that stay damp or see bare feet.',
			answerJsonLd:
				'Slip resistance depends on the stone, finish and whether the surface is wet. We can shortlist materials and treatments for steps, paths and areas that stay damp or see bare feet.',
		},
		{
			question: 'How long does crazy paving take to install?',
			answer:
				'A small garden path might take a few days on site; larger entertaining areas or complex edges take longer. Weather, access and how much existing paving or lawn needs removing also affect the programme—something we clarify after a walk-through.',
			answerJsonLd:
				'A small garden path might take a few days on site; larger entertaining areas or complex edges take longer. Weather, access and how much existing paving or lawn needs removing also affect the programme\u2014something we clarify after a walk-through.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		title: 'Planning a crazy paving project?',
		description: "Start with a guide price, then book a site visit when you're ready for a proper scope.",
		ctaHref: calculatorCrazyUrl,
		ctaLabel: 'Estimate your crazy paving cost in minutes',
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When to involve Made By Mobbs',
		variant: 'alt',
		paragraphs: [
			'Made By Mobbs Landscapes designs and builds complete outdoor spaces—no need to employ individual trades in isolation.',
			'Crazy paving sits alongside planting, finished levels, drainage, lighting and the correct materials that set your finished project apart. Getting those relationships right is what makes the paving feel intentional rather than bolted on.',
			'This page is a guide only: sensible ranges and checklist thinking before you commit. Firm pricing always requires a proper review of access, existing surfaces, services and how you intend to use the area.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
