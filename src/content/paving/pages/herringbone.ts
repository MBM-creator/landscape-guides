import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorHerringboneUrl = '/paving-cost-calculator?style=herringbone';
const bookUrl = '#';

export const herringbonePavingMelbournePage: PavingStylePageContent = {
	slug: 'herringbone-paving-melbourne',
	title: 'Herringbone Paving Melbourne | Costs, Layouts & Design Guide',
	metaTitle: 'Herringbone Paving Melbourne | Costs, Layouts & Design Guide',
	metaDescription:
		'Learn where herringbone paving works best, what affects cost, common installation mistakes and how to estimate a Melbourne paving project.',
	canonical: '/herringbone-paving-melbourne/',
	eyebrow: 'Paving style guide',
	h1: 'Herringbone Paving Melbourne',
	intro:
		'Herringbone paving uses rectangular pavers laid in an interlocking zig-zag pattern. It suits driveways, courtyards, paths and traditional garden spaces where strength, movement and a more detailed paving layout are part of the design.',
	primaryCtaText: 'Estimate Herringbone Paving Cost',
	primaryCtaHref: calculatorHerringboneUrl,
	secondaryLinkText: 'Back to Paving Guide',
	secondaryLinkHref: '/',
	heroImage: '/images/herringbone-paving.jpg',
	heroAlt: 'Herringbone natural stone paving in light grey tones, Melbourne outdoor area',
	heroImageWidth: 800,
	heroImageHeight: 800,
	heroFetchPriority: 'high',
	sections: [
		{
			id: 'what',
			title: 'What is herringbone paving?',
			leads: [
				'<strong>Herringbone paving</strong> sets rectangular units at 45° or 90° to the main direction of travel so joints interlock in a zig-zag rather than running in long, continuous lines. That geometry spreads load across neighbouring pavers, which is why <strong>herringbone brick paving</strong> and clay or concrete <strong>herringbone pavers</strong> are often chosen where the surface must feel robust underfoot or under tyres.',
				'Compared with stretcher bond (courses stacked in offset rows), herringbone reads busier up close but structurally behaves more like a woven field: there is no single “weak line” running the length of the pavement. The finished character depends heavily on whether you use slim bricks, chunkier concrete units or rectangular stone—so the same pattern can read heritage or quite crisp and modern.',
			],
			bullets: [
				'Rectangular pavers laid at angles so short ends meet long faces in a repeating interlock',
				'A zig-zag joint pattern that guides the eye and adds movement across the paved plane',
				'Often executed in brick, clay, concrete or rectangular natural stone, depending on budget and architecture',
				'Visually and structurally stronger than stretcher bond for many residential applications when detailed correctly',
				'Suits both traditional cottage gardens and contemporary courtyards when material colour, joint width and border detail are matched to the house',
			],
		},
		{
			id: 'where',
			title: 'Where herringbone paving works best',
			variant: 'alt',
			leads: [
				'The pattern rewards spaces where you want the pavement to feel considered rather than a plain utility slab. <strong>Herringbone driveway paving</strong> is a common brief in Melbourne when kerb appeal and vehicle tracking matter; <strong>herringbone courtyard paving</strong> and paths carry the same logic at a smaller scale.',
			],
			bullets: [
				'Driveways and other vehicle areas, when paver thickness, bedding and edge restraint are specified for wheel loads',
				'Courtyards and alfresco edges where a smaller module can wrap seating, planters and level changes neatly',
				'Side paths and utility strips that still deserve a finished look beside the house',
				'Garden paths that connect lawn, beds and entries without defaulting to a bland grid',
				'Entries and transitional zones—porch landings, steps and threshold approaches—where direction changes read clearly',
				'Traditional and heritage-style homes, plus textured garden settings where <strong>brick paving in Melbourne</strong> gardens often sits comfortably with weatherboards, brickwork or bluestone accents',
			],
		},
		{
			id: 'cost',
			title: 'What affects herringbone paving cost?',
			leads: [
				'<strong>Herringbone paving cost in Melbourne</strong> follows from area, product, set-out complexity and how much groundworks your section needs—not a generic rate per square metre. Use our <a class="hero__secondary" href="/paving-cost-calculator">paving cost calculator</a> for a guide range, then narrow it with a site visit once access, falls and intended use (foot traffic versus vehicles) are confirmed. Background on pricing is in our <a class="hero__secondary" href="/paving-cost-melbourne">Melbourne paving cost guide</a>.',
			],
			factors: [
				{
					label: 'Area in m²',
					detailHtml:
						'Overall size drives material volumes; perimeter length and shape influence cuts, soldier courses and how many full herringbone runs fit without awkward slivers.',
				},
				{
					label: 'Paver type and thickness',
					detailHtml:
						'Clay brick, concrete rectangular units and stone differ in supply cost, weight on site and structural suitability—driveways need thickness and breaking loads matched to use, not just a favourite colour.',
				},
				{
					label: 'Pattern set-out',
					detailHtml:
						'Herringbone demands a true starting line and consistent bond direction; changes in axis, feature panels or inset borders add dry-lay and cutting time compared with a single open field.',
				},
				{
					label: 'Edge restraints and borders',
					detailHtml:
						'Concrete haunching, kerbs or concealed edge profiles stop lateral creep; decorative borders often mean more cuts and slower progress around the perimeter.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Excavation depth, sub-grade improvement and compaction underpin long-term stability—particularly where old concrete, fill or reactive soils are in play.',
				},
				{
					label: 'Drainage and fall',
					detailHtml:
						'Surface water must sheet away from structures and thresholds; low spots, ponding and staining usually trace back to falls, grate positions or conflict with existing levels.',
				},
				{
					label: 'Site access',
					detailHtml:
						'Narrow side passages, steps or long barrow runs add labour and can limit how pallets, sand and spoil move through the property.',
				},
				{
					label: 'Driveway versus foot-traffic use',
					detailHtml:
						'Vehicle tracking, turning circles and parking zones need thicker units, tighter specification and often more robust bedding than a garden path that only sees pedestrians—context for the full build-up is in our <a class="hero__secondary" href="/driveway-paving-melbourne">driveway paving Melbourne</a> guide.',
				},
			],
			inlineCta: { label: 'Use the herringbone paving cost calculator', href: calculatorHerringboneUrl },
		},
	],
	prosConsIntro: 'A quick balance sheet before you lock in herringbone across a driveway, path or courtyard.',
	pros: [
		'Strong interlocking geometry that spreads load across neighbouring units',
		'Excellent visual movement along paths and across larger fields',
		'Suitable for driveways when paver thickness, bedding and edges are specified for vehicles',
		'Works naturally with brick and other rectangular modules where suppliers stock compatible sizes',
		'Timeless in traditional gardens without ruling out sharper, contemporary detailing',
	],
	cons: [
		'More set-out and alignment work than simple stretcher bond on the same area',
		'Edge cuts and border junctions can add labour where the pattern meets curves, steps or walls',
		'Poor alignment is immediately obvious because the zig-zag rhythm breaks',
		'Material choice and joint colour strongly steer whether the result feels refined or busy',
		'Very large, open planes can look visually dense unless broken with borders, planting or a change in module scale',
	],
	commonMistakes: [
		'<strong>Poor set-out from the starting line</strong> — A few millimetres of drift at the first course magnifies across the field and shows at boundaries, posts and door thresholds.',
		'<strong>Weak edge restraint</strong> — Without solid haunching or kerb detail, vehicle areas can spread joints and lose level over seasons.',
		'<strong>Inconsistent cuts at borders</strong> — Tapered slivers and uneven reveal lines read as rushed workmanship and collect debris.',
		'<strong>Wrong paver thickness for driveways</strong> — Footpath-rated units under wheel loads risk cracking, pumping and costly remediation.',
		'<strong>Ignoring fall and drainage</strong> — Water must leave the pavement and stay away from structures, timber thresholds and adjoining lawn or beds.',
		'<strong>Using a pattern that fights the house style</strong> — Herringbone should support the architecture; clashing module scale, joint colour or border width can make a quality lay feel out of place.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/herringbone-paving-melbourne' },
	faqs: [
		{
			question: 'Is herringbone paving expensive?',
			answer:
				'It is rarely the cheapest layout per square metre because cutting, alignment and border work take longer than a basic stretcher bond field. Product choice, edge detail and whether the area carries vehicles move <strong>herringbone paving cost in Melbourne</strong> more than the pattern name alone—start with the calculator, then confirm on site.',
			answerJsonLd:
				'It is rarely the cheapest layout per square metre because cutting, alignment and border work take longer than a basic stretcher bond field. Product choice, edge detail and whether the area carries vehicles move herringbone paving cost in Melbourne more than the pattern name alone—start with the calculator, then confirm on site.',
		},
		{
			question: 'Is herringbone paving good for driveways?',
			answer:
				'Yes, when pavers meet the required thickness and strength for wheel loads, the bedding layer is built to specification and edges are properly restrained. The interlock helps; the specification still has to match how you use the space.',
			answerJsonLd:
				'Yes, when pavers meet the required thickness and strength for wheel loads, the bedding layer is built to specification and edges are properly restrained. The interlock helps; the specification still has to match how you use the space.',
		},
		{
			question: 'What materials work best for herringbone paving?',
			answer:
				'Clay brick and concrete rectangular units are the everyday workhorses; natural stone works when sizes are consistent enough to keep joints readable. The best material is the one that suits exposure, cleaning expectations, vehicle use if relevant, and the tones of your façade and garden.',
			answerJsonLd:
				'Clay brick and concrete rectangular units are the everyday workhorses; natural stone works when sizes are consistent enough to keep joints readable. The best material is the one that suits exposure, cleaning expectations, vehicle use if relevant, and the tones of your façade and garden.',
		},
		{
			question: 'Is herringbone paving old-fashioned?',
			answer:
				'It is traditional, but not dated by default. Narrow modules and soft mortar-style joints read classic; larger concrete units with tight joints and minimal border can feel quite current. Execution and context matter more than the label.',
			answerJsonLd:
				'It is traditional, but not dated by default. Narrow modules and soft mortar-style joints read classic; larger concrete units with tight joints and minimal border can feel quite current. Execution and context matter more than the label.',
		},
		{
			question: 'Is herringbone harder to lay than stretcher bond?',
			answer:
				'For experienced installers it is routine; for DIY it is slower because bond lines must stay true and border cuts need planning. Most homeowners bring in a team once they see how visible small errors become in a zig-zag field.',
			answerJsonLd:
				'For experienced installers it is routine; for DIY it is slower because bond lines must stay true and border cuts need planning. Most homeowners bring in a team once they see how visible small errors become in a zig-zag field.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		title: 'Planning a herringbone paving project?',
		description:
			"Start with a realistic guide price, then organise a site visit when you're ready to properly scope the base, set-out, drainage and finish.",
		ctaHref: calculatorHerringboneUrl,
		ctaLabel: 'Estimate Herringbone Paving Cost',
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When to involve Made By Mobbs',
		variant: 'alt',
		paragraphs: [
			'Herringbone looks straightforward on a mood board; on site it is a three-way conversation between set-out, edge detail and the wider garden. Made By Mobbs Landscapes is worth involving when you want those decisions coordinated—how the bond meets the garage slab, where the axis aligns from the front path, and how borders relate to lawn, beds or decking steps.',
			'For <strong>herringbone driveway paving</strong>, the base specification and edge restraint matter as much as the brick or paver on top. If you are comparing <a class="hero__secondary" href="/wet-bed-vs-concrete-base-paving">wet bed vs concrete base paving</a> for a vehicle area, remember that thickness, restraint and structural layers—not pattern alone—carry the load. We treat driveways as engineered pavements within a landscape, not as a thin veneer laid straight over whatever was there before.',
			'Made By Mobbs designs and builds complete outdoor areas rather than isolated paving patches. That matters when levels, drainage, planting and circulation all need to agree with the finished pavement plane.',
			'This page offers general guidance only. Real pricing needs your site context—access, existing surfaces, services, intended traffic and how the new work ties into the rest of the garden—before anyone should promise a fixed figure.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
