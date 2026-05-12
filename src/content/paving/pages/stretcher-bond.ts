import type { PavingStylePageContent } from '../pavingStylePage.types';

const calculatorStretcherUrl = '/paving-cost-calculator?style=stretcher';
const bookUrl = '#';

const relatedGuidesOverride = [
	{
		href: '/herringbone-paving-melbourne',
		title: 'Herringbone Paving Melbourne',
		description:
			'Interlocking rectangular pavers with more movement and structural interlock—typical driveway and path considerations, costs and set-out.',
	},
	{
		href: '/paving-cost-melbourne',
		title: 'Paving Cost Melbourne',
		description:
			'What moves quotes across Melbourne outdoor projects, how pattern and base preparation interact, and how to interpret calculator ranges.',
	},
	{
		href: '/wet-bed-vs-concrete-base-paving',
		title: 'Wet Bed vs Concrete Base Paving',
		description:
			'How bedding systems differ for pedestrian and vehicle areas, and why the right build-up matters as much as the surface pattern.',
	},
] as const;

export const stretcherBondPavingMelbournePage: PavingStylePageContent = {
	slug: 'stretcher-bond-paving-melbourne',
	title: 'Stretcher Bond Paving Melbourne | Costs, Layouts & Design Guide',
	metaTitle: 'Stretcher Bond Paving Melbourne | Costs, Layouts & Design Guide',
	metaDescription:
		'Learn where stretcher bond paving works best, what affects cost, common mistakes and how it compares with more complex paving patterns.',
	canonical: '/stretcher-bond-paving-melbourne/',
	eyebrow: 'Paving style guide',
	h1: 'Stretcher Bond Paving Melbourne',
	intro:
		'Stretcher bond paving uses rectangular pavers laid in a simple offset pattern. It is one of the most common paving layouts because it is clean, versatile and usually more predictable than highly detailed patterns.',
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
				'<strong>Stretcher bond paving</strong> lays <strong>stretcher bond pavers</strong>—rectangular units—in parallel courses, with each row offset by half a unit (or another regular fraction) so vertical joints do not line up through the field. Among <strong>simple paving patterns Melbourne</strong> homeowners specify most often, it is the structured default: readable, orderly and easy to imagine across a path, patio or courtyard.',
				'Compared with herringbone or French pattern, the surface is less visually busy, which suits contemporary gardens and calm outdoor rooms. That simplicity does not remove the need for careful set-out, consistent jointing and resolved edge detail—errors read plainly on long long straight runs—which still need the same attention to thresholds, lawns and planter edges you would expect on any Melbourne paving commission.',
			],
			bullets: [
				'Rectangular pavers laid in offset rows so joints stagger in a regular rhythm',
				'A simple, structured layout within broader outdoor paver patterns',
				'Common for paths, patios and courtyards where you want the floor plane to feel quiet and legible',
				'Less visually busy than herringbone or French pattern when viewed from living spaces or across lawn',
				'Still demands accurate starting lines, level control and edge restraint—particularly beside walls, steps and garage slabs',
			],
		},
		{
			id: 'where',
			title: 'Where stretcher bond paving works best',
			variant: 'alt',
			leads: [
				'Stretcher bond rewards spaces where a clear grid can align with architecture, joinery and furniture without competing for attention. For <strong>rectangular paving</strong>, Melbourne gardens often suit this bond when the brief calls for a calm field that remains easy to read on site. It is especially forgiving in tighter proportions where busier patterns can feel visually loud.',
			],
			bullets: [
				'Side paths beside the house, where a single bond direction can carry the eye cleanly to gates or service areas',
				'Courtyards and small terraces with simple contemporary garden layouts',
				'Patios and alfresco slabs where dining settings benefit from a calm, orthogonal field',
				'Entries and porch landings that need a neat, understated plane up to thresholds',
				'Narrow spaces where long courses help the area feel wider and more intentional',
				'Modern Melbourne gardens pairing rectangular stone or concrete with steel, render and structured planting',
			],
		},
		{
			id: 'cost',
			title: 'What affects stretcher bond paving cost?',
			leads: [
				'<strong>Stretcher bond paving cost</strong> in Melbourne follows from area, product, groundworks and finishing detail—not a headline rate per square metre. Use our <a class="hero__secondary" href="/paving-cost-calculator">paving cost calculator</a> for a guide range, then read our <a class="hero__secondary" href="/paving-cost-melbourne">Melbourne paving cost guide</a> for how quotes typically break down before you lock in a specification on site.',
			],
			factors: [
				{
					label: 'Area in m²',
					detailHtml:
						'Overall size drives material volumes; perimeter length and shape influence how many full courses fit and how much cutting sits at edges and around services.',
				},
				{
					label: 'Paver size and material',
					detailHtml:
						'Clay, concrete and natural stone differ in supply cost, weight on site and long-term wear; module scale changes joint rhythm and how often you break courses around fixed points.',
				},
				{
					label: 'Base preparation',
					detailHtml:
						'Excavation depth, sub-grade improvement and compaction underpin stability—particularly where old concrete, fill or reactive soils are in play.',
				},
				{
					label: 'Drainage and falls',
					detailHtml:
						'Surface water must sheet away from structures and thresholds; low spots and ponding usually trace back to levels, grate positions or clashes with existing finished floors.',
				},
				{
					label: 'Number of cuts',
					detailHtml:
						'Even on a simple bond, tight returns, posts, curved planters and step treads add cutting time and waste compared with a single open rectangle.',
				},
				{
					label: 'Borders and edge restraints',
					detailHtml:
						'Soldier courses, feature bands and concealed restraint profiles add labour and material but often make the difference between a tidy perimeter and a field that looks unfinished at the lawn line.',
				},
				{
					label: 'Access',
					detailHtml:
						'Narrow side passages, steps or long barrow runs add labour and can limit how pallets, sand and spoil move through the property.',
				},
				{
					label: 'Demolition or existing surface removal',
					detailHtml:
						'Breaking out old concrete, pavers or bitumen changes programme length and disposal cost before the new build-up even starts.',
				},
			],
			inlineCta: { label: 'Estimate stretcher bond paving cost', href: calculatorStretcherUrl },
		},
	],
	prosConsIntro: 'A concise balance before you choose stretcher bond across paths, patios or courtyards.',
	pros: [
		'Clean and simple appearance that sits quietly beside architecture and planting',
		'Usually more cost-predictable than highly patterned or multi-size layouts on the same area',
		'Works well in narrow areas where long courses reinforce proportion',
		'Suits many rectangular pavers stocked by Melbourne suppliers in common module sizes',
		'Less visually busy than herringbone or French pattern when you want the garden to lead',
	],
	cons: [
		'Can look plain if paver colour and texture are timid and border detail is weak',
		'Alignment issues and joint variation are easy to see on uninterrupted runs',
		'Long straight fields need disciplined set-out from the first course',
		'Not as decorative as herringbone or French pattern when you want strong surface movement',
		'Still relies on proper base preparation—simple pattern does not mean thin structure',
	],
	commonMistakes: [
		'<strong>Assuming simple means low skill</strong> — Stretcher bond forgives less than people expect once bond lines drift or joints wander across a wide field.',
		'<strong>Poor starting line</strong> — A few millimetres of error at the first course magnifies at boundaries, posts and door thresholds.',
		'<strong>Inconsistent joints</strong> — Uneven joint width reads as rushed workmanship and traps organic matter on paths and patios.',
		'<strong>Weak edge restraint</strong> — Without solid haunching or kerb detail, traffic and seasonal movement can break down the perimeter.',
		'<strong>Ignoring falls and drainage</strong> — Water must leave the pavement and stay away from structures, timber doors and adjoining lawn or beds.',
		'<strong>Using a bland paver in a bland layout</strong> — When both pattern and material are neutral to a fault, the result can feel under-designed; borders, joint colour or a richer stone tone often carry the refinement.',
	],
	relatedGuidesPosition: 'before-faq',
	relatedGuides: { mode: 'override', guides: relatedGuidesOverride },
	faqs: [
		{
			question: 'Is stretcher bond paving cheaper?',
			answer:
				'It is often more cost-predictable per square metre than herringbone, French pattern or crazy paving because set-out and cutting are usually simpler on a rectangular field. Product grade, base preparation, drainage, borders and access still move <strong>stretcher bond paving cost</strong> in Melbourne more than the pattern name alone—use the calculator, then confirm on site.',
			answerJsonLd:
				'It is often more cost-predictable per square metre than herringbone, French pattern or crazy paving because set-out and cutting are usually simpler on a rectangular field. Product grade, base preparation, drainage, borders and access still move stretcher bond paving cost in Melbourne more than the pattern name alone—use the calculator, then confirm on site.',
		},
		{
			question: 'Is stretcher bond paving suitable for driveways?',
			answer:
				'It can work for light residential vehicle use when paver thickness and strength suit wheel loads, the bedding layer is built to specification and edges are properly restrained. Many Melbourne homeowners still prefer herringbone or similar interlock for driveways; stretcher bond often suits paths, patios and courtyards better.',
			answerJsonLd:
				'It can work for light residential vehicle use when paver thickness and strength suit wheel loads, the bedding layer is built to specification and edges are properly restrained. Many Melbourne homeowners still prefer herringbone or similar interlock for driveways; stretcher bond often suits paths, patios and courtyards better.',
		},
		{
			question: 'What pavers work best in stretcher bond?',
			answer:
				'Any consistent rectangular module—clay brick, concrete pavers or sawn stone—can run in stretcher bond if dimensions stay uniform enough to keep joints readable. The best choice follows exposure, cleaning expectations, vehicle use if relevant, and how the colour sits with your façade and garden.',
			answerJsonLd:
				'Any consistent rectangular module—clay brick, concrete pavers or sawn stone—can run in stretcher bond if dimensions stay uniform enough to keep joints readable. The best choice follows exposure, cleaning expectations, vehicle use if relevant, and how the colour sits with your façade and garden.',
		},
		{
			question: 'Is stretcher bond paving too plain?',
			answer:
				'The layout is deliberately calm; whether it reads refined or flat depends on paver texture and tone, joint colour, border detail and how the paved plane meets planting and adjacent materials. Simple outdoor paver patterns still reward disciplined set-out and edge treatment.',
			answerJsonLd:
				'The layout is deliberately calm; whether it reads refined or flat depends on paver texture and tone, joint colour, border detail and how the paved plane meets planting and adjacent materials. Simple outdoor paver patterns still reward disciplined set-out and edge treatment.',
		},
		{
			question: 'Is stretcher bond easier to lay than herringbone?',
			answer:
				'For experienced installers stretcher bond is usually quicker to run across an open field, with fewer angular cuts than herringbone at boundaries. DIYers still underestimate how visible a wandering bond line or uneven joints become on long, straight runs—base, levels and restraint matter just as much.',
			answerJsonLd:
				'For experienced installers stretcher bond is usually quicker to run across an open field, with fewer angular cuts than herringbone at boundaries. DIYers still underestimate how visible a wandering bond line or uneven joints become on long, straight runs\u2014base, levels and restraint matter just as much.',
		},
	],
	finalCta: {
		sectionId: 'estimate',
		headingId: 'final-cta-heading',
		title: 'Planning a stretcher bond paving project?',
		description:
			"Use the calculator for a guide range, then organise a site visit when you're ready to properly assess material choice, drainage, levels and set-out.",
		ctaHref: calculatorStretcherUrl,
		ctaLabel: 'Estimate stretcher bond paving cost',
	},
	compareSection: {
		id: 'compare',
		title: 'Stretcher bond vs herringbone',
		variant: 'alt',
		leads: [
			'Stretcher bond is simpler and calmer: joints run in predictable lines, which suits <strong>rectangular paving</strong> beside contemporary Melbourne façades when you want the floor to stay quiet. Herringbone introduces more surface movement and interlock between units, which is why it is often preferred for driveways and other areas where tracking and load spread matter visually and structurally.',
			'Neither pattern replaces correct thickness, bedding and restraint for the intended use. If you are weighing both for the same project, our <a class="hero__secondary" href="/herringbone-paving-melbourne">herringbone paving Melbourne</a> guide covers set-out, cost drivers and where the zig-zag field tends to win.',
		],
	},
	mobbsSection: {
		id: 'mobbs',
		title: 'When to involve Made By Mobbs',
		paragraphs: [
			'Simple paving only works on site when set-out, levels, drainage, planting and surrounding materials are resolved together. A stretcher bond field that ignores how rainwater leaves the section, how a patio meets internal floor levels, or how lawn and beds meet the edge will still disappoint—even with quality pavers on top.',
			'Made By Mobbs Landscapes designs and builds complete outdoor spaces rather than isolated paving strips. That matters when circulation, retaining, planting and built elements all need to agree with the finished pavement plane.',
			'This page offers general guidance only. Real pricing needs your project context—access, existing surfaces, intended traffic and how new work ties into the rest of the garden—before anyone should promise a fixed figure.',
		],
		bookCta: { href: bookUrl, label: 'Book a site visit with Made By Mobbs' },
	},
};
