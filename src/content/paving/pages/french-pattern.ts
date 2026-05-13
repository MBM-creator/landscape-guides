import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorFrenchUrl = '/paving-cost-calculator?style=french-pattern';
const bookUrl = '#';

export const frenchPatternPavingMelbournePage: PavingStylePageContent = {
	slug: 'french-pattern-paving-melbourne',
	title: 'French Pattern Paving Melbourne | Costs, Patterns & Design Guide',
	metaTitle: 'French Pattern Paving Melbourne | Costs, Patterns & Design Guide',
	metaDescription:
		'Learn what French pattern paving is, where it works best, typical Melbourne costs, common mistakes and how to estimate your project using our paving cost calculator.',
	canonical: '/french-pattern-paving-melbourne/',
	eyebrow: 'Paving style guide',
	h1: 'French Pattern Paving Melbourne',
	intro:
		'French pattern paving uses multiple stone sizes laid in a repeating modular layout. It creates a timeless, structured look that suits entertaining areas, pool surrounds and larger paved spaces across Melbourne homes.',
	primaryCtaText: 'Estimate French Pattern Paving Cost',
	primaryCtaHref: calculatorFrenchUrl,
	secondaryLinkText: 'Back to Paving Guide',
	secondaryLinkHref: '/',
	heroImage: '/images/french-pattern.webp',
	heroAlt: 'French pattern travertine paving in Melbourne backyard entertaining area',
	heroImageWidth: 1151,
	heroImageHeight: 1200,
	heroFetchPriority: 'high',
	sections: [
		{
			id: 'what',
			title: 'What is French pattern paving?',
			leads: [
				'French pattern paving (sometimes called Versailles or modular pattern) arranges tiles in a fixed repeat of several sizes. The layout reads orderly from a distance, but the mix of lengths and widths breaks up the rigidity of a single-size grid—something homeowners often notice when comparing <strong>French pattern outdoor tiles</strong> with stretcher-bond paving.',
				'It is more complex to set out than simple stretcher bond: each repeat must align, joint lines need to stay readable and stone variation has to be balanced across the field. <strong>French pattern travertine in Melbourne</strong> and limestone are common choices because their tonal variation suits the pattern; denser granites can work where the brief calls for a crisper look.',
			],
			bullets: [
				'A repeating modular layout built from several standard tile sizes, not one repeated rectangle',
				'Multiple tile sizes per repeat, which helps scale the pattern across large areas without visual monotony',
				'A structured surface that still feels natural when paired with the right stone and joint colour',
				'Often supplied as <strong>French pattern pavers</strong> in travertine or limestone, with packs sized to complete full repeats',
				'More cutting, dry-lay thinking and layout time than uniform pavers, which feeds into <strong>French pattern paving cost in Melbourne</strong>',
			],
		},
		{
			id: 'where',
			title: 'Where French pattern paving works best',
			variant: 'alt',
			leads: [
				'The pattern needs enough area to show several full repeats; tiny landings rarely do it justice. Where there is room, it carries <strong>French pattern paving around pools</strong>, alfresco slabs and garden connections with equal confidence—as long as stone choice, slip resistance and falls suit each use. For travertine specifically beside water, see our <a class="hero__secondary" href="/travertine-pool-paving-melbourne">travertine pool paving Melbourne</a> guide.',
			],
			bullets: [
				'Pool surrounds, when drainage, coping lines and wet-area slip ratings are resolved with the pool fence and certifier in mind',
				'Entertaining areas and outdoor dining where the modular field can align with furniture groupings without feeling grid-locked',
				'Courtyards that benefit from a single, legible paving language across the whole floor plane',
				'Larger patios and terrace slabs where the repeat can run without constant small cuts at the perimeter',
				'Mediterranean-influenced and contemporary Melbourne homes where modular stone sits comfortably beside rendered walls, steel and planting',
			],
		},
		{
			id: 'cost',
			title: 'What affects French pattern paving cost?',
			leads: [
				'<strong>French pattern paving cost in Melbourne</strong> is driven by how much stone, bedding and skilled setting your site needs, not headline square metres alone. Use our <a class="hero__secondary" href="/paving-cost-calculator">paving cost calculator</a> for a guide range, then refine with a site visit once access, levels and finishes are clear. For how those drivers typically show up on quotes, see our <a class="hero__secondary" href="/paving-cost-melbourne">paving cost guide</a>.',
			],
			compareLink: { href: '/crazy-paving-vs-french-pattern', text: 'Compare crazy paving vs French pattern' },
			factors: [
				{
					label: 'Area in m²',
					detailHtml:
						'Overall size sets material quantities; perimeter length and shape often dictate cuts, borders and how many pattern repeats fit cleanly.',
				},
				{
					label: 'Stone type and thickness',
					detailHtml:
						'Supply price, handling weight and structural suitability (foot traffic, furniture, occasional vehicle) follow directly from the product and its thickness.',
				},
				{
					label: 'Pattern complexity',
					detailHtml:
						'French pattern is inherently more involved than a single-size layout; tight modules, feature bands or direction changes add setting-out time.',
				},
				{
					label: 'Number of cuts and borders',
					detailHtml:
						'Steps, curved edges, pool rebates and soldier courses multiply cuts and slow the lay compared with a simple rectangle.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Excavation depth, sub-grade treatment and compaction underpin long-term stability—particularly where existing paving or fill has to be removed. Modular fields around pools and large slabs often sit on a slab-supported system, but pedestrian areas may use a mortar bed on crushed rock—see <a class="hero__secondary" href="/wet-bed-vs-concrete-base-paving">wet bed vs concrete base paving</a> for a side-by-side view.',
				},
				{
					label: 'Drainage and fall',
					detailHtml:
						'Surface water must sheet away from structures and pool shells; poor falls show up as ponding, efflorescence and premature wear at low spots.',
				},
				{
					label: 'Site access',
					detailHtml:
						'Narrow side paths, stairs or long barrow runs add labour and can limit how materials are brought to the back garden.',
				},
			],
			inlineCta: { label: 'Estimate French Pattern Paving Cost', href: calculatorFrenchUrl },
		},
	],
	prosConsIntro: 'A straightforward checklist before you commit to modular stone across a large area of the garden.',
	pros: [
		'Premium, timeless appearance that reads as considered rather than generic',
		'Visually softer than a plain grid of identical units, especially at pool and alfresco scale',
		'Suits natural stone packs sold for modular laying; grain and tone variation feel intentional',
		'Strong resale appeal when detailing, falls and materials are well resolved',
	],
	cons: [
		'More cutting and layout time than uniform pavers, which affects programme and price',
		'Pattern mistakes and drift in joint alignment are visually obvious once you notice them',
		'Requires disciplined set-out from the first repeat—shortcuts telegraph across the whole field',
		'Material waste can be higher than single-size paving, depending on module and edge geometry',
	],
	commonMistakes: [
		'<strong>Inconsistent joint spacing</strong> — Joints that wander or tighten unevenly break the modular rhythm and trap organic debris.',
		'<strong>Poor set-out alignment</strong> — If early repeats are skewed, the pattern will not reconcile at boundaries, steps or pool coping.',
		'<strong>Mixing incompatible stone batches</strong> — Different calibres or tonal lots within one field read as patchy rather than natural variation.',
		'<strong>Poor drainage around pools</strong> — Water must leave the pavement and stay away from the shell and adjoining finishes; falls and grate positions need to work with the pattern.',
		'<strong>Choosing slippery finishes</strong> — Honed or filled surfaces around wet zones need to be checked against how the area will be used, including bare feet and winter mould.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/french-pattern-paving-melbourne' },
	faqs: [
		{
			question: 'Is French pattern paving expensive?',
			answer:
				'It usually costs more per square metre than straightforward single-size paving because of layout, cutting and the care needed to keep repeats true. Stone grade, thickness and site access move the figure substantially—the calculator on this site is the sensible first step before a fixed quote.',
			answerJsonLd:
				'It usually costs more per square metre than straightforward single-size paving because of layout, cutting and the care needed to keep repeats true. Stone grade, thickness and site access move the figure substantially\u2014the calculator on this site is the sensible first step before a fixed quote.',
		},
		{
			question: 'Is French pattern paving good around pools?',
			answer:
				'It can work very well around pools when module size, slip resistance, falls and coping junctions are chosen for wet use and your certifier\u2019s requirements. The pattern itself does not replace those technical decisions.',
			answerJsonLd:
				"It can work very well around pools when module size, slip resistance, falls and coping junctions are chosen for wet use and your certifier\u2019s requirements. The pattern itself does not replace those technical decisions.",
		},
		{
			question: 'What stone is best for French pattern paving?',
			answer:
				'Travertine and limestone modular packs are the most common in Melbourne because they suit the scale of residential repeats and soften visually. The \u201cbest\u201d answer still follows from exposure, cleaning expectations, pool rules if relevant, and the architecture you are pairing with.',
			answerJsonLd:
				'Travertine and limestone modular packs are the most common in Melbourne because they suit the scale of residential repeats and soften visually. The \u201Cbest\u201D answer still follows from exposure, cleaning expectations, pool rules if relevant, and the architecture you are pairing with.',
		},
		{
			question: 'Does French pattern paving date?',
			answer:
				'Modular natural stone has been used for centuries; what dates a project is usually poor detailing or a fad colour rather than the pattern. Neutral stone, disciplined joints and correct falls tend to age calmly.',
			answerJsonLd:
				'Modular natural stone has been used for centuries; what dates a project is usually poor detailing or a fad colour rather than the pattern. Neutral stone, disciplined joints and correct falls tend to age calmly.',
		},
		{
			question: 'Is French pattern paving hard to lay?',
			answer:
				'For an experienced paving team it is routine; for a first-time DIYer it is demanding because small set-out errors compound across the field. Most homeowners engage specialists once they understand the cutting and alignment time involved.',
			answerJsonLd:
				'For an experienced paving team it is routine; for a first-time DIYer it is demanding because small set-out errors compound across the field. Most homeowners engage specialists once they understand the cutting and alignment time involved.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		title: 'Planning a French pattern paving project?',
		description:
			"Start with a realistic guide price, then organise a site visit when you're ready to properly scope materials, levels and layout.",
		ctaHref: calculatorFrenchUrl,
		ctaLabel: 'Estimate French Pattern Paving Cost',
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When to involve Made By Mobbs',
		variant: 'alt',
		paragraphs: [
			'Made By Mobbs Landscapes delivers complete outdoor spaces rather than isolated paving-only packages. French pattern work sits in the middle of levels, planting, drainage and how you move through the garden day to day.',
			'We are particularly useful when the modular field needs to meet lawn, garden beds or built planters cleanly—<strong>integration with planting</strong> and paving should feel like one design, not a hard surface dropped onto a plan. The same applies to <strong>levels and drainage</strong> where the pavement ties into existing thresholds, steps and rainwater paths.',
			'<strong>Coping and edging details</strong> around pools, and the <strong>relationship between paving and architecture</strong> (eaves lines, door heights, cladding joints), are where modular stone either looks bespoke or looks like an afterthought. We resolve those junctions before ordering stone.',
			'This page is guidance only: sensible questions and ballpark thinking before you commit. Firm pricing still depends on a proper look at access, services, existing structures and how you intend to use each zone.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
