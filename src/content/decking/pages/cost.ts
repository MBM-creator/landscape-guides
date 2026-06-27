import type { DeckGuidePageContent } from '../deckGuidePage.types';
import { deckBackLink, deckFinalCta, deckMobbsSection } from '../shared';
import { DECK_PLACEHOLDER_FRAMING } from '../placeholders';
import { deckCostBands } from '../costBands';

// TODO(images): replace with a Melbourne deck framing / finished deck photo.
const heroImage = DECK_PLACEHOLDER_FRAMING;

export const deckCostMelbournePage: DeckGuidePageContent = {
	metaTitle: 'Decking Cost Melbourne | Deck Cost Guide',
	metaDescription:
		'What a new deck costs in Melbourne — the size, height, access, subframe and finishing factors that move the price, and why two quotes for the “same” deck can be very different.',
	canonical: '/decking-cost-melbourne/',
	eyebrow: 'Deck cost planning · Melbourne',
	h1: 'Decking cost in Melbourne',
	intro:
		'A deck almost never comes down to a clean per-square-metre rate. Height off the ground, site access, subframe detail and how the deck meets the house move the number far more than the board on top. Use these Melbourne guide ranges (including GST) to plan and compare scope, then get builder-led quotes for your exact site.',
	...deckBackLink,
	heroImage,
	heroAlt: 'Placeholder: deck framing under construction in a Melbourne backyard (photo to follow)',
	heroImageWidth: 800,
	heroImageHeight: 600,
	sections: [
		{
			id: 'cost-table',
			title: 'Melbourne deck cost guide table (including GST)',
			leads: [
				'These are broad guide ranges for properly built Melbourne decks. They are not fixed quotes, and final pricing depends on site conditions, structure and inclusions.',
			],
			factors: [
				{
					label: 'Very small deck / minimum viable job',
					detailHtml:
						`${deckCostBands.minimumJob.price} for ${deckCostBands.minimumJob.size}.`,
				},
				{
					label: 'Basic ground-level timber deck',
					detailHtml:
						`${deckCostBands.basicGroundLevelPerM2}. Typical small projects often sit around ${deckCostBands.typicalSmallDeckTotal}.`,
				},
				{
					label: 'Properly detailed hardwood deck sweet spot',
					detailHtml:
						`Many worthwhile projects land around ${deckCostBands.hardwoodSweetSpotTotal} once framing, fixings, finishing and access are allowed for.`,
				},
			],
		},
		{
			id: 'example-sizes',
			title: 'Example size guides (including GST)',
			variant: 'alt',
			leads: [
				'These examples are broad planning totals based on the basic ground-level range and are useful for early budgeting only.',
			],
			bullets: [
				`<strong>${deckCostBands.exampleTotals[0].size} deck:</strong> ${deckCostBands.exampleTotals[0].total} (${deckCostBands.exampleTotals[0].note}).`,
				`<strong>${deckCostBands.exampleTotals[1].size} deck:</strong> ${deckCostBands.exampleTotals[1].total} (${deckCostBands.exampleTotals[1].note}).`,
				`<strong>${deckCostBands.exampleTotals[2].size} deck:</strong> ${deckCostBands.exampleTotals[2].total} (${deckCostBands.exampleTotals[2].note}).`,
				'Shape, height, stairs, balustrade and access can move these totals substantially.',
			],
		},
		{
			id: 'reboarding',
			title: 'Reboarding existing decks',
			leads: [
				`Reboarding can be a cost-effective option at ${deckCostBands.reboardingPerM2}, but only where the existing frame is sound, compliant and worth keeping.`,
			],
			bullets: [
				'If the frame has movement, rot, wrong treatment level or poor ventilation, reboarding is usually false economy.',
				'Reboarding prices typically exclude structural remediation unless explicitly scoped.',
				'Where frame upgrades are needed, costs can quickly approach a full rebuild.',
			],
		},
		{
			id: 'demolition',
			title: 'Demolition and removal',
			variant: 'alt',
			leads: [
				`Allow ${deckCostBands.demolition.minimum} and up to ${deckCostBands.demolition.upper} depending on size, access, fixings, waste volume and whether the frame is removed.`,
			],
			bullets: [
				'Demolition and disposal are often excluded from headline deck rates unless clearly listed.',
				'Rebuild costs are additional to demolition/removal where relevant.',
				'Hard access, heavily fixed boards and mixed waste streams are common cost multipliers.',
			],
		},
		{
			id: 'subframe',
			title: 'Subframe detail and quote quality',
			leads: [
				`A properly detailed subframe can add around ${deckCostBands.subframeUpgradePerM2} compared with a cheaper build.`,
			],
			bullets: [
				'This is often where deck lifespan is won or lost.',
				'The subframe is also often the key driver behind cheaper quotes.',
				'Look for footing depth/count, joist spacing, framing treatment levels, ventilation and drainage detail.',
				'For structural shortcuts that show up later, see the <a class="hero__secondary" href="/decking-mistakes/">deck mistakes guide</a>.',
			],
		},
		{
			id: 'height-stairs-balustrades',
			title: 'Height, stairs and balustrades',
			leads: [
				'Height changes structure and compliance quickly. Decks around 1m and over generally trigger balustrading requirements and add cost.',
			],
			bullets: [
				`<strong>Stairs:</strong> typically ${deckCostBands.stairsPerGoing}; larger stair runs and landings are quote-specific.`,
				`<strong>Timber balustrade:</strong> ${deckCostBands.balustradesPerLm.timber}.`,
				`<strong>Glass balustrade:</strong> ${deckCostBands.balustradesPerLm.glass}.`,
				`<strong>Wire balustrade:</strong> ${deckCostBands.balustradesPerLm.wire}.`,
				'Complex balustrade geometry and wider stair configurations should be priced from drawings/site measure.',
				'Made By Mobbs does not build decks attached to first floor or above; this guide is focused on ground-level and landscape-integrated decks.',
			],
		},
		{
			id: 'pool-decking',
			title: 'Pool decking cost allowance',
			variant: 'alt',
			leads: [
				`Pool decking typically sits around ${deckCostBands.poolDeckingPerM2} and is ${deckCostBands.poolDeckingPremium}.`,
			],
			bullets: [
				'Main cost drivers include wet-area fixings, drainage, pool coping transitions, access panels and service access.',
				'Curved edges, low clearances, framing complexity, timber movement and tighter finishing standards all add labour.',
				'For full detail, see the <a class="hero__secondary" href="/pool-decking-cost/">pool decking cost guide</a>.',
			],
		},
		{
			id: 'finishing-maintenance',
			title: 'Finishing and maintenance allowances',
			leads: [
				'Initial oiling/sealing is included in the general deck ranges above. Ongoing upkeep should still be budgeted as part of ownership.',
			],
			bullets: [
				`<strong>Initial or maintenance oiling:</strong> ${deckCostBands.maintenance.initialOrMaintenanceOil}.`,
				`<strong>Annual maintenance:</strong> ${deckCostBands.maintenance.annualMaintenance}.`,
				`<strong>Heavy sanding/stripping/nail punching/screw driving:</strong> ${deckCostBands.maintenance.heavyRestorationPerDay}.`,
				`<strong>Exposed decks:</strong> typically maintained ${deckCostBands.maintenance.frequencyExposed}.`,
				`<strong>Protected alfresco decks:</strong> typically maintained ${deckCostBands.maintenance.frequencyProtected}.`,
			],
		},
		{
			id: 'exclusions',
			title: 'What these ranges exclude unless specifically allowed for',
			variant: 'alt',
			bullets: deckCostBands.exclusions.map((item) => item.charAt(0).toUpperCase() + item.slice(1)),
		},
		{
			id: 'site-and-material',
			title: 'Site and material context',
			leads: [
				'Even within the same m² size, costs shift with access, ground conditions, timber choice and how the deck connects to existing structures.',
			],
			bullets: [
				'A narrow side path, slope, reactive clay or rock can significantly increase labour and footing costs.',
				'Natural timber is generally preferred for properly detailed timber decks in Melbourne and for hardwood decks built as part of a larger outdoor renovation; composite can suit some briefs but no composite price bands are published on this guide.',
				'Board choice matters less than framing, fixings and detailing quality over the long term.',
			],
		},
		{
			id: 'why-quotes-differ',
			title: 'Why two quotes can be very different',
			leads: [
				'Two prices for the “same” deck often describe very different builds. Before choosing on price, line these up carefully.',
			],
			bullets: [
				'Weaker subframe allowances (fewer footings, shallower footings, wider joist spacing).',
				'Poor drainage planning and inadequate ventilation detail.',
				'Wrong or under-spec fixings for hardwood and wet areas.',
				'Cheaper board allowances and no finishing included.',
				'Demolition/disposal, stairs or balustrade left out of the headline price.',
				'Unrealistic labour allowances for tight or difficult-access sites.',
				'The subframe is often the biggest hidden driver of cheap quotes.',
			],
		},
	],
	commonMistakes: [
		'<strong>Comparing on headline $/m² only</strong> — cheap rates often hide weaker subframes or missing inclusions.',
		'<strong>Treating these ranges as fixed quotes</strong> — final numbers are site-specific and scope-specific.',
		'<strong>Assuming boards are the main cost</strong> — structure, access and detailing are usually the bigger drivers.',
		'<strong>Leaving out demolition, balustrades or stairs</strong> — these are common omissions in low headline quotes.',
	],
	relatedGuides: { mode: 'exclude', excludeHref: '/decking-cost-melbourne/' },
	faqs: [
		{
			question: 'How much does decking cost per square metre in Melbourne?',
			answer:
				`As a broad guide for properly built ground-level timber decks in Melbourne, allow ${deckCostBands.basicGroundLevelPerM2} including GST. The same area can still vary significantly depending on height, subframe, access, demolition and inclusions.`,
		},
		{
			question: 'Why is one deck quote so much cheaper than another?',
			answer:
				'Usually because the builds are not the same. Cheaper quotes often carry weaker subframes, poorer drainage planning, lower-grade fixings, omitted finishing, or exclusions for demolition, stairs and balustrade that appear later as extras.',
		},
		{
			question: 'What is a realistic minimum budget for a very small deck?',
			answer:
				`For a minimum viable deck job, allow ${deckCostBands.minimumJob.price} for around ${deckCostBands.minimumJob.size}. Small jobs can be proportionally expensive because setup, framing and access still apply.`,
		},
		{
			question: 'Are maintenance costs included in these deck ranges?',
			answer:
				`Initial oiling/sealing is included in the general ranges. Ongoing maintenance is additional, commonly ${deckCostBands.maintenance.initialOrMaintenanceOil} for routine oiling and ${deckCostBands.maintenance.annualMaintenance} for annual maintenance.`,
		},
	],
	finalCta: deckFinalCta,
	mobbsSection: deckMobbsSection,
};
