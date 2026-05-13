import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorStretcherUrl = '/paving-cost-calculator?style=stretcher';
const bookUrl = '#';

const relatedGuidesOverride = [
	{
		href: '/herringbone-paving-melbourne',
		title: 'Herringbone Paving Melbourne',
		description:
			'Zig-zag joints for driveways and paths—what still depends on thickness, bedding and edges, plus typical costs.',
	},
	{
		href: '/paving-cost-melbourne',
		title: 'Paving Cost Melbourne',
		description:
			'What shifts quotes on Melbourne jobs, how pattern and base interact, and how to read calculator ranges.',
	},
	{
		href: '/wet-bed-vs-concrete-base-paving',
		title: 'Wet Bed vs Concrete Base Paving',
		description:
			'How bedding differs for foot traffic and cars, and why build-up matters as much as the surface pattern.',
	},
] as const;

export const stretcherBondPavingMelbournePage: PavingStylePageContent = {
	slug: 'stretcher-bond-paving-melbourne',
	title: 'Stretcher Bond Paving Melbourne | Costs, Layouts & Design Guide',
	metaTitle: 'Stretcher Bond Paving Melbourne | Costs, Layouts & Design Guide',
	metaDescription:
		'Where stretcher bond paving works, what affects cost, common mistakes and how it compares to busier patterns.',
	canonical: '/stretcher-bond-paving-melbourne/',
	eyebrow: 'Melbourne paving · layout basics',
	h1: 'Stretcher Bond Paving Melbourne',
	intro:
		'Stretcher bond is offset rectangular rows—quiet to look at, unforgiving if the bond wanders. It suits paths and patios where you want a simple grid. Base compaction, drainage and edge restraint still do the heavy lifting, same as fancier patterns.',
	primaryCtaText: 'Estimate stretcher bond paving cost',
	primaryCtaHref: calculatorStretcherUrl,
	secondaryLinkText: 'Back to Paving Guide',
	secondaryLinkHref: '/',
	heroImage: '/images/stretcher-bond.jpg',
	heroAlt: 'Stretcher bond rectangular paving layout in Melbourne outdoor area',
	heroImageWidth: 1320,
	heroImageHeight: 1320,
	heroFetchPriority: 'high',
	sections: [
		{
			id: 'what',
			title: 'What is stretcher bond paving?',
			leads: [
				'<strong>Stretcher bond paving</strong> lays <strong>stretcher bond pavers</strong>—rectangles—in parallel courses, each row offset so vertical joints don’t line up. It’s one of the <strong>simple paving patterns Melbourne</strong> homeowners ask for most: easy to picture on a path, patio or courtyard.',
				'Versus herringbone or French pattern, the surface is calmer, which suits contemporary gardens. Simplicity doesn’t drop the need for true set-out, even joints and tidy edges—mistakes show on long straight runs, same as anywhere else.',
			],
			bullets: [
				'Rectangular pavers in offset rows so joints stagger in a steady pattern',
				'A simple layout among common outdoor paver patterns',
				'Common for paths, patios and courtyards where you want a clear, quiet floor',
				'Less busy than herringbone or French pattern when viewed from living areas or across lawn',
				'Still needs accurate start lines, level control and edge restraint beside walls, steps and garage slabs',
			],
		},
		{
			id: 'where',
			title: 'Where stretcher bond paving works best',
			variant: 'alt',
			leads: [
				'Stretcher bond suits spaces where a clear grid can line up with the house, joinery and furniture without stealing the show. For <strong>rectangular paving</strong>, Melbourne gardens often use this bond when the brief is a calm field. In tight spots, busier patterns can feel loud.',
			],
			bullets: [
				'Side paths beside the house where one bond direction can lead cleanly to gates or service areas',
				'Courtyards and small terraces with simple contemporary layouts',
				'Patios and alfresco where dining settings sit on an even, orthogonal field',
				'Entries and porch landings that need a neat plane up to doors',
				'Narrow spaces where long courses help the area feel wider',
				'Modern Melbourne gardens with rectangular stone or concrete, steel, render and structured planting',
			],
		},
		{
			id: 'cost',
			title: 'What affects stretcher bond paving cost?',
			leads: [
				'<strong>Stretcher bond paving cost</strong> in Melbourne follows area, product, groundworks and finishing—not a headline $/m². Use our <a class="hero__secondary" href="/paving-cost-calculator">paving cost calculator</a> for a band, then read our <a class="hero__secondary" href="/paving-cost-melbourne">Melbourne paving cost guide</a> for how quotes break down before you lock spec on site.',
			],
			factors: [
				{
					label: 'Area in m²',
					detailHtml:
						'Size drives material; perimeter shape drives how many full courses fit and how much cutting sits at edges and services.',
				},
				{
					label: 'Paver size and material',
					detailHtml:
						'Clay, concrete and natural stone differ in price, weight and wear; module size changes joint spacing and how often you break courses around fixed points.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Dig depth, sub-grade fix and compaction underpin stability—especially over old concrete, fill or reactive soil.',
				},
				{
					label: 'Drainage and falls',
					detailHtml:
						'Surface water must leave structures and thresholds; low spots usually trace to levels, grates or clashes with existing floors.',
				},
				{
					label: 'Number of cuts',
					detailHtml:
						'Even on a simple bond, tight corners, posts, curved planters and steps add cutting and waste versus one open rectangle.',
				},
				{
					label: 'Borders and edge restraints',
					detailHtml:
						'Soldier courses, feature bands and hidden restraint add labour and material but often finish the job cleanly at the lawn line.',
				},
				{
					label: 'Access',
					detailHtml:
						'Narrow side passages, steps or long barrow runs add labour and can limit how pallets, sand and spoil move.',
				},
				{
					label: 'Demolition or existing surface removal',
					detailHtml:
						'Breaking out old concrete, pavers or bitumen changes time and tip fees before the new build-up starts.',
				},
			],
			inlineCta: { label: 'Estimate stretcher bond paving cost', href: calculatorStretcherUrl },
		},
	],
	prosConsIntro: 'Short pros and cons before you choose stretcher bond on paths, patios or courtyards.',
	pros: [
		'Clean, simple look beside architecture and planting',
		'Usually more predictable cost than fussy multi-size layouts on the same area',
		'Works well in narrow spaces where long courses help proportion',
		'Suits many rectangular pavers stocked in common Melbourne sizes',
		'Less visually busy than herringbone or French pattern when you want the garden to lead',
	],
	cons: [
		'Can look flat if colour and texture are timid and border detail is weak',
		'Alignment and joint variation show on long straight runs',
		'Wide open fields need disciplined set-out from the first course',
		'Less decorative than herringbone or French pattern when you want strong surface movement',
		'Still needs proper base prep—a simple pattern doesn’t mean a thin structure',
	],
	commonMistakes: [
		'<strong>Treating simple as easy</strong> — Stretcher bond forgives less than people expect once bond lines drift or joints wander.',
		'<strong>Poor starting line</strong> — Small errors at the first course grow at boundaries, posts and doors.',
		'<strong>Uneven joints</strong> — Irregular joint width looks rough and traps debris on paths and patios.',
		'<strong>Weak edge restraint</strong> — Without solid haunching or kerb, traffic and seasonal movement break down the edge.',
		'<strong>Ignoring falls and drainage</strong> — Water must leave the paving and stay off structures, timber doors and lawn.',
		'<strong>Bland paver plus bland layout</strong> — When both are neutral, the result can feel thin; borders, joint colour or richer stone often help.',
	],
	relatedGuidesPosition: 'before-faq',
	relatedGuides: { mode: 'override', guides: relatedGuidesOverride },
	faqs: [
		{
			question: 'Is stretcher bond paving cheaper?',
			answer:
				'Often more predictable per m² than herringbone, French pattern or crazy paving because set-out and cutting are usually simpler. Grade, base prep, drainage, borders and access still move <strong>stretcher bond paving cost</strong> in Melbourne more than the pattern—use the calculator, then confirm on site.',
			answerJsonLd:
				'Often more predictable per m² than herringbone, French pattern or crazy paving because set-out and cutting are usually simpler. Grade, base prep, drainage, borders and access still move stretcher bond paving cost in Melbourne more than the pattern—use the calculator, then confirm on site.',
		},
		{
			question: 'Is stretcher bond paving suitable for driveways?',
			answer:
				'It can work for light residential cars when paver thickness and strength suit wheels, bedding is to spec and edges are restrained. Many owners still prefer herringbone or similar interlock on driveways; stretcher bond often suits paths, patios and courtyards better.',
			answerJsonLd:
				'It can work for light residential cars when paver thickness and strength suit wheels, bedding is to spec and edges are restrained. Many owners still prefer herringbone or similar interlock on driveways; stretcher bond often suits paths, patios and courtyards better.',
		},
		{
			question: 'What pavers work best in stretcher bond?',
			answer:
				'Any consistent rectangle—clay brick, concrete pavers or sawn stone—if dimensions stay uniform enough for tidy joints. Best choice follows sun, cleaning, vehicle use if any, and colour with façade and garden.',
			answerJsonLd:
				'Any consistent rectangle—clay brick, concrete pavers or sawn stone—if dimensions stay uniform enough for tidy joints. Best choice follows sun, cleaning, vehicle use if any, and colour with façade and garden.',
		},
		{
			question: 'Is stretcher bond paving too plain?',
			answer:
				'The layout is deliberately quiet; whether it reads refined or flat depends on stone texture and tone, joint colour, borders and how paving meets planting and neighbouring materials. Simple patterns still reward neat set-out and edges.',
			answerJsonLd:
				'The layout is deliberately quiet; whether it reads refined or flat depends on stone texture and tone, joint colour, borders and how paving meets planting and neighbouring materials. Simple patterns still reward neat set-out and edges.',
		},
		{
			question: 'Is stretcher bond easier to lay than herringbone?',
			answer:
				'Usually quicker for pros across an open field, with fewer angled cuts than herringbone at boundaries. DIY still underestimates how visible a wandering bond or uneven joints are on long runs—base, levels and restraint matter just as much.',
			answerJsonLd:
				'Usually quicker for pros across an open field, with fewer angled cuts than herringbone at boundaries. DIY still underestimates how visible a wandering bond or uneven joints are on long runs—base, levels and restraint matter just as much.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		bridge:
			'Even a simple grid fails when falls send water toward the house or the base wasn’t compacted properly—pattern choice doesn’t fix that.',
		title: 'Planning a stretcher bond paving project?',
		description:
			'Model the area with realistic base assumptions, then walk the site when you need confirmed levels, drainage ties and restraint detail.',
		ctaHref: calculatorStretcherUrl,
		ctaLabel: 'Estimate stretcher bond paving cost',
	},
	compareSection: {
		id: 'compare',
		title: 'Stretcher bond vs herringbone: when each makes sense',
		variant: 'alt',
		leads: [
			'Stretcher bond is simpler and calmer: joints run in predictable lines, which suits <strong>rectangular paving</strong> beside contemporary Melbourne façades when you want a quiet floor. Herringbone adds movement and interlock between units—often preferred for driveways and spots where tracking matters.',
			'Neither pattern replaces correct thickness, bedding and restraint for the job. If you’re weighing both, our <a class="hero__secondary" href="/herringbone-paving-melbourne">herringbone paving Melbourne</a> guide covers set-out, cost drivers and where the zig-zag field usually wins.',
		],
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When it helps to bring in Made By Mobbs',
		paragraphs: [
			'Simple paving only works when set-out, levels, drainage, planting and surrounding materials are sorted together. A stretcher bond field that ignores how rainwater leaves the section, how a patio meets internal floor heights, or how lawn and beds meet the edge will still disappoint—even with good pavers on top.',
			'Made By Mobbs Landscapes designs and builds whole outdoor spaces rather than isolated paving strips. That matters when paths, retaining, planting and built work all need to match the finished paving plane.',
			'This page is general guidance. Real pricing needs your job context—access, existing surfaces, traffic and how new work ties into the garden—before anyone should promise a fixed figure.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
